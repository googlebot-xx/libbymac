//
//  MyURLProtocol.h
//  vbkbrowser
//
//  Created by aa on 2019-08-06.
//  Copyright © 2019 ebookconverter. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface MyURLProtocol : NSURLProtocol{
//    id _delegate;
//    NSURLConnection* connection;
//    NSMutableData* mutableData;
}

+ (BOOL) canInitWithRequest:(NSURLRequest*)request;

@end

extern NSString * ssfont;
