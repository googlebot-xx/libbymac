//
//  mainWin.m
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//
#include <stdlib.h>
#import <Quartz/Quartz.h>
#import "WebKit/WebKit.h"
#import "mainWin.h"
#import "webdelegate.h"
#import "const.h"
#import <CommonCrypto/CommonDigest.h>
#import "MyURLProtocol.h"
#import "BuyController.h"
#import "AboutController.h"
#import "RegController.h"
//#import "NSURLProtocol+WKWebViewSupport.h"
#include <IOKit/pwr_mgt/IOPMLib.h>
//#include <IOKit/pwr_mgt/IOPMLibPrivate.h>

//#define tviewwidth 1200

// 0.99
//https://www.vitalsource.com/products/gluten-free-and-wheat-free-guide-with-recipes-speedy-publishing-v9781633835498


static void* keyValueObservingContext = &keyValueObservingContext;


@interface mainWin ()< WKNavigationDelegate, WKUIDelegate>

@end

mainWin * _mainwin;
BuyController *reg;
AboutController * aboutcontroller;
NSString* ebookdir00;
NSString * addressurl, * oldaddrees;
NSString * booktitle;
NSString * jsdiv;
CGFloat frameheigh;
NSRect webviewrect;
int ttimeout;
int tviewwidth;
int ebooktype;
int captcha;

IOPMAssertionID assertionID;
IOReturn iosuccess;

@implementation mainWin {

    IBOutlet NSButton * testbtn;
    IBOutlet id productcaption; // caption in main
    IBOutlet id touchlabel; // caption in main
    IBOutlet id resetbtn; // caption in main

    IBOutlet NSBox * box;
    IBOutlet NSView * bview;
    IBOutlet NSButton * downloadbtn;
    IBOutlet NSTextView *textview;
    IBOutlet NSTextField *address;
    IBOutlet NSTextField *timeouted;
    
    IBOutlet id buybtn;
    IBOutlet id helpbtn;
    IBOutlet id aboutbtn;

    int taskindex;
    int totalpage;
    int pageindex;
    int framenum;
    int ticknum;
    int startno;
    BOOL framewaiting;
    BOOL jswaiting;
    BOOL pausing;
    NSString * jsmessage;
    CGPoint mousepoint;
    
    WebDelegate * webdelegate;
    WebScriptObject * epubwinobj;
    WebFrame * epubcontent;
    
    WKWebViewConfiguration *configuration;
}

@synthesize working;
@synthesize datadir;
@synthesize ebookdir;
@synthesize outputfile;


- (id)init
{
    self = [super initWithWindowNibName:@"mainWin" ];
    if (self) {
        reg = [[BuyController alloc] initWithWindowNibName:@"BuyController"];
        aboutcontroller = [[AboutController alloc] initWithWindowNibName:@"AboutController"];
        webdelegate = [[WebDelegate alloc] init];
        _mainwin = self;
        vars = [[NSMutableDictionary alloc] init];
        configuration = [[WKWebViewConfiguration alloc] init];
    }
    
    return self;
}

- (void)windowDidLoad {
    [super windowDidLoad];
}

- (void)checkkey
{
    //[reg checkkey:self];
    
    [[self window] setViewsNeedDisplay:YES];
    [[self window] display];
    [[self window] makeKeyAndOrderFront:nil];
    //[self appinit];
    
//#ifdef DEBUG
    //[self addfolder:@"/Users/meijun/Documents/eBookConverter/test"];
//#endif
    
}

- (void) dealloc
{
    //[NSURLProtocol unregisterClass:[MyURLProtocol class]];
    [webView removeObserver:self forKeyPath:@"estimatedProgress"];

    // if you have set either WKWebView delegate also set these to nil here
    [webView setNavigationDelegate:nil];
    [webView setUIDelegate:nil];

}

//DOMContentLoaded
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
- (void)loadjs:(WKWebViewConfiguration *) configuration
{
    NSString * fname =[[NSBundle mainBundle]
                       pathForResource:@"cssrule" ofType:@"js"];
    jsdiv=[self loadfile:fname];
    fname =[[NSBundle mainBundle]
                       pathForResource:@"frameheight" ofType:@"js"];
    NSString * js=[self loadfile:fname];
    //return;
    WKUserScript *script = [[WKUserScript alloc] initWithSource:js injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:NO];
    WKUserContentController *userContentController = [[WKUserContentController alloc] init];
    [userContentController addUserScript:script];
    [userContentController addScriptMessageHandler:self name:@"logging"];
    configuration.userContentController = userContentController;
}

- (void)awakeFromNib
{
    [self loadjs:configuration];
    //webView = [[WKWebView alloc] initWithFrame:[containerView bounds] configuration:configuration];
    webView = [[WKWebView alloc] initWithFrame:[bview bounds] configuration:configuration];
    [webView setAutoresizingMask:(NSViewWidthSizable | NSViewHeightSizable)];
    #ifdef DEBUG
        [configuration.preferences  setValue:@YES forKey:@"developerExtrasEnabled"];
    #endif
    //webView.allowsMagnification = YES;
    //webView.allowsBackForwardNavigationGestures = YES;// NO;
    webView.navigationDelegate = self;
    webView.UIDelegate = self;
    
    [productcaption setStringValue:c_product];
    
    NSArray * paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    docdir = [paths objectAtIndex:0];
    
    ebookdir = docdir;
    ebookdir = [ebookdir stringByAppendingPathComponent:c_company];
    [self createfolder:ebookdir];
    
    
    ebookdir = [ebookdir stringByAppendingPathComponent:c_app];
    [self createfolder:ebookdir];

    ebookdir00 = ebookdir;
    cachedir = [ebookdir stringByAppendingPathComponent:@"cache"];
    [self createfolder:cachedir];
    
    datadir = [ebookdir stringByAppendingPathComponent:@"tmp"];
    [self createfolder:datadir];
    
    [reg checkkey];
    //[NSString stringWithFormat:@"Ver %@ (%@)\n\n%@",s2,s4,s5];
    //[textview setHasVerticalScroller:YES];
    //[textview setHasHorizontalScroller:YES];
    //[webView setUIDelegate:self];
    //[webView setFrameLoadDelegate:self];
    [textview setVerticallyResizable:YES];
    [textview setHorizontallyResizable:NO];
    [testbtn setHidden:true];
    [resetbtn setHidden:true];
    [downloadbtn setEnabled:false];
    //[box setHidden:true];
    //[touchlabel setHidden:true];

    if ([reg isreg]) {
        [buybtn setHidden:true];
    }
    //[webView setUIDelegate:self];

#ifdef DEBUG
    [testbtn setHidden:false];
    [resetbtn setHidden:false];
    [timeouted setStringValue:@"30"];
#else
    [testbtn setHidden:true];
    [timeouted setStringValue:@"50"];
#endif
    
#ifdef DEBUG
//    [testbtn setHidden:false];
#endif
    
    //[downloadbtn setWantsLayer:YES];
    //downloadbtn.layer.backgroundColor = [NSColor greenColor].CGColor;
    
    //address ed
    [address setTarget:self];
    [address setAction:@selector(enterAddress:)];

    //[webView setResourceLoadDelegate:self];
    //[self clearcache2];
    //[self setcache];
    
    //[webView setResourceLoadDelegate:webdelegate];
    //[webView setPolicyDelegate:self];
    //[webView setFrameLoadDelegate:self];
    
    //NSString * us =@"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.1   Safari/605.1.15";
    NSString * us = @"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)"; //@" Version/13.0.2 Safari/605.1.15";
    us = [us stringByAppendingString:@" Version/13.0.2 Safari/605.1.15"];
    NSString * ra = [self randomstr:8];
    webView.customUserAgent=[NSString stringWithFormat:us,ra] ;
    working = false;
    
    //[NSURLProtocol wk_registerScheme:@"http"];
    //[NSURLProtocol wk_registerScheme:@"https"];
    //[NSURLProtocol wk_registerScheme2];
    //[NSURLProtocol registerClass:[MyURLProtocol class]];
    //[NSURLProtocol registerClass:[HybridNSURLProtocol class]];
    
    [self setssfont];
    //NSString * aurl = @"https://www.vitalsource.com/bookshelf/home";
    //NSString * aurl = @"https://www.bing.com";
    //[webView becomeFirstResponder];
    
    [webView addObserver:self forKeyPath:@"title" options:0 context:keyValueObservingContext];
    [webView addObserver:self forKeyPath:@"URL" options:0 context:keyValueObservingContext];
    //[webView addObserver:self forKeyPath:@"estimatedProgress" options:0 context:keyValueObservingContext];
    //NSString * aurl = @"http://flyos.net/bt4.htm";
    NSString * aurl = @"https://www.vitalsource.com/";
    //NSString * aurl = @"https://www.google.com/";
    //NSString * aurl = @"file:///Users/aa/Public/js/dom/bt2.htm";
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];

    //[self performSelector: @selector(homepagebtnclick:) withObject: nil afterDelay: 1];
    
    //[self log:@"ready %@",aurl];
    //[self log:@"go"];
    //[containerView addSubview:webView];
    [bview addSubview:webView];

}

