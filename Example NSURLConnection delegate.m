//  Created by Scott Robertson on 2/10/13.
//  Copyright (c) 2013 Scott Robertson. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^ExampleDelegateSuccess) (NSData *theData);
typedef void (^ExampleDelegateFailure) (NSError *theError);

@interface ExampleDelegate : NSObject <NSURLConnectionDelegate,NSURLConnectionDataDelegate>

@property (nonatomic,readwrite) NSTimeInterval timeout;
@property (nonatomic,readwrite) NSURLRequestCachePolicy cachePolicy;

- (void)fetchURL:(NSURL *)url withCompletion:(ExampleDelegateSuccess)completion failure:(ExampleDelegateFailure)failure;

- (void)cancelAllCalls;

@end
=================================

//
//  ExampleDelegate.m
//  Example
//
//  Created by Scott Robertson on 2/10/13.
//  Copyright (c) 2013 Scott Robertson. All rights reserved.
//

#import "ExampleDelegate.h"

@interface ExampleURLConnection : NSURLConnection

@property (nonatomic,readwrite,strong) ExampleDelegateSuccess completion;
@property (nonatomic,readwrite,strong) ExampleDelegateFailure failure;
@property (nonatomic,readwrite,strong) NSMutableData *data;
@property (nonatomic,readwrite,strong) NSURLResponse *response;

@end

@implementation ExampleURLConnection

@end

@interface ExampleDelegate ()

@property (nonatomic,readwrite,strong) NSMutableArray *connections;
@property (nonatomic,readwrite,strong) NSOperationQueue *networkQueue;

@end

@implementation ExampleDelegate

- (id)init {
    self = [super init];
    if (self) {
        _networkQueue = [[NSOperationQueue alloc] init];
        // We just have 1 thread for this work, that way canceling is easy
        _networkQueue.maxConcurrentOperationCount = 1;
        _connections = [NSMutableArray arrayWithCapacity:10];
        _timeout = 5.0;
        _cachePolicy = NSURLRequestUseProtocolCachePolicy;
    }
    return self;
}

- (void)fetchURL:(NSURL *)url withCompletion:(ExampleDelegateSuccess)completion failure:(ExampleDelegateFailure)failure {
    NSURLRequest *request = [NSURLRequest requestWithURL:url cachePolicy:self.cachePolicy timeoutInterval:self.timeout];
    ExampleURLConnection *connection = [[ExampleURLConnection alloc] initWithRequest:request delegate:self startImmediately:NO];
    if (!connection) {
        failure([NSError errorWithDomain:@"ExampleDelegate" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Could not initialize NSURLConnection"}]);
        return;
    }
    [connection setDelegateQueue:self.networkQueue];
    connection.data = [NSMutableData dataWithCapacity:1024];
    connection.completion = completion;
    connection.failure = failure;
    
    [connection start];
    
    [self.connections addObject:connection];
}

// This prevents new callbacks from being queued, cancels any queued callbacks
// from being run, and then adds an operation on the queue to cancel all
// connections and clean up the array we use.
- (void)cancelAllCalls {
    [self.networkQueue setSuspended:YES];
    [self.networkQueue cancelAllOperations];
    [self.networkQueue addOperationWithBlock:^{
        for (ExampleURLConnection *connection in self.connections) {
            [connection cancel];
            connection.failure([NSError errorWithDomain:@"ExampleDelegate" code:-2 userInfo:@{NSLocalizedDescriptionKey: @"Call canceled by user"}]);
        }
        [self.connections removeAllObjects];
    }];
    [self.networkQueue setSuspended:NO];
}

#pragma mark - NSURLConnectionDelegate

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    ExampleURLConnection *exConnection = (ExampleURLConnection *)connection;
    exConnection.failure(error);
    [self.connections removeObject:exConnection];
}

#pragma mark - NSURLConnectionDataDelegate

- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response {
    ExampleURLConnection *exConnection = (ExampleURLConnection *)connection;
    
    exConnection.response = response;
    
    exConnection.data.length = 0;
}

- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
    ExampleURLConnection *exConnection = (ExampleURLConnection *)connection;
    [exConnection.data appendData:data];
}

- (void)connectionDidFinishLoading:(NSURLConnection *)connection {
    [self.connections removeObject:connection];
    ExampleURLConnection *exConnection = (ExampleURLConnection *)connection;
    
    if ([exConnection.response isKindOfClass:[NSHTTPURLResponse class]]) {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)exConnection.response;
        if (httpResponse.statusCode >= 400) { // Client/Server Error
            exConnection.failure([NSError errorWithDomain:@"ExampleDelegate" code:httpResponse.statusCode userInfo:@{NSLocalizedDescriptionKey: [NSHTTPURLResponse localizedStringForStatusCode:httpResponse.statusCode]}]);
            return;
        }
    }
    
    exConnection.completion(exConnection.data);
}

@end