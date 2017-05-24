//
//  mainWin.h
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "WebKit/WebKit.h"

@class WebDelegate;

@class BuyController;
@class AboutController;

@interface mainWin : NSWindowController <WebPolicyDelegate,WebFrameLoadDelegate>
{
    IBOutlet NSButton * convertbtn;
    IBOutlet id productcaption; // caption in main
    
    IBOutlet WebView * webView;
    IBOutlet NSTextView *textview;
    IBOutlet NSTextField *address;
    
    IBOutlet id buybtn;
    IBOutlet id helpbtn;
    IBOutlet id aboutbtn;
    
    NSString* datadir;
    NSString* cachedir;
    NSString* docdir;
    NSString* ebookdir;
    NSMutableDictionary *vars;
    NSTimer *tasktimer;

    

}

@property (nonatomic, assign) BOOL working;
@property (nonatomic, retain) NSString* datadir;
@property (nonatomic, retain) NSString* ebookdir;

- (void)checkkey;
//- (void)log:(NSString*)msg;
- (void) log:(NSString *)formatString, ...;


@end

extern mainWin * _mainwin;
extern BuyController *reg;
extern AboutController * aboutcontroller;
