#import "BatchDownloadManager.h"

#import "BatchDownloadManager.h"

// Suppose you have a file at ~/Downloads/batch.txt with lines like:
// https://example.com/file1.zip
// https://example.org/image.png
'''
NSString *path = [NSHomeDirectory() stringByAppendingPathComponent:@"Downloads/batch.txt"];
NSURL *batchFileURL = [NSURL fileURLWithPath:path];

BatchDownloadManager *mgr = [[BatchDownloadManager alloc] initWithMaxConcurrentDownloads:3];

[mgr startBatchFromFileAtURL:batchFileURL
             progressHandler:^(NSString *urlString, float progress) {
    NSLog(@"%@ progress: %.1f%%", urlString, progress * 100);
} completionHandler:^(NSDictionary<NSString *,NSURL *> *successfulDownloads, NSDictionary<NSString *,NSError *> *failedDownloads) {
    NSLog(@"Batch complete. Successes: %@, Failures: %@", successfulDownloads, failedDownloads);
    // You can persist mgr.resumeDataStore if you want to resume failed/interrupted ones later.
}];
'''

@interface BatchDownloadManager () <NSURLSessionDownloadDelegate>

@property (nonatomic, strong) NSURLSession *session;
@property (nonatomic, assign) NSUInteger maxConcurrent;
@property (nonatomic, strong) NSOperationQueue *callbackQueue;

// Track tasks
@property (nonatomic, strong) NSMutableDictionary<NSURLSessionDownloadTask *, NSString *> *taskToURLString;
@property (nonatomic, strong) NSMutableDictionary<NSString *, NSURL *> *successful;
@property (nonatomic, strong) NSMutableDictionary<NSString *, NSError *> *failed;
@property (nonatomic, strong) NSMutableDictionary<NSString *, NSData *> *resumeDataStore;

@property (nonatomic, copy) BatchProgressBlock progressBlock;
@property (nonatomic, copy) BatchCompletionBlock completionBlock;

@property (nonatomic, strong) dispatch_group_t group;

@end

@implementation BatchDownloadManager

- (instancetype)initWithMaxConcurrentDownloads:(NSUInteger)maxConcurrent {
    self = [super init];
    if (self) {
        _maxConcurrent = maxConcurrent;
        NSURLSessionConfiguration *config = [NSURLSessionConfiguration defaultSessionConfiguration];
        config.HTTPCookieStorage = [NSHTTPCookieStorage sharedHTTPCookieStorage];
        config.HTTPCookieAcceptPolicy = NSHTTPCookieAcceptPolicyAlways;
        config.HTTPMaximumConnectionsPerHost = maxConcurrent;
        
        _callbackQueue = [[NSOperationQueue alloc] init];
        _callbackQueue.maxConcurrentOperationCount = 1; // serialize delegate callbacks if desired
        
        _session = [NSURLSession sessionWithConfiguration:config
                                                 delegate:self
                                            delegateQueue:_callbackQueue];
        _taskToURLString = [NSMutableDictionary dictionary];
        _successful = [NSMutableDictionary dictionary];
        _failed = [NSMutableDictionary dictionary];
        _resumeDataStore = [NSMutableDictionary dictionary];
        _group = dispatch_group_create();
    }
    return self;
}

