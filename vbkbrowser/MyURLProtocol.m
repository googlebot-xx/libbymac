//
//  MyURLProtocol.m
//  vbkbrowser
//
//  Created by aa on 2019-08-06.
//  Copyright © 2019 ebookconverter. All rights reserved.
//

#import "MyURLProtocol.h"

static NSString * const MyURLProtocolHandledKey = @"MyApp";

NSString * ssfont;

@interface MyURLProtocol () <NSURLConnectionDelegate>

@property (nonatomic, strong) NSURLConnection *connection;
@property (nonatomic, strong) NSMutableData *mutableData;
@property (nonatomic, strong) NSURLResponse *response;

@end

@implementation MyURLProtocol

+ (BOOL) canInitWithRequest:(NSURLRequest*)request
{
    //static NSUInteger requestCount = 0;
    if ([NSURLProtocol propertyForKey:MyURLProtocolHandledKey inRequest:request]) {
        //NSString * url =  request.URL.absoluteString;
        //NSLog(@"init %@",url);
        //NSLog(@"file #%u: URL = %@", requestCount++, request.URL.absoluteString);
        return NO;
    } else {
        NSString * url =  request.URL.absoluteString;
        if ([url rangeOfString:@"#/books/"].location !=NSNotFound) {
            NSLog(@"books %@",url);
            //isbook = true;
        }
    }
    return NO;
    //return b;
}

+ (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request {
    return request;
}

+ (BOOL)requestIsCacheEquivalent:(NSURLRequest *)a toRequest:(NSURLRequest *)b {
    return [super requestIsCacheEquivalent:a toRequest:b];
}

//- (id) initWithRequest:(NSURLRequest*)theRequest
//        cachedResponse:(NSCachedURLResponse*)cachedResponse
//                client:(id<NSURLProtocolClient>)client
//{
//    // Move the delegate from the request to this instance
//    NSMutableURLRequest* req = (NSMutableURLRequest*)theRequest;
//    _delegate = [NSURLProtocol propertyForKey:@"MyApp" inRequest:req];
//    [NSURLProtocol removePropertyForKey:@"MyApp" inRequest:req];
//    NSLog(@"initWithRequest");
//    
//    // Complete my setup
//    self = [super initWithRequest:req cachedResponse:cachedResponse client:client];
//    if (self) {
////        NSLog(@"initWithRequest");
//        _data = [[NSMutableData alloc] init];
//        //[_data retain];
//    }
//    return self;
//}

- (void) startLoading {

        
    [NSURLProtocol removePropertyForKey:MyURLProtocolHandledKey inRequest:self.request];
        NSMutableURLRequest *newRequest = [self.request mutableCopy];
        [NSURLProtocol setProperty:@YES forKey:MyURLProtocolHandledKey inRequest:newRequest];
    
        self.connection = [NSURLConnection connectionWithRequest:newRequest delegate:self];
        //NSLog(@"startLoading %@",newRequest.URL.absoluteString);
}

- (void) stopLoading
{
    [self.connection cancel];
    self.mutableData = nil;
    //NSLog(@"stopLoading %@",self.request.URL.absoluteString);
}

#pragma mark - NSURLConnectionDelegate

- (void) connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response {
    [self.client URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageNotAllowed];
    
    self.response = response;
    self.mutableData = [[NSMutableData alloc] init];
}

- (void) connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
    //[self.client URLProtocol:self didLoadData:data];
    
    [self.mutableData appendData:data];
}

- (void) connectionDidFinishLoading:(NSURLConnection *)connection {
    //NSString *str = @"console.log('test');";
    //self.mutableData = (NSMutableData *)[str dataUsingEncoding:NSUTF8StringEncoding];
    //[self findkey];
    [self.client URLProtocol:self didLoadData:self.mutableData];
    [self.client URLProtocolDidFinishLoading:self];
    //NSLog(@"file %@",self.request.URL.absoluteString);
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    [self.client URLProtocol:self didFailWithError:error];
}

//- (void)connectionDidFinishLoading:(NSURLConnection*)conn
//{
//    [[self client] URLProtocolDidFinishLoading:self];
//    NSLog(@"connectionDidFinishLoading");
//    
//    // Forward the response to your delegate however you like
////    if (_delegate && [_delegate respondsToSelector:@selector(...)]) {
////        [_delegate ... withRequest:[self request] withData:_data];
////    }
//}

- (NSURLRequest*)connection:(NSURLConnection*)connection willSendRequest:(NSURLRequest*)theRequest redirectResponse:(NSURLResponse*)redirectResponse
{
    return theRequest;
}

-(void) findkey
{
    NSString *keystr = @"this.keys = keys;";
    NSString *str = @"keys.plugins=\"plugin test\";this.keys = keys;console.log(this.keys);";
    NSString * js =[[NSString alloc] initWithData:self.mutableData encoding:NSUTF8StringEncoding];

    if (true) {
        keystr = @"parallel:function";
        str = ssfont;
    }
    NSString * newjs = [js stringByReplacingOccurrencesOfString:keystr withString:str]; //remove /books/ in path
    self.mutableData = (NSMutableData *)[newjs dataUsingEncoding:NSUTF8StringEncoding];
    
}

@end
