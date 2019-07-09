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
    
    NSString *idurl;
    int ebooktype;
    NSString * title;
    NSString * ebookid;
    NSString * epubfile;
    NSArray * pagelist;
}

- (void) saveepubfile: (NSString *)url data:(NSData *)data;
- (void) clearurllist;
- (void) saveurl: (NSString *)url;
- (NSString*) urltopath: (NSString *) url;
- (void) savetitle: (NSString *)atitle;
- (NSString *) nextpage: (int)page;
- (bool) BuildPub:(NSString *) afile;
- (bool) Buildpdf:(NSString *) afile;

@property (nonatomic, assign) int tick;
@property (nonatomic, assign) int ebooktype;
@property (nonatomic, assign) BOOL ticked;
@property (nonatomic, retain) NSString* title;
@property (nonatomic, retain) NSString* ebookid;
@property (nonatomic, retain) NSString* epubfile;
@property (nonatomic, retain) NSArray* pagelist;
@end