- (void)startBatchFromFileAtURL:(NSURL *)fileURL
                progressHandler:(BatchProgressBlock)progressBlock
              completionHandler:(BatchCompletionBlock)completionBlock
{
    self.progressBlock = progressBlock;
    self.completionBlock = completionBlock;
    [self.successful removeAllObjects];
    [self.failed removeAllObjects];
    [self.resumeDataStore removeAllObjects];
    [self.taskToURLString removeAllObjects];
    
    NSError *err = nil;
    NSString *content = [NSString stringWithContentsOfURL:fileURL encoding:NSUTF8StringEncoding error:&err];
    if (err || content.length == 0) {
        if (completionBlock) {
            completionBlock(@{}, @{ fileURL.absoluteString: err ?: [NSError errorWithDomain:@"BatchDownload" code:1 userInfo:@{NSLocalizedDescriptionKey: @"Empty or unreadable batch file"}] });
        }
        return;
    }
    NSArray<NSString *> *lines = [content componentsSeparatedByCharactersInSet:[NSCharacterSet newlineCharacterSet]];
    NSMutableArray<NSURL *> *urls = [NSMutableArray array];
    for (NSString *line in lines) {
        NSString *trimmed = [line stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
        if (trimmed.length == 0) continue;
        NSURL *u = [NSURL URLWithString:trimmed];
        if (!u.scheme) {
            u = [NSURL URLWithString:[@"https://" stringByAppendingString:trimmed]];
        }
        if (u) [urls addObject:u];
    }
    
    if (urls.count == 0) {
        if (completionBlock) {
            completionBlock(@{}, @{ @"batch": [NSError errorWithDomain:@"BatchDownload" code:2 userInfo:@{NSLocalizedDescriptionKey: @"No valid URLs found"}] });
        }
        return;
    }
    
    for (NSURL *url in urls) {
        dispatch_group_enter(self.group);
        NSURLRequest *req = [NSURLRequest requestWithURL:url];
        NSURLSessionDownloadTask *task = [self.session downloadTaskWithRequest:req];
        self.taskToURLString[task] = url.absoluteString;
        [task resume];
    }
    
    // Notify when all complete
    dispatch_group_notify(self.group, dispatch_get_main_queue(), ^{
        if (self.completionBlock) {
            self.completionBlock(self.successful, self.failed);
        }
    });
}

- (void)resumeInterruptedDownloadsWithResumeDataMap:(NSDictionary<NSString *, NSData *> *)resumeDataMap
                                    progressHandler:(BatchProgressBlock)progressBlock
                                  completionHandler:(BatchCompletionBlock)completionBlock
{
    self.progressBlock = progressBlock;
    self.completionBlock = completionBlock;
    [self.successful removeAllObjects];
    [self.failed removeAllObjects];
    [self.resumeDataStore removeAllObjects];
    [self.taskToURLString removeAllObjects];
    
    for (NSString *urlString in resumeDataMap) {
        NSData *resumeData = resumeDataMap[urlString];
        if (!resumeData) continue;
        dispatch_group_enter(self.group);
        NSURLSessionDownloadTask *task = [self.session downloadTaskWithResumeData:resumeData];
        self.taskToURLString[task] = urlString;
        [task resume];
    }
    
    dispatch_group_notify(self.group, dispatch_get_main_queue(), ^{
        if (self.completionBlock) {
            self.completionBlock(self.successful, self.failed);
        }
    });
}

#pragma mark - NSURLSessionDownloadDelegate

// progress
- (void)URLSession:(NSURLSession *)session
      downloadTask:(NSURLSessionDownloadTask *)downloadTask
 didWriteData:(int64_t)bytesWritten
 totalBytesWritten:(int64_t)totalBytesWritten
totalBytesExpectedToWrite:(int64_t)totalBytesExpectedToWrite
{
    NSString *urlString = self.taskToURLString[downloadTask];
    float prog = 0;
    if (totalBytesExpectedToWrite > 0) {
        prog = (float)totalBytesWritten / (float)totalBytesExpectedToWrite;
    }
    if (self.progressBlock && urlString) {
        dispatch_async(dispatch_get_main_queue(), ^{
            self.progressBlock(urlString, prog);
        });
    }
}

// finished download (temporary location)
- (void)URLSession:(NSURLSession *)session
      downloadTask:(NSURLSessionDownloadTask *)downloadTask
 didFinishDownloadingToURL:(NSURL *)location
{
    NSString *urlString = self.taskToURLString[downloadTask];
    if (!urlString) return;
    
    // Determine destination
    NSString *suggested = downloadTask.response.suggestedFilename ?: [location lastPathComponent];
    NSURL *docs = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] firstObject];
    NSURL *dest = [docs URLByAppendingPathComponent:suggested];
    
    // Remove existing
    [[NSFileManager defaultManager] removeItemAtURL:dest error:NULL];
    NSError *moveErr = nil;
    BOOL moved = [[NSFileManager defaultManager] moveItemAtURL:location toURL:dest error:&moveErr];
    if (moved) {
        @synchronized(self) {
            self.successful[urlString] = dest;
        }
    } else {
        @synchronized(self) {
            self.failed[urlString] = moveErr;
        }
    }
}

// task completion (errors/resume data)
- (void)URLSession:(NSURLSession *)session
              task:(NSURLSessionTask *)task
didCompleteWithError:(NSError *)error
{
    NSURLSessionDownloadTask *downloadTask = (NSURLSessionDownloadTask *)task;
    NSString *urlString = self.taskToURLString[downloadTask];
    if (!urlString) return;
    
    if (error) {
        NSData *resumeData = error.userInfo[NSURLSessionDownloadTaskResumeData];
        if (resumeData) {
            // Save resume data for possible later resume
            @synchronized(self) {
                self.resumeDataStore[urlString] = resumeData;
            }
        } else {
            @synchronized(self) {
                self.failed[urlString] = error;
            }
        }
    }
    // Signal group leave for both success & failure
    dispatch_group_leave(self.group);
}

@end