- (void)setssfont
{
    NSDateFormatter* df = [[NSDateFormatter alloc]init];
    [df setDateFormat:@"MM/dd/yyyy:HH"];
    NSString *seed = [df stringFromDate: [NSDate date]];
    //NSLog(@"%@",seed);
    NSString * s_fontjs=@"parallel:function(x,e){ this.keys.plugins=\"%@\"; \
    this.keys.canvas.img=\"%@\"; this.keys.webGL.img=\"%@\"; \
    this.parallel1(x,e); %@ },parallel1:function";
    //NSString * seed=@"ksfioue";
    NSString * s1=[NSString stringWithFormat:@"%@21",seed];
    NSString * s2=[NSString stringWithFormat:@"%@22",seed];
    NSString * s3=[NSString stringWithFormat:@"%@23",seed];
    NSString * s4=[NSString stringWithFormat:@"%@24",seed];
    s1 = [self MD5:s1];
    s2 = [self MD5:s2];
    s3 = [self MD5:s3];
    s4 = [self MD5:s4];
    NSString * s11= [s1 substringWithRange:NSMakeRange(1, 8)];
    s11 = [s11 stringByAppendingString:s2];
    NSString * s12= [s1 substringWithRange:NSMakeRange(9, 8)];
    s12 = [s12 stringByAppendingString:s3];
    NSString * s13=[NSString stringWithFormat:@"%@::%@::%@",[s4 substringWithRange:NSMakeRange(1, 10)],[s4 substringWithRange:NSMakeRange(11, 9)],[s4 substringWithRange:NSMakeRange(20, 8)]];
    s13=@"";//
    ssfont = [NSString stringWithFormat:s_fontjs,s13,s12,s11,@""];
    //NSLog(ssfont);
}

- (void)setcache
{
    //return;
    int cacheSizeMemory = 4*1024*1024; // 4MB
    int cacheSizeDisk = 32*1024*1024; // 32MB
    NSURLCache *sharedCache = [[NSURLCache alloc] initWithMemoryCapacity:cacheSizeMemory diskCapacity:cacheSizeDisk diskPath:cachedir];
    [NSURLCache setSharedURLCache:sharedCache];
}

- (void)clearcache
{
    //return;
    [[NSURLCache sharedURLCache] removeAllCachedResponses];
    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];
    
    for (NSHTTPCookie *cookie in [cookieJar cookiesForURL:[NSURL URLWithString:@"https://bookshelf.vitalsource.com"]])
    {
        [cookieJar deleteCookie:cookie];
    }
}

- (void)clearcache2
{
    //return;
    NSSet *websiteDataTypes
    = [NSSet setWithArray:@[WKWebsiteDataTypeDiskCache,
                            //WKWebsiteDataTypeOfflineWebApplicationCache,
                            WKWebsiteDataTypeMemoryCache,
                            WKWebsiteDataTypeLocalStorage,
                            WKWebsiteDataTypeCookies,
                            //WKWebsiteDataTypeSessionStorage,
                            //WKWebsiteDataTypeIndexedDBDatabases,
                            //WKWebsiteDataTypeWebSQLDatabases
                            ]];
    //// All kinds of data
    //NSSet *websiteDataTypes = [WKWebsiteDataStore allWebsiteDataTypes];
    //// Date from
    NSDate *dateFrom = [NSDate dateWithTimeIntervalSince1970:0];
    //// Execute
    [[WKWebsiteDataStore defaultDataStore] removeDataOfTypes:websiteDataTypes modifiedSince:dateFrom completionHandler:^{
        // Done
        NSLog(@"remove done");
    }];
}




- (IBAction)testfile:(id)sender
{
    //NSString * url =@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg";
    //[webdelegate saveepubfile:url data:nil];
    [self pageiframejs:0];
}

- (IBAction)testbtn:(id)sender
{
    //[self pagefilename];
    //return;
    //[self takeshot];
   // [self savepdf:@"/Users/aa/Documents/pdf1.pdf" aimg:@"/Users/aa/Documents/eBookConverter/VitalSource Downloader/test1.jpg"];
   // return;
    //[webdelegate BuildPub:nil];
    //return;
//    [self setWorking:true];
//    NSLog(@"start");
//    [self wait:3];
//    NSLog(@"end");
//    NSRect r = [[self window] frame]  ;
//    CGPoint warpPoint = CGPointMake(r.origin.x+r.size.width-100,[[NSScreen mainScreen] frame].size.height- (r.origin.y+r.size.height/2));
//    CGWarpMouseCursorPosition(warpPoint);
//    NSLog(@"%4.2f %4.2f %4.2f",r.origin.x,r.origin.y,r.size.height);
//    return;
    //[webdelegate BuildPub:nil];
    //return;
    //[webdelegate Buildpdf:nil];
    //return;
    //test save epub
    //[webdelegate saveepubfile:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg" data:nil];
    //[webdelegate saveepubfile:@"https://jigsaw.vitalsource.com/api/v0/books/9780826904942/pages/300737558/content#cfi=/9" data:nil];
    //return;
    
    //NSString * url = [webView mainFrameURL];
    NSString * url = webView.URL.absoluteString;
    if ([url rangeOfString:@"login"].location != NSNotFound) {
        [self loginjs:nil];
    } else {
        //[self totalbuttonjs];
        //[self checknextbutton];
        //[self printhtmlpdf];
        //[self takeshot];
        [self scrubberjs];

        //[self rundownload];
        //[self performSelector: @selector(rundownload) withObject: nil afterDelay: 0.1];
        //[self setWorking:true];

    }
#ifdef DEBUG
    //[regcontroller savekey:@"" skey:@"" suser:@"aa"];
    //[reg savekey:@"" skey:@"" suser:@""];
#endif
}

- (IBAction)downloadbtn:(id)sender
{
    if (working) {
        pausing=true;
    }
    [self setWorking: !working];
   // [self totalbuttonjs];
}

- (IBAction)boxclosebtn:(id)sender
{
    //[box setHidden:true];
}


- (IBAction)runjstext:(id)sender
{
    NSString * js = [[textview textStorage] string];
    //id jsobj = [webView windowScriptObject];
    //[jsobj evaluateWebScript: js];
    if (epubwinobj) {
        [epubwinobj evaluateWebScript: js];
    }
}

- (IBAction)resetbtn:(id)sender
{
    //[self nextbuttonjs];
    //[webdelegate BuildPub:nil];
    //[webdelegate Buildpdf:nil];
    //return;
#ifdef DEBUG
    //[self loginjs:sender];
    [regcontroller savekey:@"" skey:@"" suser:@"aa"];
//    [reg savetimes:0];
#endif
}
#pragma mark - runloop

