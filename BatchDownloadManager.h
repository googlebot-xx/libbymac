#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^BatchProgressBlock)(NSString *urlString, float progress); // per-file progress
typedef void (^BatchCompletionBlock)(NSDictionary<NSString *, NSURL *> *successfulDownloads,
                                     NSDictionary<NSString *, NSError *> *failedDownloads);

@interface BatchDownloadManager : NSObject

// Initialize with maximum concurrent downloads (e.g., 3)
- (instancetype)initWithMaxConcurrentDownloads:(NSUInteger)maxConcurrent;

// Start batch from a file containing URLs (one per line)
- (void)startBatchFromFileAtURL:(NSURL *)fileURL
                progressHandler:(BatchProgressBlock)progressBlock
              completionHandler:(BatchCompletionBlock)completionBlock;

// Optionally resume a previously interrupted download with resume data mapping (urlString -> resumeData)
- (void)resumeInterruptedDownloadsWithResumeDataMap:(NSDictionary<NSString *, NSData *> *)resumeDataMap
                                    progressHandler:(BatchProgressBlock)progressBlock
                                  completionHandler:(BatchCompletionBlock)completionBlock;

@end

NS_ASSUME_NONNULL_END
