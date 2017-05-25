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
    NSMutableArray * titlelist;
    NSTimer *timer;
    int tick;
    
    NSString * title;
    NSString * epubfile;
}

- (void) saveepubfile: (NSString *)url data:(NSData *)data;
- (void) clearurllist;
- (void) saveurl: (NSString *)url;
- (void) savetitle: (NSString *)atitle;
- (bool) BuildPub:(NSString *) afile;

@property (nonatomic, assign) int tick;
@property (nonatomic, assign) BOOL ticked;
@property (nonatomic, retain) NSString* title;
@property (nonatomic, retain) NSString* epubfile;
@end