- (void) wait: (float) secs
{
    [[NSRunLoop mainRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:secs]];
    //[[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:secs]];
    return;

//[[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
//    NSDate *loopUntil = [NSDate dateWithTimeIntervalSinceNow:secs];
//    while (true) {
//        [[NSRunLoop currentRunLoop] runMode: NSDefaultRunLoopMode beforeDate:loopUntil];
//        break;
//    }
        //loopUntil = [NSDate dateWithTimeIntervalSinceNow:secs];
    
//    float i = 0;
//    NSDate *loopUntil = [NSDate dateWithTimeIntervalSinceNow:0.2];
//    NSRunLoop *theRL = [NSRunLoop currentRunLoop];
//    while (i< secs ) {
//        [theRL runMode:NSRunLoopCommonModes beforeDate:loopUntil];
//         i += 0.1;
//    };
    
    float i = 0;
    while (i< secs)
    {
        [[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];
        i += 0.1;
    }
    
//    NSDate *start = [NSDate date];
//    //[self log:@"start %@",start];
//    NSLog(@"start %@",start);
//    [self wait:1.5];
//    NSLog(@"end %@",[NSDate date]);
//    [self log:@"end"];
//    return;
}

- (void)timerFired:(NSTimer*)theTimer
{
    [theTimer invalidate]; //stop the NSTimer
}

- (void) setWorking:(BOOL)aworking
{
    working = aworking;
    if (aworking) {
        ttimeout= [[timeouted stringValue] intValue];
        if (!pausing) {
            [vars removeAllObjects];
            [webdelegate clearurllist];
            totalpage=0;
            taskindex=0;
            pageindex=0;
            [self log:@"Start download, wait ...."];
        }
        //webdelegate.title = nil;// @"";
        //[NSThread sleepForTimeInterval:0.5f];
        //move mouse
        pausing=false;
        captcha=0;
        [self scrubberjs];
        webviewrect = [webView frame];
        ebooktype = [self ebooktypejs];
        tviewwidth = webviewrect.size.width;
        if (ebooktype == 2) {
            tviewwidth = 1200;
        }
        NSRect r = webviewrect;
        [webView setFrame:NSMakeRect(r.origin.x,r.origin.y,tviewwidth,r.size.height)];
        //mousepoint = CGPointMake(r.origin.x+r.size.width-50,[[NSScreen mainScreen] frame].size.height- (r.origin.y+r.size.height/2));
        //CGWarpMouseCursorPosition(mousepoint);
        //[NSApplication
        
        tasktimer = [NSTimer scheduledTimerWithTimeInterval:0.6 target:self selector:@selector(epubtaskhandle:) userInfo:nil repeats:NO];
        CFStringRef* reasonForActivity= CFSTR("vitalsource Describe Activity Type");
//kIOPMAssertionTypePreventSystemSleep kIOPMAssertionTypeNoDisplaySleep
        iosuccess = IOPMAssertionCreateWithName(kIOPMAssertionTypePreventSystemSleep ,
                                            kIOPMAssertionLevelOn, reasonForActivity, &assertionID);
        
        [downloadbtn setTitle:@"Pause"];
    } else {
        working = false;
        NSRect r = webviewrect;
        [webView setFrame:NSMakeRect(r.origin.x,r.origin.y,r.size.width,r.size.height)];
        [tasktimer invalidate];
        if (pausing) {
            [self log:@"Pause at page %d",pageindex];
            [downloadbtn setTitle:@"Resume"];
        } else {
            [self log:@"download end"];
            [downloadbtn setTitle:@"Download"];
        }
        if (iosuccess==kIOReturnSuccess) {
            iosuccess = IOPMAssertionRelease(assertionID);
        }
    }
    //NSLog(@"working %d",aworking);
}

- (void) rundownload
{
    [self setWorking:true];
    
    taskindex = 0;
}

- (void) epubtaskhandle:(NSTimer*)theTimer
{
    if (!working) return;
    //NSLog(@"task %d tick %d",taskindex,ticknum);
    switch (taskindex) {
        case 0:
            //taskindex = [self totalbuttonjs];
            //totalpage= [vars[@"Totalpages"] intValue];
            totalpage = 999;
            if (![reg isreg]) {
                totalpage = 6;
                [self log:@"demo version only download %d pages",totalpage];
                
            }
            [self log:@"Title %@",webView.title];

            ticknum=ttimeout;
            captcha = 0;
            taskindex = 20;
            oldaddrees = @"";
            break;
        case 10:
            // Item 3
            if ((framenum>0) || (![addressurl isEqualToString:oldaddrees] )) {
                [self log:@"load page %d",pageindex+1];
                //[self pagebuttonjs:pageindex]; ////goback page button click
                //[self nextpage:pageindex];
                framewaiting = true;
                framenum=0;
                ticknum =0;
                captcha = 0;
                oldaddrees=addressurl;
                taskindex = 20;
                [self nextpage:pageindex];
                //press nextpage
            } else { //end
                taskindex = 90; //goback page button click
            }
            break;
        case 20:
            // Item 3
            ticknum +=1;
            [touchlabel setStringValue:[@(ticknum) stringValue]];
            if (captcha>0) {
                [self downloadbtn:nil ];
                [self log:@"Captcha, clear captcha and click button to resume."];
                NSBeep();
                NSBeep();
            }
            if (ticknum>ttimeout) {
                if (![oldaddrees isEqualToString:addressurl]) {
                    taskindex = 30;
                    pageindex+=1;
                    //resize webview
                    [self resizewebview];
                    ticknum=ttimeout-1;
                    //save page
                } else {
                    taskindex = 90;
                }
            }
            break;
        case 30:
            // Item 3
            ticknum +=1;
            [touchlabel setStringValue:[@(ticknum) stringValue]];
            if (ticknum>ttimeout) {
                    taskindex = 10;
                    [self takeshot];
                    //save page
            }
            if (pageindex>totalpage) {
                taskindex = 90; //goback page button click
            }
            break;
        case 12:
            // do nothing ...
            break;
        case 90:
            // Item 3
            [self log:@"building pdf file ...."];
            [textview setNeedsDisplay:YES];
            bool b = [webdelegate Buildpdf:nil];
            [self setWorking:false];
            pausing = false;
            NSBeep();
            NSBeep();
//            [self setWorking:false];
//            [self openoutputfile];
            [[NSWorkspace sharedWorkspace] openFile:ebookdir withApplication:@"Finder"];
            break;
        default:
            break;
    }

    if (pageindex>4) {
        //taskindex = 20; //goback page button click
        //working = false;
    }
    if (working)
        tasktimer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(epubtaskhandle:) userInfo:nil repeats:NO];
}

-(void) waitselector {
    taskindex = 10;
    pageindex +=1;
    //NSLog(@"waitselector ...");
    if (pageindex==totalpage) {
        taskindex = 20; //goback page button click
    }
    
}

- (void) epubtaskhandle_js:(NSTimer*)theTimer
{
    if (!working) return;
    
    switch (taskindex) {
        case 0:
            taskindex = [self totalbuttonjs];
            //totalpage= [vars[@"Totalpages"] intValue];
            [self log:@"Total pages = %d",totalpage];
            break;
        case 1:
            // check totalpages
            if ([self checkdictkey:@"Totalpages"] == 1) {
                totalpage= [vars[@"Totalpages"] intValue];
                taskindex = 10;
            }
            break;
        case 10:
            // Item 3
            webdelegate.ticked =false;
            if (pageindex<totalpage) {
                [self log:@"load page %d",pageindex+1];
                [self pagebuttonjs:pageindex]; ////goback page button click
                taskindex = 11;
            }
            break;
        case 11:
            // Item 3
            if( webdelegate.ticked ){
                pageindex += 1;
                taskindex = 10; //goback page button click
            }
            if (pageindex==totalpage) {
                taskindex = 20; //goback page button click
            }
            break;
        case 20:
            // Item 3
            [self log:@"building epub file ...."];
            bool b = [webdelegate BuildPub:nil];
            [self setWorking:false];
            [self openoutputfile];
            [[NSWorkspace sharedWorkspace] openFile:ebookdir withApplication:@"Finder"];
            
            break;
        default:
            break;
    }
    
    if (pageindex>4) {
        //taskindex = 20; //goback page button click
        //working = false;
    }
}


