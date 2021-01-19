//
//  mainWin.h
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "WebKit/WebKit.h"
#define cc_timeout 20

@class WebDelegate;

@class BuyController;
@class AboutController;
@class RegController;

@interface mainWin : NSWindowController 
{
    
    IBOutlet WKWebView * webView;
//    IBOutlet Mkwebview * webView;
    IBOutlet NSView *containerView;
    
    NSString* datadir;
    NSString* cachedir;
    NSString* docdir;
    NSString* ebookdir;
    NSString* outputfile;
    NSMutableDictionary *vars;
    NSTimer *tasktimer;
    
    

}

@property (nonatomic, assign) BOOL working;
@property (nonatomic, retain) NSString* datadir;
@property (nonatomic, retain) NSString* ebookdir;
@property (nonatomic, retain) NSString* outputfile;

- (void)checkkey;
- (void)foundjason;
//- (void)log:(NSString*)msg;
- (void) log:(NSString *)formatString, ...;
- (NSString *)pagefilename:(NSString *)aurl;
-(NSString *)strFrom:(NSString *)str from:(NSString *)from to:(NSString *)to;

@end

extern mainWin * _mainwin;
extern BuyController *reg;
extern AboutController * aboutcontroller;
extern int ttimeout;
extern NSString* ebookdir00;
extern NSString* js_cssrule;
extern NSString* js_frameheight;
extern NSString* js_nextpage;

//extern RegController * regcontroller;
