//
//  webdelegate.h
//  vbkbrowser
//
//  Created by aa on 2017-05-15.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "WebKit/WebKit.h"

@interface WebDelegate : NSObject <WebResourceLoadDelegate>
{
    NSMutableArray * urllist;
    NSTimer *timer;
    int tick;
}

- (void) saveepubfile: (NSString *)url data:(NSData *)data;

@property (nonatomic, assign) int tick;
@property (nonatomic, assign) BOOL ticked;
@end