- (void) consolecheck:(NSString *) item
{
    while (self.working)
    {
        
    }
}

- (int) checkdictkey:(NSString *) key
{
    if ([vars objectForKey:key]) {
        // contains object
        return [[vars objectForKey:key] intValue];
    }
    return -1;
}

#pragma mark - javasript

- (void) log:(NSString *)formatString, ...
{
    
    va_list args;
    va_start(args, formatString);
    NSString * str = [[NSString alloc] initWithFormat:formatString arguments:args];
    va_end(args);
    
    NSMutableAttributedString *astr = [[NSMutableAttributedString alloc] initWithString:str attributes:
    @{ NSForegroundColorAttributeName: NSColor.controlTextColor}];
    
    [textview.textStorage appendAttributedString:astr];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
    [textview scrollRangeToVisible:NSMakeRange([[textview string] length], 0)];

}

- (void) logupdate:(NSString *)formatString, ...
{
    
    va_list args;
    va_start(args, formatString);
    NSString * str = [[NSString alloc] initWithFormat:formatString arguments:args];
    va_end(args);
    NSString *text = [[textview textStorage] string];
    
    NSMutableAttributedString *astr = [[NSMutableAttributedString alloc] initWithString:str attributes:
    @{ NSForegroundColorAttributeName: NSColor.controlTextColor}];
    
    [textview.textStorage appendAttributedString:astr];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
    [textview scrollRangeToVisible:NSMakeRange([[textview string] length], 0)];

}

- (void) log1: (NSString*) msg
{
    //[textview ]
    //NSString * str = [NSString stringWithFormat:msg,args];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:msg]];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
}


- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message
{
    // what ever were logged with console.log() in wkwebview arrives here in message.body property
    NSString * msg=message.body;
    //NSLog(@"%@",msg);
    if ([msg isEqualToString:@"recaptcha"]) {
        captcha=1;
        NSLog(@"***captcha");
        return;
    }
    NSArray * list = [msg componentsSeparatedByString:@"="];
    if ([list[0] isEqualToString:@"#Height"]) {
        CGFloat height = [list[1] floatValue];
        if (height>100) {
            frameheigh = height;
            //NSLog(@"height: %f", frameheigh);
        }
    }
}

//https://developer.apple.com/reference/webkit/webframeloaddelegate/1501445-webview?language=objc

- (void)webView:(WebView *)webView windowScriptObjectAvailable:(WebScriptObject *)windowScriptObject {
    
    [windowScriptObject setValue:self forKey:@"MyApp"];
}

- (void)webView:(WebView *)sender didClearWindowObject:(WebScriptObject *)windowObject forFrame:(WebFrame *)frame
{
    NSString * framename = [frame name];
    if ([framename isEqualToString:@"epub-content"]) {
        epubwinobj = windowObject;
        //[windowObject setValue:self forKey:@"MyApp"];
        //NSLog(@"epub winobj get");
    }
}

- (void) loginjs:(id)sender
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];

    id jsobj;
    //= [webView windowScriptObject];
//    [jsobj setValue:self forKey:@"MyApp"];
    NSString* js;
    
#ifdef DEBUG
            js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
            document.getElementById(\"session_email\").value = \"youhdtv@gmail.com\"; \
            document.getElementById(\"session_password\").value = \"600338qQ@\";  \
            document.getElementById(\"new_session\").submit(); \
            MyApp.consoleLog_(\"login ...\"); \
            ";
//        js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
//        document.getElementById(\"session_email\").value = \"Mydreamgrade5@gmail.com\"; \
//        document.getElementById(\"session_password\").value = \"MDSpass@123\";  \
//        document.getElementById(\"new_session\").submit(); \
//        MyApp.consoleLog_(\"login ...\"); \
//        ";
//    js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
//    document.getElementById(\"session_email\").value = \"1558016635_4027@barchen.fr\"; \
//    document.getElementById(\"session_password\").value = \"by_CwFY3oH1Dz414k2b4!\";  \
//    document.getElementById(\"new_session\").submit(); \
//    MyApp.consoleLog_(\"login ...\"); \
//    ";
//    js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
//    document.getElementById(\"session_email\").value = \"a03@pwqsoft.com\"; \
//    document.getElementById(\"session_password\").value = \"600338qQ~\";  \
//    document.getElementById(\"new_session\").submit(); \
//    MyApp.consoleLog_(\"login ...\"); \
//    ";

//    js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
//    document.getElementById(\"session_email\").value = \"C004px8@rogers.com\"; \
//    document.getElementById(\"session_password\").value = \"Newman@101\";  \
//    document.getElementById(\"new_session\").submit(); \
//    MyApp.consoleLog_(\"login ...\"); \
//    ";

//    js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
//    document.getElementById(\"email-field\").value = \"a02@pwqsoft.com\"; \
//    document.getElementById(\"password-field\").value = \"600338qQ~\";  \
//    document.getElementById(\"signin-form\").submit(); \
//    MyApp.consoleLog_(\"login ...\"); \
//    ";
    
//    js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
//    document.getElementById(\"email-field\").value = \"rashadjefferson@gmail.com\"; \
//    document.getElementById(\"password-field\").value = \"Nkbagroup$\";  \
//    document.getElementById(\"signin-form\").submit(); \
//    MyApp.consoleLog_(\"login ...\"); \
//    ";
    //console.log(\"hellow\");";
    //[jsobj evaluateWebScript: js];
    [webView evaluateJavaScript:js completionHandler:nil];
#endif
   
}

- (void)consoleLog:(NSString *)aMessage {
    NSLog(@"consoleLog: %@", aMessage);
    jsmessage = aMessage;
    jswaiting = false;
}

- (void)varLog:(NSString *)aMessage {
//    int i = (int)[aMessage rangeOfString:@"###"].location;
    NSLog(@"%@",aMessage);
    //[self log:aMessage];
    if ([aMessage rangeOfString:@"###"].location == 0) {
        NSString * astr = [aMessage stringByReplacingOccurrencesOfString:@"###" withString:@""];
        //[self log:astr];
        NSArray * list = [astr componentsSeparatedByString:@"="];
        [vars setValue:[list objectAtIndex:1] forKey:[list objectAtIndex:0]];
        if ([aMessage rangeOfString:@"title"].location!= NSNotFound)
        {
            [webdelegate savetitle:[list objectAtIndex:1]];
            [self log:[list objectAtIndex:1]];
        }
        else if ([aMessage rangeOfString:@"Totalpages"].location!= NSNotFound)
        {
            totalpage= [[list objectAtIndex:1] intValue];
        }
        //NSLog(@"varlog %@",list);
        //[self log:aMessage];
        //[self log:@"%@ is %@",[list objectAtIndex:0],[list objectAtIndex:1]];
    } else {
        [self log:aMessage];
    }
}

+ (BOOL)isSelectorExcludedFromWebScript:(SEL)selector {
    if (selector == @selector(consoleLog:)
        || selector == @selector(varLog:)) {
        
        return NO;
    }
    return YES;
}

//https://medium.com/compileswift/how-to-communicate-with-iframes-inside-webview-2c9c86436edb
//https://github.com/marcuswestin/WebViewJavascriptBridge
// https://jerodsanto.net/2010/12/bridging-the-gap-between-javascripts-console-log-and-cocoas-nslog/
//http://www.jianshu.com/p/e97a357d0688

- (int) totalbuttonjs
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];

