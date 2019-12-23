//
//  mainWin.h
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "WebKit/WebKit.h"
#define c_timeout 100

@class WebDelegate;

@class BuyController;
@class AboutController;
@class RegController;

@interface mainWin : NSWindowController 
{
    
    WKWebView * webView;
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


@end

extern mainWin * _mainwin;
extern BuyController *reg;
extern AboutController * aboutcontroller;
//extern RegController * regcontroller;