//    id win = [webView windowScriptObject];
    id win;
    [win setValue:self forKey:@"MyApp"];
   
    NSString* js = @"var items =document.getElementsByClassName(\"toc-level level-1 group\"); \
            if (items.length==0) {\
                document.getElementsByClassName(\"toolbar-button toc-button /img/toc/toc.svg\")[0].click();} \
    ";
    [win evaluateWebScript: js];
    [self wait:0.8];
    js = @"var items =document.getElementsByClassName(\"toc-level level-1 group\"); \
        MyApp.varLog_(\"###Totalpages=\"+items.length);  \
        ";
    [win evaluateWebScript: js];
    //[self log:@"before totoalpage"];
    
    return 10;
    
    js = @"var items =document.getElementsByClassName(\"toc-level level-1 group\"); \
        MyApp.pagehtmlLog_(\"###Totaldiv=\"+items.length);  \
        if(items.length>4) { \
            var buttons =  items[4].getElementsByTagName(\"button\"); \
            buttons[0].click(); \
            var s1 = items[4].getAttribute(\"data-activekey\");    \
            MyApp.varLog_(s1); \
        }    \
        ";
    [win evaluateWebScript: js];
}


- (int) nextpage1:(int) page
{
    NSDictionary * urldict = [webdelegate.pagelist objectAtIndex:page];
    //NSString * s1= [urldict objectForKey:@"absoluteURL"];
    //s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com%@",s1];
    NSString * s1= [urldict objectForKey:@"cfi"];
    //s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com%@",s1];
    s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com/books/%@/cfi%@",webdelegate.ebookid, s1];
    
    
    if (webdelegate.ebooktype==1) {
        //s1 = [NSString stringWithFormat:@"%@?width=2000",s1];
    }
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:s1]]];
    //NSLog(@"page=%@",s1);
    return 1;
}

//first page
//#toc-container > ul > li.toc-title.title.toc-level.level-1.group
//#toc-container > ul > li.toc-title.title.toc-level.level-1.group > button
- (int) nextpage:(int) page
{
    NSString *res = [self rightkeyjs];
    return 1;
}

//<button class="navigation-button noButton horizontal-button next-button" style="display: block; outline: medium none;">
//<button class="navigation-button noButton horizontal-button previous-button" style="display: block;">
//
- (int) pagebuttonjs:(int) page
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win ;
    //= [webView windowScriptObject];
    NSString* js ;
    js = @"var items =document.getElementsByClassName(\"toc-level level-1 group\"); \
    if(items.length>%d) { \
        var buttons =  items[%d].getElementsByTagName(\"button\"); \
        var node = buttons[0].getElementsByTagName(\"div\")[0];\
        MyApp.varLog_(\"###title%d=\"+node.getAttribute(\"title\"));\
        buttons[0].click(); \
        }    \
    ";
    js = [NSString stringWithFormat:js,page,page,page];
    [win evaluateWebScript: js];
    //NSLog(@"pagebutton %f",p2-p1);
    return 1;
}

- (int) pagebuttonjs2:(int) page
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win;
    //= [webView windowScriptObject];
    NSString* js ;
    js = @"var items =document.getElementsByClassName(\"toc-level level-1 group\"); \
    if(items.length>%d) { \
    var buttons =  items[%d].getElementsByTagName(\"button\"); \
    var node = buttons[0].getElementsByTagName(\"div\")[0];\
    MyApp.varLog_(\"###title%d=\"+node.getAttribute(\"title\"));\
    buttons[0].click(); \
    }    \
    ";
    js = [NSString stringWithFormat:js,page,page,page];
    [win evaluateWebScript: js];
    //NSLog(@"pagebutton %f",p2-p1);
    return 1;
}

- (int) pageiframejs:(int) page
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win ;
    //= [webView windowScriptObject];
    NSString* js ;
    js = @"var items = document.getElementsByTagName(\"iframe\"); \
            var x = items[1]; \
            var y = (x.contentWindow || x.contentDocument); \
            MyApp.consoleLog_('y ');\
            if (y.document)y = y.document; \
            var html = y.getElementsByTagName(\"html\")[0];\
            MyApp.consoleLog_('html doc '+y.innerHTML);\
            ";
    [win evaluateWebScript: js];
    return 1;
}
#pragma mark - PDF ebook handle
- (void) pdftaskhandle:(NSTimer*)theTimer
{
    if (!working) return;
    
    switch (taskindex) {
        case 0:
            //taskindex = [self totalbuttonjs];
            //totalpage= [vars[@"Totalpages"] intValue];
            totalpage = [webdelegate.pagelist count];
#ifdef DEBUG
            //totalpage = 8;//[webdelegate.pagelist count];
#endif
            [self log:@"PDF total pages = %d",totalpage];
            if (![reg isreg]) {
                totalpage = 6;
                if (totalpage>[webdelegate.pagelist count])
                    totalpage =[webdelegate.pagelist count];
                [self log:@"demo version only download %d pages",totalpage];
                
            }
            taskindex = 10;
            break;
        case 10:
            // Item 3
            webdelegate.ticked =false;
            if (pageindex<totalpage) {
                [self log:@"download page %d",pageindex+1];
                //[self pagebuttonjs:pageindex]; ////goback page button click
                [self nextpage:pageindex];
                //[self nextbuttonjs];
                framewaiting = true;
                ticknum = 0;
                framenum = 0;
                taskindex = 11;
            }
            break;
            
        case 11:
            // Item 3
            ticknum +=1;
            if (ticknum>ttimeout) {
                taskindex = 10;
                pageindex+=1;
            }
            if (pageindex==totalpage) {
                taskindex = 20; //goback page button click
            }
            break;
        case 12:
            // do nothing ...
            break;
            
        case 111:
            // Item 3
            if( !framewaiting ){
                pageindex += 1;
                taskindex = 10; //goback page button click
            }
            if (pageindex==totalpage) {
                taskindex = 20; //goback page button click
            }
            break;
        case 20:
            // Item 3
            [self log:@"building pdf file ...."];
            bool b = [webdelegate Buildpdf:nil];
            [self setWorking:false];
            [self openoutputfile];
            [[NSWorkspace sharedWorkspace] openFile:ebookdir withApplication:@"Finder"];
            
            break;
        default:
            break;
    }
    
}

- (void) pdftaskhandle_js:(NSTimer*)theTimer
{
    if (!working) return;
    
    switch (taskindex) {
        case 0:
            webdelegate.ticked =false;
            int n = pageindex % 10;
            if (n==8) {
                CGPoint p1 = CGPointMake(mousepoint.x+arc4random_uniform(10), mousepoint.y+arc4random_uniform(10));
                //CGWarpMouseCursorPosition(p1);
                [self movemouse:p1];
            }
            if (pageindex == 0) {
                [epubcontent reload];
            } else {
                taskindex = [self nextbuttonjs];
                [self log:@"load page %d",pageindex+1];
            }
            taskindex = 11;
            //totalpage= [vars[@"Totalpages"] intValue];
            break;
        case 1:
            // check totalpages
            if ([self checkdictkey:@"Totalpages"] == 1) {
                totalpage= [vars[@"Totalpages"] intValue];
                taskindex = 10;
            }
            break;
        case 10:
            // Item 3
            webdelegate.ticked =false;
            if (pageindex<totalpage) {
                [self log:@"load page %d",pageindex+1];
                [self pagebuttonjs:pageindex]; ////goback page button click
                taskindex = 11;
            }
            break;
        case 11:
            // Item 3
            if( webdelegate.ticked ){
                pageindex += 1;
                taskindex = 0; //goback page button click
                if (webdelegate.tick>ttimeout) {
                    [self checknextbutton];
                    if ([self checkdictkey:@"nextvisible"] != 1) {
                        taskindex = 20;
                    }
                }
            }
            if (pageindex>9999) {
                taskindex = 20; //goback page button click
            }
            break;
        case 20:
            // Item 3
            [self log:@"building pdf file ...."];
            bool b = [webdelegate Buildpdf:nil];
            [self setWorking:false];
            [self openoutputfile];
            [[NSWorkspace sharedWorkspace] openFile:ebookdir withApplication:@"Finder"];
            
            break;
        default:
            break;
    }

}


- (int) nextbuttonjs
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win ;
    //= [webView windowScriptObject];
    NSString* js = @"var items =document.getElementsByClassName(\"navigation-button no-button horizontal-button next-button\"); \
    if (items.length>0) {\
    items[0].click();} \
    ";
    [win evaluateWebScript: js];
    
    return 10;
}

- (int) checknextbutton
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win ;
    //= [webView windowScriptObject];
    [win setValue:self forKey:@"MyApp"];
    NSString* js = @"var items =document.getElementsByClassName(\"navigation-button no-button horizontal-button next-button\"); \
    if (items.length>0) {\
        MyApp.varLog_(\"###nextvisible=1\");\
    } else \
    MyApp.varLog_(\"###nextvisible=0\"); \
    ";
    [win evaluateWebScript: js];
    
    return 10;
}

- (int) openoutputfile
{
   
    if (!outputfile) return 0;
    [self log:outputfile];

    [self log:@""];
    [self log:@"done"];
    
    NSAlert *alert = [NSAlert alertWithMessageText:@"Do you want to open new download file ?"
                                     defaultButton:@"Yes"
                                   alternateButton:@"No"
                                       otherButton:nil
                         informativeTextWithFormat:@""];
    
    NSInteger button = [alert runModal];
    if (button == NSAlertAlternateReturn) {
        return 0;
    }

    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    if (![fileManager fileExistsAtPath:outputfile])
        return 0;
   
    [[NSWorkspace sharedWorkspace] openURL:[NSURL fileURLWithPath:outputfile]];

    return 0;
}
#pragma mark - WKUIDelegate
- (WKWebView *)webView:(WKWebView *)webView createWebViewWithConfiguration:(WKWebViewConfiguration *)configuration forNavigationAction:(WKNavigationAction *)navigationAction windowFeatures:(WKWindowFeatures *)windowFeatures
{

  //if (!navigationAction.targetFrame.isMainFrame) {

    [webView loadRequest:navigationAction.request];
  //}

  return nil;
}

- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation;
{
//    NSString * url = [[webView URL] absoluteString];
//    NSLog(@"didFinishNavigation: %@", url);
//    if (working) {
//        framenum+=1;
//        if (framenum>0) {
//            ticknum = ttimeout-4;
//        }
//    }
    
}
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation
{
    //NSLog(@"didStartProvisionalNavigation: %@", navigation);
}

- (NSString *)stringByEvaluatingJavaScriptFromString:(NSString *)script {
    __block NSString *resultString = nil;
    __block BOOL finished = NO;

    [webView evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
        if (error == nil) {
            if (result != nil) {
                resultString = [NSString stringWithFormat:@"%@", result];
            }
        } else {
            NSLog(@"evaluateJavaScript error : %@", error.localizedDescription);
        }
        finished = YES;
    }];

    while (!finished)
    {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
    }

    return resultString;
}

- (NSString *) loadfile:(NSString *) fname
{
   
    NSData *data = [[NSFileManager defaultManager] contentsAtPath:fname]; //load file
    NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding]; //to string
    return str;
}

-(void)printhtmlpdf
{
//    [[[webView configuration] preferences] setFraudulentWebsiteWarningEnabled:false];
    //[[[webView configuration] preferences] setValue:@TRUE forKey:@"allowFileAccessFromFileURLs"];
    //NSString * fname =[[NSBundle mainBundle]
    //                   pathForResource:@"cssrule" ofType:@"js"];
    NSString *js=@"window.print();";
    js =@"alert('ok');";
    js =@"console.log('jsok');alert('ok');";
   //NSString * s=[self stringByEvaluatingJavaScriptFromString:js];
    [webView evaluateJavaScript:js completionHandler:nil];
    // [webView print:nil];
    //NSLog(@"%@",s);
}
//- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler
//{
//    NSLog(@"decidePolicyForNavigationAction %@",[navigationAction.request.URL absoluteString]);
//
//    //if (navigationAction._canHandleRequest) {
//        decisionHandler(WKNavigationActionPolicyAllow);
//        return;
//    //}
//
////    if (navigationAction._userInitiatedAction && !navigationAction._userInitiatedAction.isConsumed) {
////        [navigationAction._userInitiatedAction consume];
////        [[NSWorkspace sharedWorkspace] openURL:navigationAction.request.URL];
////    }
//
////    decisionHandler(WKNavigationActionPolicyCancel);
//}
//http://stackoverflow.com/questions/5353278/uiwebviewdelegate-not-monitoring-xmlhttprequest
#pragma mark - WebPolicyDelegate

//- (void)webView:(WebView *)sender decidePolicyForNavigationAction:(NSDictionary *)actionInformation request:(NSURLRequest *)request frame:(WebFrame *)frame decisionListener:(id)listener {
////    if ([sender isEqual:webView]) {
////        [listener use];
////    }
////    else {
////        [[NSWorkspace sharedWorkspace] openURL:[actionInformation objectForKey:WebActionOriginalURLKey]];
////        [listener ignore];
////    }
//    //[listener use];
//    [[NSWorkspace sharedWorkspace] openURL:[actionInformation objectForKey:WebActionOriginalURLKey]];
//}

//- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler {
//    NSLog(@"decidePolicyForNavigationResponse");
//    decisionHandler(WKNavigationResponsePolicyAllow);
//}
//
//- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
//    
//    if (decisionHandler) {
//        decisionHandler(WKNavigationActionPolicyAllow);
//    }
//}

//- (void)webView:(WebView *)sender didStartProvisionalLoadForFrame:(WebFrame *)frame
//{
//    NSLog(@"Start [%@] %@",[frame name], [[[[frame dataSource] request] URL] absoluteString]);
//    
//}

//- (void)webView:(WebView *)sender decidePolicyForNavigationAction:(NSDictionary *)actionInformation
//        request:(NSURLRequest *)request   frame:(WebFrame *)frame  decisionListener:(id<WebPolicyDecisionListener>)listener
//{
//    NSLog(@"Navigation [%@] %@",[frame name], [request URL]);
//  [listener use];
//
//}

- (NSArray *)webView:(WebView *)sender contextMenuItemsForElement:(NSDictionary *)element
    defaultMenuItems:(NSArray *)defaultMenuItems
{
    // disable right-click context menu
    return nil;
}

- (NSUInteger)webView:(WebView *)sender dragSourceActionMaskForPoint:(NSPoint)point
{
    return WebDragSourceActionNone; // Disable any WebView content drag
}

- (NSUInteger)webView:(WebView *)sender dragDestinationActionMaskForDraggingInfo:(id <NSDraggingInfo>)draggingInfo
{
    return WebDragDestinationActionNone; // Disable any WebView content drop
}


- (void)webView:(WebView *)sender decidePolicyForNewWindowAction:(NSDictionary *)actionInformation request:(NSURLRequest *)request newFrameName:(NSString *)frameName decisionListener:(id<WebPolicyDecisionListener>)listener {
    //[[NSWorkspace sharedWorkspace] openURL:[actionInformation objectForKey:WebActionOriginalURLKey]];
    //[listener use];
    [webView loadRequest:request];
}


//save iframe html
- (void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame {
    //NSURL * url = [[[frame dataSource] request] URL];
    NSString * url = [[[[frame dataSource] request] URL] absoluteString];
    NSString * framename = [frame name];
    
    NSLog(@"Frame [%@] %@",framename,url);
    //if ([framename isEqualToString:@"epub-content"]) {
    
    if (working) {
        framenum+=1;
        if (framenum>0) {
            ticknum = ttimeout-4;
        }
        //if ([url rangeOfString:@"/api/"].location!=NSNotFound) return;

        //            if ([url rangeOfString:@"html"].location != NSNotFound)
        //                [webdelegate saveurl:url];
        //            [self log:@"save page %d",pageindex+1];
        
    } else if ([framename isEqualToString:@"epub-content"]) {
        //[self log:@"Frame %@",url];
        //NSLog(@"Frame %@",url);
        epubcontent = frame;
        WebDataSource *source = [frame dataSource];
        NSData *data = [source data];
        
        if ([url rangeOfString:@"/api/"].location==NSNotFound) {
            [webdelegate saveepubfile:url data:data];
        }

        
        //NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        if (![downloadbtn isEnabled]) {

            [downloadbtn setEnabled:true];
            [[textview.textStorage mutableString] setString:@""];

            //[self log:@"ebook ready to download, click download button, \r%@",webdelegate.title];
            [self log:@"ebook ready to download, click download button, \r"];
        }
        //NSLog(@"%@",url);
        return;
    }

    if (frame == [sender mainFrame]){
        //[address setStringValue:url];
        //[self log:@"didFinishLoadForFrame %@",url];
        //NSLog(@"didFinishLoadForFrame %@",url);
        WebDataSource *source = [frame dataSource];
        NSData *data = [source data];
        
        if ([url rangeOfString:@"/api/"].location==NSNotFound) {
            [webdelegate saveepubfile:url data:data];
            framewaiting = false;
        }
        
     }
   
}

//- (void)webView:(WebView *)sender didCommitLoadForFrame:(WebFrame *)frame
//{
//    NSString * framename = [frame name];
//    // NSString * url = [[[[frame dataSource] request] URL] absoluteString];
//     NSString * url = [[[[[sender mainFrame] dataSource ]request] URL] absoluteString] ;
//    [address setStringValue:url];
//
//    NSLog(@"CommitLoad [%@] %@",framename,url);
//}

- (void)webView:(WebView *)sender didReceiveTitle:(NSString *)atitle forFrame:(WebFrame *)frame
{
    // Report feedback only for the main frame.
    NSString * framename = [frame name];
    //if (working)
    //   NSLog(@"[%@] title %@",framename,atitle);
    //if (pageindex==0 && [framename isEqualToString:@"epub-content"]) {
    //if (working && (webdelegate.title ==nil) ) {
    if ((webdelegate.title ==nil) || ([webdelegate.title length]==0) ) {
       webdelegate.title = atitle;
       NSLog(@"[%@] title %@",framename,atitle);
        [self log:@"Title %@",atitle];
        
    }
}

- (void)foundjason
{
    //NSLog(@"page found");
    //if ([box isHidden]) {
    [downloadbtn setEnabled:true];
    if (pausing) {
        return;
    }
        [[textview.textStorage mutableString] setString:@""];
        
        //[self log:@"ebook ready to download, click download button, \r%@",webdelegate.title];
        [self log:@"ebook ready to download, \r"];
        [self log:@"turn to first page, click download button, \r"];
    //}

}


- (void) urlchanged
{
    //[self updateTextFieldFromURL:webView.URL];
    [address setStringValue:[webView.URL absoluteString ]];
    addressurl = [webView.URL absoluteString ];
    if (working) {
        framenum+=1;
        if (ebooktype==1) { //epub
            if (framenum>2) {
                ticknum = ttimeout-ttimeout/10;
            } else if (framenum>1) {
                ticknum = ttimeout-ttimeout/8;
            } else if (framenum>0) {
                ticknum = ttimeout-ttimeout/7;
            }
        } else { //pdf
            if (framenum>2) {
                ticknum = ttimeout- ttimeout/10;
            } else if (framenum>1) {
                ticknum = ttimeout- ttimeout/5;
            } else if (framenum>0) {
                ticknum = ttimeout / 2;
            }

        }
    } else { //find book open
       if ([addressurl rangeOfString:@"/books/"].location != NSNotFound) {
           //NSLog(@"^^^^^^^^book find");
           //NSLog(@"url changes %@ ",[webView.URL absoluteString ]);
           [self foundjason];
       } else {
           [downloadbtn setEnabled:false];
           pausing =false;
           captcha = 0;
           //[box setHidden:true];
       }
        
    }
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context
{
    if (context != keyValueObservingContext || object != webView)
        return;

    if ([keyPath isEqualToString:@"title"]) {
        if ([webView.title length]>0) {
            booktitle = webView.title;
            webdelegate.title = webView.title;
        }
    } else if ([keyPath isEqualToString:@"URL"]) {
        [self urlchanged];
    } else if ([keyPath isEqualToString:@"estimatedProgress"] && object == webView) {
        //[self.progressView setAlpha:1.0f];
        //[self.progressView setProgress:self.webView.estimatedProgress animated:YES];
        NSLog(@"estimatedProgress ",webView.estimatedProgress);
        if(webView.estimatedProgress >= 1.0f) {
            NSLog(@"estimatedProgress ",webView.estimatedProgress);
        }
    }
}

#pragma mark - Tools

- (BOOL) createfolder: (NSString*) folder
{
    // Check if the path exists
    NSFileManager *fileManager = [NSFileManager defaultManager];
    folder = [folder stringByExpandingTildeInPath];
    if ([fileManager fileExistsAtPath: folder] == NO)
    {
        [fileManager createDirectoryAtPath: folder attributes: nil];
        //[fileManager createDirectoryAtURL:folder withIntermediateDirectories:NO attributes:nil error:nil];
        
    }
    return true;
}

- (void)movemouse:(CGPoint)point
{
    CGPoint p = CGPointMake(point.x,point.y);
    
    CGEventRef event = CGEventCreate(NULL);
    
    CGEventSetType(event, kCGEventMouseMoved);
    CGEventSetLocation(event, p);
    CGEventPost(kCGSessionEventTap, event);
    
    CFRelease(event);
}

- (NSString*) MD5:(NSString*) inputStr
{
    NSData* inputData = [inputStr dataUsingEncoding:NSUTF8StringEncoding];
    unsigned char outputData[CC_MD5_DIGEST_LENGTH];
    CC_MD5([inputData bytes], [inputData length], outputData);
    
    NSMutableString* hashStr = [NSMutableString string];
    int i = 0;
    for (i = 0; i < CC_MD5_DIGEST_LENGTH; ++i)
        [hashStr appendFormat:@"%02x", outputData[i]];
    
    return hashStr;
}

#pragma mark - Browser
//https://stackoverflow.com/questions/995758/execute-an-action-when-the-enter-key-is-pressed-in-a-nstextfield
- (void)enterAddress:(id)sender
{
    // do something interesting when the user hits <enter> in the text field
    NSString * aurl = [address stringValue];
    aurl = [self addProtocolIfNecessary:aurl];
//    if ([aurl rangeOfString:@"http://"].location == NSNotFound)
//    {
//        aurl = [NSString stringWithFormat:@"http://%@",aurl];
//    }
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
    
}

- (NSString *)addProtocolIfNecessary:(NSString *)address
{
    if ([address rangeOfString:@"://"].length > 0)
        return address;

    if ([address hasPrefix:@"data:"])
        return address;

    return [@"http://" stringByAppendingString:address];
}

- (IBAction)gobtnclick:(id)sender
{
    [self enterAddress:nil];
}

- (IBAction)backbtnclick:(id)sender
{
    [webView goBack:nil];
}

- (IBAction)forwardbtnclick:(id)sender
{
    [webView goForward:nil];
}

- (IBAction)homepagebtnclick:(id)sender
{
    NSString * aurl = @"https://www.vitalsource.com/";
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
    if (![box isHidden]) {
    //    [box setHidden:true];
    }
}

#pragma mark - buy button
- (IBAction)aboutbtn:(id)sender
{
    [aboutcontroller ShowAbout];
}

- (IBAction)vshome:(id)sender
{
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.vitalsource.com"]]];
}

- (IBAction)chegghome:(id)sender
{
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.chegg.com"]]];
}

- (IBAction)buynowurl:(id)sender
{
    [[NSWorkspace sharedWorkspace] openURL: [NSURL URLWithString:c_order]];
}


#pragma mark - take shot
//https://github.com/paul99/webkit-mips/blob/master/Tools/TestWebKitAPI/Tests/WebKitCocoa/WKWebViewSnapshot.mm

-(NSString *)pagefilename
{
    //addressurl=@"https://bookshelf.vitalsource.com/#/books/VCS-0074009900852/cfi/6/10!/4/6/4/2/2/2/2/2@0:0";
    addressurl= [addressurl stringByRemovingPercentEncoding];
    NSString * bookid=[self strFrom:addressurl from:@"#/books/" to:@"/cfi/"];
    NSString * page = [self strFrom:addressurl from:@"/cfi/" to:@"!"];
    if (!page) {
        page = [self strFrom:addressurl from:@"/cfi/" to:@"["];
    }
    if (!page) {
        page = [self strFrom:addressurl from:@"/cfi/" to:@";"];
    }
    page = [page stringByTrimmingCharactersInSet:[NSCharacterSet illegalCharacterSet]];
    page =[webdelegate cleanfilename:page];

    NSString * fname=[datadir stringByAppendingPathComponent:bookid];
    [webdelegate createfolder:fname];
    fname=[NSString stringWithFormat:@"%@/%@.png",fname,page ];
    //NSLog(@"%@ %@ %@",bookid,page,fname);
    return fname;
}

-(void)resizewebview
{
    [self runjs2:jsdiv];
    //NSLog(@"%@",[webView.scrollView]);
    NSRect r1 ;
    int h = frameheigh+200;// [self webviewheight];
    //block BOOL isDone = false;
    NSRect r = [webView frame];
    if (h>100) {
        //int y = r.origin.y+r.size.height;
        r1 = r;
        //NSLog(@"change height %d %f",h,r1.size.height);
        //[webView setFrame:NSMakeRect(r.origin.x,r.size.height-h+r.origin.y,r.size.width,h)];
        [webView setFrame:NSMakeRect(r.origin.x,r.origin.y,r.size.width,h)];
    }
}

-(void)takeshot
{
    CGFloat viewWidth = 1920;
    CGFloat viewHeight = 1920;
    WKSnapshotConfiguration *snapshotConfiguration = [[WKSnapshotConfiguration alloc] init];
    [snapshotConfiguration setRect:NSMakeRect(0, 0, viewWidth, viewHeight)];
    [snapshotConfiguration setSnapshotWidth:@(viewWidth)];
    [snapshotConfiguration setSnapshotWidth:@(viewWidth)];
  
    [webView takeSnapshotWithConfiguration:nil
                             completionHandler:^(NSImage *snapshotImage, NSError *error) {
            //NSLog(@"takeshot");
            NSData *imageData = [snapshotImage TIFFRepresentation];
            NSBitmapImageRep *imageRep = [NSBitmapImageRep imageRepWithData:imageData];
            //NSDictionary *imageProps = [NSDictionary dictionaryWithObject:[NSNumber numberWithFloat:1.0] forKey:NSImageCompressionFactor];
            //NSPNGFileType NSJPEGFileType
            imageData = [imageRep representationUsingType:NSPNGFileType properties:nil];
            NSString * fname = [self pagefilename];
            [imageData writeToFile:fname atomically:NO];
            [webdelegate saveurl:fname];
            //isDone = true;
            NSRect r1 = webviewrect;
            [webView setFrame:NSMakeRect(r1.origin.x,r1.origin.y,tviewwidth,r1.size.height)];
        }];
//    if (r1.size.height>0) {
//    }
}

-(NSString *)rightkeyjs
{
    //NSString * str = @"document.body.focus; \
    document.body.dispatchEvent(new KeyboardEvent('keypress',{'keyCode':39}));";
    NSString * str = @" var node = document.querySelector('#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper > button'); \
        if (node) { node.click(); node.className; } \
        node=  document.querySelector('#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper > button'); \
        if (node) { node.click(); node.className;}";
    NSString* rstr=[self runjs2:str];
    //NSLog(@"%@",rstr);
    return rstr;
}

-(int)ebooktypejs
{
    //NSString * str = @"document.body.focus; \
    document.body.dispatchEvent(new KeyboardEvent('keypress',{'keyCode':39}));";
    NSString * str = @" var node = document.querySelector('#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper > button'); \
        if (node) { node.className; } \
        node=  document.querySelector('#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper > button'); \
        if (node) { node.className;}";
    NSString* rstr=[self runjs2:str];
    if ([rstr rangeOfString:@"horizontal"].location!=NSNotFound) {
        return 2;
    }
    //NSLog(@"%@",rstr);
    return 1;
}

-(int)scrubberjs
{
    //NSString * str = @"document.body.focus; \
    document.body.dispatchEvent(new KeyboardEvent('keypress',{'keyCode':39}));";
    NSString * str = @" var node = document.querySelector('#scrubber-container'); \
        console.log(node.style.bottom);\
        if (node && (node.style.bottom>-10)) { \
         var button= document.querySelector('#scrubber-container > button'); \
         if (button) { button.click(); button.className;} \
    }";
    NSString* rstr=[self runjs2:str];
    //NSLog(@"scrubberjs %@",rstr);
    return 1;
}

- (int) webviewheight
{
    CGFloat height ;
//    NSString * str = [self runjs2:@"Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)"];
    //NSString * str = [self runjs2:frameheigh];
    //height = [str floatValue];
    //NSLog(@"height %f",height);
    return height;
}

- (NSString *)runjs2:(NSString *)script {
    __block NSString *resultString = nil;
    __block BOOL finished = NO;

    [webView evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
        if (error == nil) {
            if (result != nil) {
                resultString = [NSString stringWithFormat:@"%@", result];
            }
        } else {
            NSLog(@"evaluateJavaScript error : %@", error.localizedDescription);
        }
        finished = YES;
    }];

    while (!finished)
    {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
    }

    return resultString;
}

- (void)savepdf:(NSString *)fname aimg:(NSString*)imgfile
{
    PDFDocument *pdf = [[PDFDocument alloc] init];
    //NSImage * img = scaledImage;
    
    //for (NSString *afile in imglist) {
        //NSLog(@"%@", afile);

        //continue;
        
        NSImage *img = [[NSImage alloc]initWithContentsOfFile:imgfile];

        PDFPage * page;
        //int i;
        
        page = [[PDFPage alloc] init];
        [page initWithImage: (NSImage *) img];
        [pdf insertPage: page atIndex: [pdf pageCount]];
        
    //}
    
    [pdf writeToFile:  fname];
    
}

#pragma mark - tools

- (int) PosRight: (NSString *)str substr:(NSString*)substr
{
    NSRange range = [str rangeOfString:substr options:NSBackwardsSearch];
    if (range.location == NSNotFound) {
        return 0;
    } else {
        return [str length]-range.location-[substr length]+1;
    }
}

-(NSString *)strFrom:(NSString *)str from:(NSString *)from to:(NSString *)to
{
    NSString * rs;
    NSRange r1 = [str rangeOfString:from];
    NSRange r2 = [str rangeOfString:to];
    if ((r1.location != NSNotFound)&&(r2.location != NSNotFound))
    {
        r1.location = r1.location+r1.length;
        r1.length = r2.location-r1.location;
        rs= [str substringWithRange:r1];
    }
    return rs;
}

NSString *letters = @"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

-(NSString *) randomstr: (int) len {
    
    NSMutableString *randomString = [NSMutableString stringWithCapacity: len];
    
    for (int i=0; i<len; i++) {
        [randomString appendFormat: @"%C", [letters characterAtIndex: arc4random_uniform([letters length])]];
    }
    
    return randomString;
}

@end
