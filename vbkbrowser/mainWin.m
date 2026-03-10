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
#import "HtmlPdfConverter.h"
#include <IOKit/pwr_mgt/IOPMLib.h>
#import <CommonCrypto/CommonCryptor.h>

#define c_agent16 @"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15"
#define c_agent15 @"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15"
#define c_agent14 @"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15"
#define c_end 9998

#define c_domain @"jigsaw.vitalsource.com"
#define c_session @"_jigsaw_session"
//#define tviewwidth 1200

// 0.99
//https://www.vitalsource.com/products/gluten-free-and-wheat-free-guide-with-recipes-speedy-publishing-v9781633835498

//play is in iframe,  js in wkwebview config, run every page, found paly page, sent url message
//findbook, foundjson show audio info,

static void* keyValueObservingContext = &keyValueObservingContext;


@interface mainWin ()< WKNavigationDelegate, WKUIDelegate,NSURLSessionDownloadDelegate>
{
    WKFrameInfo * epubframe;
}

@end

mainWin * _mainwin;
BuyController *reg;
AboutController * aboutcontroller;
HtmlPdfConverter * pdfconverter;
NSString* ebookdir00;
NSString * addressurl, * oldaddrees;
NSString * booktitle;
NSString * jsdiv;
//CGFloat frameheigh;
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

    IBOutlet id buybtn;
    IBOutlet id helpbtn;
    IBOutlet id aboutbtn;

    int taskindex;
    int totalpage;
    __block  int pageindex;
    int framenum;
    int ticknum;
    int startno;
    int endno;
    BOOL framewaiting;
    BOOL jswaiting;
    BOOL pausing;
    __block  BOOL loading;
    BOOL printing;
    BOOL hasimg;
    int c_captcha;
    NSString * jsmessage;
    CGPoint mousepoint;
    NSString * curpage;
    NSString * booktmp;
    NSString * jsresnext;
    NSString * host;
    NSString * frameurl;

    WebDelegate * webdelegate;
    WebScriptObject * epubwinobj;
    WebFrame * epubcontent;
    
    NSMutableArray * cooklist;
    
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
        pdfconverter = [[HtmlPdfConverter alloc] initWithData];
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
//    NSLog(@"%@",js_cssrule);
//    NSString * fname =[[NSBundle mainBundle] pathForResource:@"page" ofType:@"dat"];
//    NSString * js;
//    js=[self decryptfile:@"123456781234567812345678" infile:fname];
//    //NSLog(@"%@",js);
//    //NSString * fname =[[NSBundle mainBundle] pathForResource:@"cssrule" ofType:@"js"];
//#ifdef DEBUG
//    fname = @"/Users/aa/work/project/vbkbrowser-wk/cssrule.js";
//    jsdiv=[self loadfile:fname];
//    //fname =[[NSBundle mainBundle] pathForResource:@"frameheight" ofType:@"js"];
////    fname = @"/Users/aa/work/project/vbkbrowser-wk copy/frameheight.js";
//    fname = @"/Users/aa/work/project/vbkbrowser-wk/page.js";
//    js=[self loadfile:fname];
//#else
//    jsdiv = js_cssrule;
//    //js = js_frameheight;
//#endif
    //NSString * js= js_frameheight;
    //return;
    WKUserScript *script = [[WKUserScript alloc] initWithSource:js_bif injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:NO];
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
    //webView = [[WKWebView alloc] initWithFrame:NSMakeRect([bview bounds].origin.x,[bview bounds].origin.y,600,600) configuration:configuration];
//    webView = [[Mkwebview alloc] initWithFrame:[bview bounds] configuration:configuration];
//    webView = [[Mkwebview alloc] initWithFrame:[bview bounds] configuration:configuration];
    [webView setAutoresizingMask:(NSViewWidthSizable | NSViewHeightSizable)];
    #ifdef DEBUG
        [configuration.preferences  setValue:@YES forKey:@"developerExtrasEnabled"];
    #endif
    webView.allowsMagnification = YES;
    webView.allowsBackForwardNavigationGestures = YES;// NO;
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
    //[self createfolder:cachedir];
    
//    datadir = [ebookdir stringByAppendingPathComponent:@"tmp"];
//    [self createfolder:datadir];
    datadir = ebookdir;
    
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
    c_captcha=15;
    
    cooklist = [[NSMutableArray alloc] init];

    //[ended setStringValue:@"37"];
    //[started setStringValue:@"30"];
    //[box setHidden:true];
    //[touchlabel setHidden:true];

    if ([reg isreg]) {
        [buybtn setHidden:true];
    }
    //[webView setUIDelegate:self];

#ifdef DEBUG
    [testbtn setHidden:false];
    [resetbtn setHidden:false];
#else
    [testbtn setHidden:true];
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
    NSString * us = @"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15"; //@" Version/13.0.2 Safari/605.1.15";
    //us = [us stringByAppendingString:@" Version/13.0.2 Safari/605.1.15"];
    NSString * ra = [self randomstr:8];
    //webView.customUserAgent=[NSString stringWithFormat:us,ra] ;
    //webView.customUserAgent= c_agent15;
    working = false;
    loading = false;
    
    [webView addObserver:self forKeyPath:@"title" options:0 context:keyValueObservingContext];
    [webView addObserver:self forKeyPath:@"URL" options:0 context:keyValueObservingContext];

    NSString * aurl = @"https://libbyapp.com/shelf";
    //NSString * aurl = @"http://flyos.net/js/iframe/bt1.html";
    //NSString * aurl = @"https://www.vitalsource.com/bookshelf/home";
    //NSString * aurl = @"https://www.google.com/";
    //NSString * aurl = @"file:///Users/aa/Public/js/dom/bt2.htm";
    //[webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
    [self goURL:aurl];

    //[self performSelector: @selector(homepagebtnclick:) withObject: nil afterDelay: 1];
    [self log:@"Login Account, Open book, click download button when ready"];
    [self log:@"\r========================="];
    [self log:@"Close Bookshelf app when downloading, it may cause login problem"];
    [self log:@"=========================\r"];
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
    int cacheSizeMemory = 0; // 4MB
    int cacheSizeDisk = 128*1024*1024; // 32MB
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



- (IBAction)testbtn:(id)sender
{
    [self deletemp3files];
    return;
    if ([webdelegate findMissing])
        [self downloadurl:webdelegate.epubfile];
    return;
//    [self nextpage:1];
//    return;
    //webView;
    //[self keydown:32];
    //webView.unlockFocus;
    //return;
    
    NSString * res;
    res = [self runjs2:js_keypress];
//    res = [self runjs2:js_nextpage];
    NSLog(@"%@", res);
    return;
    

    
    NSString *  s1=@"https://dewey-38382372a2f41b874d40990086c6d07e.listen.libbyapp.com/%7B95782A11-6172-4F0B-8F38-0681F00B12CA%7DFmt425-Part02.mp3";
    [self downloadurl:s1];
    return;
    
    [self runjs2:@"console.log(window);"];
    return;
    pageindex = 0;
    [self downloadnext];
    return;
    
    [self downloadfile:@"https://dewey-04053b5d185dbe9bee5e34cfe9840b8b.listen.libbyapp.com/%7BC5AA405E-7FDB-415B-B0D8-7091B5BFB4EC%7DFmt425-Part01.mp3?cmpt=eyJzcGluZSI6MH0%3D--b823af714a507d2a08976fb5c4bc2cb51574a8a9"];
    
    return;

    NSString * url = webView.URL.absoluteString;
    if ([url rangeOfString:@"signin"].location != NSNotFound) {
        [self loginjs:nil];
        return;
    }
    
//    webView.customUserAgent= c_agent16 ;
//    [self goURL:@"http://flyos.net/bt4.htm"];
//    return;
    
//    working=true;
//    NSString * file =[self pagefilename:@"https://bookshelf.vitalsource.com/#/books/9781635672268/cfi/10"];
//    NSLog(@"%@",file);
    //[self pageiframejs:1];
    //[self runjs2:jsdiv];
    //sleep(200);
    //[NSThread sleepForTimeInterval:0.3f];
    //[self wait:200];
//    [self logwebview];
//    [self Setwebviewheight];
//    [self logwebview];
//    return;
    [self jskeydown];
    //[self nextpage:1];
    return;
    
    //pageindex++;
    //[self wait:100];
    //sleep(300);
    //[self printwkview];
    return;
    working=false;
    //[self pagefilename];
#ifdef DEBUG
    //[regcontroller savekey:@"" skey:@"" suser:@"aa"];
    //[reg savekey:@"" skey:@"" suser:@""];
#endif
}

- (IBAction)downloadbtn:(id)sender
{
    if (working) {
        pausing=true;
        [self log:@"download stop"];

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
    [self printwkview];

    //[self nextbuttonjs];
    //[webdelegate BuildPub:nil];
    //[webdelegate Buildpdf:nil];
    //return;
#ifdef DEBUG
    //[self loginjs:sender];
    //[regcontroller savekey:@"" skey:@"" suser:@"aa"];
//    [reg savetimes:0];
#endif
}

#pragma mark - dispatch group
//


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

//save current page to start,
//scan file to build book
- (void) setWorking:(BOOL)aworking
{
    working = aworking;
    if (aworking) {

        totalpage = webdelegate.pagelist.count ;

        //webdelegate.ebookid = [webdelegate getbookid:addressurl];
        //startno = [self urlpageno:addressurl];
        //ebooktype = [self ebooktypejs];
        //webdelegate.ebooktype = ebooktype;
        //[vars removeAllObjects];
        //[webdelegate clearurllist];
        taskindex=10;
        pageindex=0;
        totalpage = webdelegate.pagelist.count;
//            startno=0;

        if (![reg isreg]) {
            //totalpage = pageindex+6;
            //[self log:@"demo version only download %d pages",totalpage];
        }

        if (![reg isreg]) {
            [self log:@" "];
            [self log:@"Demo version limit 6 files download "];
        }
        
        [self log:@" "];
        [self log:@"Start download "];
        

        CFStringRef* reasonForActivity= CFSTR("libby Describe Activity Type");
//kIOPMAssertionTypePreventSystemSleep kIOPMAssertionTypeNoDisplaySleep
        iosuccess = IOPMAssertionCreateWithName(kIOPMAssertionTypePreventSystemSleep ,
                                            kIOPMAssertionLevelOn, reasonForActivity, &assertionID);
        
        [downloadbtn setTitle:@"Stop"];
        tasktimer = [NSTimer scheduledTimerWithTimeInterval:1.5 target:self selector:@selector(epubtaskhandle:) userInfo:nil repeats:NO];
    } else {
        working = false;
        [downloadbtn setTitle:@"Download"];
        if (iosuccess==kIOReturnSuccess) {
            iosuccess = IOPMAssertionRelease(assertionID);
        }
    }
    //NSLog(@"working %d",aworking);
}

-(void) downloadnext {
    //NSLog(@"waitselector ...");
    if (pageindex==totalpage) {
        taskindex = 20; //goback page button click
        [self setWorking:!working];
    }
    curpage = webdelegate.urllist[pageindex];
    [self downloadfile:curpage];
    pageindex +=1;
}



-(void) waitselector {
    taskindex = 10;
    pageindex +=1;
    //NSLog(@"waitselector ...");
    if (pageindex==totalpage) {
        taskindex = 20; //goback page button click
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

- (void) currentpage:(NSString *) str
{
    NSDictionary * obj = [NSJSONSerialization JSONObjectWithData:[str dataUsingEncoding:NSUTF8StringEncoding] options:0 error:nil];
    //frameheigh = [[obj objectForKey:@"scrollHeight"] intValue] ;
    curpage = [obj objectForKey:@"cfi"];
    curpage = [webdelegate cleancfi:curpage];
//    curpage = [obj objectForKey:@"URL"];
    NSString * vbktype = [obj objectForKey:@"vbktype"];
    NSLog(@"curpage %@",curpage);
    if ([vbktype isEqualToString:@"epub"]) {
        loading = false;
        ticknum=ttimeout-1;
    }
}

- (void) findmp3:(NSString *) str
{
    NSString * url = webView.URL.path;
    [webdelegate checkbookid:url];
    [webdelegate saveurl:str];
    //checkbookid(url);
}

- (void) findbook:(NSString *) str url:(NSString *)url
{
    frameurl = url;
    host = [webdelegate urltodomain:url];
    host = [@"https://" stringByAppendingString:host];
    NSDictionary * obj = [NSJSONSerialization JSONObjectWithData:[str dataUsingEncoding:NSUTF8StringEncoding] options:0 error:nil];
    [webdelegate findbook:obj];
    [self foundjason];
}


- (void)foundjason
{
    NSLog(@"page found");
    //if ([box isHidden]) {
    [[textview.textStorage mutableString] setString:@""];
    NSString * url = webView.URL.path;
    //webdelegate.ebookid = [webdelegate getbookid:url];
    totalpage = webdelegate.pagelist.count;
    [self log:@"Title: %@",webdelegate.title];
    [self log:@"Book id: %@",webdelegate.ebookid];
    [self log:@"Total Files: %d \r", totalpage];
    [self log:@"\rJump to Chapter 1 by click 'TABLE CONTENTS', \rclick Download button to download, \r"];
    [downloadbtn setEnabled:TRUE];
    booktmp = [datadir stringByAppendingPathComponent:webdelegate.title];
    if (![webdelegate fileexist:booktmp]) {
        [self createfolder:booktmp];
    }
    webdelegate.booktmp = booktmp;

    return;
    
//    NSString * fname = [datadir stringByAppendingPathComponent:webdelegate.ebookid];
//    if (![webdelegate fileexist:fname]) {
//        [self createfolder:fname];
//    }
    
    [downloadbtn setEnabled:true];
    if (pausing) {
        return;
    }
    [[textview.textStorage mutableString] setString:@""];

    //webdelegate.ebookid = [webdelegate getbookid:addressurl];
    //ebooktype = [self ebooktypejs]; //not correct
    //webdelegate.ebooktype = ebooktype;
    
    //[self log:@"ebook ready to download, click download button, \r%@",webdelegate.title];
    [self log:@"%@ \r",webdelegate.title];
    if ([webdelegate ebooktype]==0)
        [self log:@"total chapter %d \r",webdelegate.pagelist.count];
    else
        [self log:@"total page %d \r",webdelegate.pagelist.count];
    //[self log:@"turn to first page, click download button, \r"];
    //[webdelegate clearurllist];
    if ([webdelegate ebooktype]!=0) {
//        [self log:@"Vitalsource has daily limitation for pdf book, app will logout after dozen pages downloaded, user should stop when unanthorize show up, wait 24 it will disappear, restart app to download rest pages.\r"];
//        [self log:@"====================\r"];
#ifdef RELEASE
        [self log:@"PDF book not support!\r"];
        [downloadbtn setEnabled:false];
        return;
#endif
    }
}

- (BOOL) savevars:(BOOL)b
{
    NSString * fname = [datadir stringByAppendingPathComponent:webdelegate.ebookid];
    fname = [fname stringByAppendingPathComponent:@"urllist.dat"];
    if (b) { //save
        [vars writeToFile:fname atomically:YES];
        return true;
    } else { //load
        if ([webdelegate fileexist:fname]) {
            
            vars  = [NSMutableDictionary dictionaryWithContentsOfFile:fname];
            if([[vars allKeys] containsObject:@"download"])
                return true;
        }
        return false;
    }
}

- (void) logwebview
{
    webviewrect = [webView frame];
    NSRect r = webviewrect;
    NSLog(@"%f,%f,%f,%f",r.origin.x,r.origin.y,r.size.width,r.size.height );
}

-(void)keypress :(int)keyCode
{
    CGEventSourceRef sourceRef =
    CGEventSourceCreate(kCGEventSourceStateHIDSystemState);

    CGEventRef keyPress = CGEventCreateKeyboardEvent (sourceRef, (CGKeyCode)keyCode, true);
    CGEventRef keyUnpress = CGEventCreateKeyboardEvent (sourceRef, (CGKeyCode)keyCode, false);

    //CGEventSetFlags(keyPress, modifierFlags);
    CGEventPost(kCGHIDEventTap, keyPress);

    //unpressing the acualkey
    CGEventPost(kCGHIDEventTap, keyUnpress);

    CFRelease(keyPress);
    CFRelease(keyUnpress);
    CFRelease(sourceRef);
}

- (void) keydown:(NSInteger)akey
{
    CGEventRef keyd = CGEventCreateKeyboardEvent (NULL, (CGKeyCode)akey, true);
    CGEventRef keyu = CGEventCreateKeyboardEvent (NULL, (CGKeyCode)akey, false);
    CGEventPost(kCGSessionEventTap, keyd);
    CGEventPost(kCGSessionEventTap, keyu);
    CFRelease(keyd);
    CFRelease(keyu);
    //[Capture wait:0.5];
}
- (void) deletemp3files
{
    if ([reg isreg]) {
        return;
    }
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSURL *directoryURL = [NSURL fileURLWithPath:webdelegate.booktmp];
    NSError *error = nil;

    NSArray *contents = [fileManager contentsOfDirectoryAtURL:directoryURL
                                   includingPropertiesForKeys:nil
                                                      options:NSDirectoryEnumerationSkipsHiddenFiles
                                                        error:&error];

    NSArray<NSURL *> *sortedURLs = [contents sortedArrayUsingComparator:^NSComparisonResult(NSURL *url1, NSURL *url2) {
        return [[url1 lastPathComponent] localizedStandardCompare:[url2 lastPathComponent]];
    }];

    int i = 0;
    for (NSURL *fileURL in sortedURLs) {
        i+=1;
        if (i>6) {
            [fileManager removeItemAtURL:fileURL error:nil];
        } else
            NSLog(@"Found file:%d %@",i,fileURL.path);

    }
}

- (void) epubtaskhandle:(NSTimer*)theTimer
{
    if (!working) return;
    
    ticknum +=1;
    [touchlabel setStringValue:[@(ticknum) stringValue]];
    switch (taskindex) {
        case 20:
            if (ticknum==1) {
                //play
                [self runjs2:js_keypress];
            } else if (ticknum==10 ) {
                //stop
                [self runjs2:js_keypress];
            } else if (ticknum==12 ) {
                ticknum = 0;
                taskindex = 10;
            }
            [_mainwin updatelog:@"Downloading ..."];
            break;
        case 10:
            // Item 3
            if (ticknum==1) {
                if ([self nextpage:1]==0) {
                    taskindex = 30; //goback page button click
                }

            } else if (ticknum==5 ) {
                if ([webdelegate findMissing]) {
                    [self downloadchapter];
                };

            } else if (ticknum==6 ) {
                //taskindex = 30; //goback page button click
                ticknum = 0;
            }
            [_mainwin updatelog:@"Downloading Files %d/%d",pageindex, totalpage];
            if (![reg isreg]) {
                if (pageindex>5) {
                    taskindex=90;
                }
            }
            break;

        case 30:
            // Item 3
            if ([webdelegate findMissing]) {
                [self downloadchapter];
            } else taskindex = 90; //goback page button click
            [_mainwin updatelog:@"Downloading Files %d/%d",pageindex, totalpage];
            break;
        case 90:
            // Item 3
            [self log:@"building file ...."];
            //[self Buildpdf];
            [self setWorking:false];
            [self deletemp3files];
            //[[NSWorkspace sharedWorkspace] openFile:ebookdir withApplication:@"Finder"];
            [self log:@"\rdownload end\r"];
            [self log:@"Audiobook in %@", webdelegate.booktmp];

            break;
        case 100:
            [self setWorking:false];
            [self log:@"Download error,  restart app, re-download book"];

        default:
            break;
    }
    if (working)
        tasktimer = [NSTimer scheduledTimerWithTimeInterval:1.5 target:self selector:@selector(epubtaskhandle:) userInfo:nil repeats:NO];
}

#pragma mark - javasript

- (void) log:(NSString *)formatString, ...
{
    
    va_list args;
    va_start(args, formatString);
    NSString * str = [[NSString alloc] initWithFormat:formatString arguments:args];
    va_end(args);
    dispatch_async(dispatch_get_main_queue(), ^(void){

    NSMutableAttributedString *astr = [[NSMutableAttributedString alloc] initWithString:str attributes:
    @{ NSForegroundColorAttributeName: NSColor.controlTextColor}];
    
    [textview.textStorage appendAttributedString:astr];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
    [textview scrollRangeToVisible:NSMakeRange([[textview string] length], 0)];
    });

}

- (void) updatelog:(NSString *)formatString, ...
{
        //Run UI Updates
    va_list args;
    va_start(args, formatString);
    NSString * str = [[NSString alloc] initWithFormat:formatString arguments:args];
    va_end(args);
    
    dispatch_async(dispatch_get_main_queue(), ^(void){

        NSLayoutManager *layoutManager = [textview layoutManager];
    NSUInteger numberOfLines = 0;
    NSUInteger numberOfGlyphs = [layoutManager numberOfGlyphs]-1;
    NSRange lineRange;
    [layoutManager lineFragmentRectForGlyphAtIndex:numberOfGlyphs effectiveRange:&lineRange];
    [textview setSelectedRange:lineRange];
    [textview delete:nil];
    
    NSMutableAttributedString *astr = [[NSMutableAttributedString alloc] initWithString:str attributes:
                                       @{ NSForegroundColorAttributeName: NSColor.controlTextColor, NSFontAttributeName: [NSFont systemFontOfSize:12.0f]}];
    
    [textview.textStorage appendAttributedString:astr];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
    [textview scrollRangeToVisible:NSMakeRange([[textview string] length], 0)];
    
    });

}


- (void) log1: (NSString*) msg
{
    //[textview ]
    //NSString * str = [NSString stringWithFormat:msg,args];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:msg]];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
}


- (NSString *)runjs2:(NSString *)script {
    
    
    __block NSString *resultString = nil;
    __block BOOL finished = NO;

//    [webView evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
    [webView evaluateJavaScript:script
                                 inFrame: epubframe // Your WKFrameInfo object
                          inContentWorld:[WKContentWorld pageWorld]
                       completionHandler:^(id result, NSError *error) {
        if (error == nil) {
            if (result != nil) {
                resultString = [NSString stringWithFormat:@"%@", result];
            }
        } else {
            NSLog(@"evaluateJavaScript error : %@", error.localizedDescription);
        }
        //NSLog(@"js %@",resultString);
        finished = YES;
    }];

    while (!finished)
    {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
    }

    return resultString;
}



- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message
{
    // what ever were logged with console.log() in wkwebview arrives here in message.body property
    NSString * msg=message.body;
    epubframe = message.frameInfo;
    NSString * url = epubframe.request.URL.absoluteString;
    //NSLog(@"msg %@ %@",msg, url);
    NSLog(@"msg %@",msg);

    
    NSRange r1 = [msg rangeOfString:@"="];
    if (r1.location== NSNotFound) return;
    
    NSString * item = [msg substringWithRange:NSMakeRange(0,r1.location)];
    NSString * data = [msg substringWithRange:
                       NSMakeRange(r1.location+1,[msg length]-r1.location-1)];
    //NSLog(@"%@",item);
    //NSLog(@"%@",data);
    //([aMessage rangeOfString:@"title"].location!= NSNotFound)
    //NSLog(@"message %@ %d",item, pageindex);
    jsmessage = data;
    if ([item isEqualToString:@"#book"]) {
        //[webdelegate urltodomain:url];
        [self findbook:data url:url];
    } else if ([item isEqualToString:@"#load"]) {
        [self findmp3:data];
    } else if ([item isEqualToString:@"#nextpage"]) {
        jsresnext= data;
        //[self findmp3:data];
    }
    return;
    
#ifdef DEBUG
    //NSLog(@"message %@ %d %@",item, pageindex, data);
#endif
}

//https://developer.apple.com/reference/webkit/webframeloaddelegate/1501445-webview?language=objc

- (void)webView:(WebView *)webView windowScriptObjectAvailable:(WebScriptObject *)windowScriptObject {
    
    [windowScriptObject setValue:self forKey:@"MyApp"];
}


- (void) loginjs:(id)sender
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];

    id jsobj;
    //= [webView windowScriptObject];
//    [jsobj setValue:self forKey:@"MyApp"];
    NSString* js;
//    document.getElementById(\"email-field\").value = \"matt.erlandsen@gmail.com\"; \
//    document.getElementById(\"password-field\").value = \"iPhone.05121987\";  \
    document.getElementById(\"password-field\").value = \"600338qQ@\";  \
    document.getElementById(\"signin-form\").submit(); \

//    document.getElementById(\"email-field\").value = \"matt.erlandsen@gmail.com\"; \
//    document.getElementById(\"password-field\").value = \"iPhone.05121987\";  \
//    document.getElementById(\"email-field\").value = \"youhdtv@gmail.com\"; \
//    document.getElementById(\"password-field\").value = \"600338qQ@\";  \
//    document.getElementById(\"email-field\").value = \"asarabia-garcia@ucsb.edu\"; \
//    document.getElementById(\"password-field\").value = \"Soc152abook!\";  \

    //a07   600338qQ@~
    //a06  600338qQ@~
#ifdef DEBUG
            js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
        document.getElementById(\"email-field\").value = \"a06@pwqsoft.com\"; \
        document.getElementById(\"password-field\").value = \"600338qQ@~\";  \
            document.getElementById(\"signin-form\").submit(); \
            MyApp.consoleLog_(\"login ...\"); \
            ";
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
        //[vars setValue:[list objectAtIndex:1] forKey:[list objectAtIndex:0]];
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
    NSString * s1= [urldict objectForKey:@"cfiWithoutAssertions"];
    //s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com%@",s1];
//    s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com/books/%@/cfi%@",webdelegate.ebookid, s1];
    s1 = [NSString stringWithFormat:@"https://bookshelf.vitalsource.com/#/books/%@/cfi%@",webdelegate.ebookid, s1];

    
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
    NSString * res;
    res = [self runjs2:js_nextpage];
    NSDictionary * obj = [NSJSONSerialization JSONObjectWithData:[res dataUsingEncoding:NSUTF8StringEncoding] options:0 error:nil];
    int n =  [[obj objectForKey:@"nextbtn"] intValue] ;
    NSLog(@"%@ %d",res,n);
    return n;
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

- (int) bookinfojs
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    //= [webView windowScriptObject];
    //NSLog(@"pagebutton %f",p2-p1);
    [webView evaluateJavaScript:js_bif completionHandler:^(NSString *result, NSError *error)
    {
        //NSLog(@"Error %@",error);
        //NSLog(@"Result %@",result);
    }];
    return 1;
}


#pragma mark - NSURL download mp3
- (void)downloadfile:(NSString *)amp3 {

    NSURL *url = [NSURL URLWithString:amp3];
    [self log:@"%@",url];

    // Create an NSURLSession with a default configuration
    NSURLSessionConfiguration *config = [NSURLSessionConfiguration defaultSessionConfiguration];
    // Create the session, specifying this view controller as the delegate
    NSURLSession *session = [NSURLSession sessionWithConfiguration:config delegate:self delegateQueue:nil];

    // Create a download task with the URL and resume it
    NSURLSessionDownloadTask *downloadTask = [session downloadTaskWithURL:url];
    [downloadTask resume];
    [self updatelog:@"Download %d/%d",pageindex,totalpage];

    // Show the progress indicator
}

- (void)downloadchapter {
    if (!loading ) {
        [self downloadurl:webdelegate.epubfile];
    }
}

- (void)downloadurl:(NSString *)amp3 {

    //NSURL *url = [NSURL URLWithString:amp3];;
    NSURL *url = [NSURL URLWithString:amp3];;
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
    [request setValue:nil forHTTPHeaderField:@"Range"];
    [request setValue:host forHTTPHeaderField:@"Origin"];
    [request setValue:frameurl forHTTPHeaderField:@"Referer"];

    loading = true;
    // 2. Create a download task
    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDownloadTask *downloadTask = [session downloadTaskWithRequest:request
        completionHandler:^(NSURL *location, NSURLResponse *response, NSError *error) {
        loading = false;
        if (error) {
            NSLog(@"Download error: %@", error.localizedDescription);
            return;
        }
        //NSLog(@"download to: %@", location.path);

//         3. Move the file from the temporary 'location' to a permanent folder
        NSFileManager *fileManager = [NSFileManager defaultManager];
        NSDictionary *attributes = [[NSFileManager defaultManager] attributesOfItemAtPath:location.path error:nil];
        
        if (attributes) {
            NSNumber *fileSize = attributes[NSFileSize];
            if ([fileSize intValue] <10) {
                taskindex=100;
            }
        }


        NSString * s1 = [datadir stringByAppendingPathComponent:@"111.mp3"];
        s1 = webdelegate.mp3file;
        s1 = [@"file://" stringByAppendingString:s1];
        NSURL *desturl = [NSURL URLWithString:s1];
        NSError *moveError;
        if ([fileManager fileExistsAtPath:webdelegate.mp3file])
            [fileManager removeItemAtPath:webdelegate.mp3file error:nil];

        [fileManager moveItemAtURL:location toURL:desturl error:&moveError];
        if (moveError) {
            NSLog(@"File move error: %@", moveError.localizedDescription);
        } else {
            NSLog(@"File saved to: %@", desturl.path);
        }
        [webdelegate savedownloadurl:webdelegate.epubfile];
        pageindex +=1;
        
    }];

    // 4. Start the task
    [downloadTask resume];
}


- (void)URLSession:(NSURLSession *)session downloadTask:(NSURLSessionDownloadTask *)downloadTask didFinishDownloadingToURL:(NSURL *)location {
    // This block is often executed on a background queue, so update UI on the main thread
    //NSString *downloadsPath = [NSSearchPathForDirectoriesInDomains(NSDownloadsDirectory, NSUserDomainMask, YES) firstObject];
    NSString * s1 = [self urltopath:curpage];
    NSString *fileName = [s1 lastPathComponent];
    //fileName=@"111.mp3";
    NSURL *destinationURL = [NSURL fileURLWithPath:[booktmp stringByAppendingPathComponent:fileName]];

    NSError *error;
    //[[NSFileManager defaultManager] copyItemAtPath:location.path toPath:destinationURL.path error:&error];
    [[NSFileManager defaultManager] moveItemAtURL:location toURL:destinationURL error:&error];
    dispatch_async(dispatch_get_main_queue(), ^{
        if (error) {
            [self log:@"Error moving file: %@", error.localizedDescription];
        } else {
            NSLog(@"File downloaded to: %@", destinationURL.path);
            [self log:@"File downloaded to: %@", destinationURL.path];
        }
    });
//    dispatch_async(dispatch_get_main_queue(), ^{
////        self.progressIndicator.hidden = YES;
////        self.downloadButton.enabled = YES;
//        NSLog(@"File downloaded to: %@",location.path);
//        NSLog(@"File downloaded abs to: %@",location.absoluteURL);
//
//        // Find a destination to save the file, for example, the Downloads folder
//        // Move the temporary file from its location to the destination URL copyItem
////        if ([[NSFileManager defaultManager] moveItemAtURL:location toURL:destinationURL error:&error]) {
//        if ([[NSFileManager defaultManager] copyItemAtPath:location.path toPath:destinationURL.path error:&error]) {
////            self.statusLabel.stringValue = [NSString stringWithFormat:@"Downloaded successfully to: %@", destinationURL.path];
//            NSLog(@"File downloaded to: %@", destinationURL.path);
//            [self log:@"File downloaded to: %@", destinationURL.path];
//        } else {
////            self.statusLabel.stringValue = [NSString stringWithFormat:@"Error saving file: %@", error.localizedDescription];
//            NSLog(@"Error moving file: %@", error.localizedDescription);
//            [self log:@"Error moving file: %@", error.localizedDescription];
//        }
//    });
}

- (void)URLSession:(NSURLSession *)session task:(NSURLSessionTask *)task didCompleteWithError:(NSError *)error
{
    if (error) {
        NSLog(@"Download finished with error: %@", error);
    } else {
        NSLog(@"Download finished successfully.");
    }
}

- (NSString*) urltopath: (NSString *) url
{
    url = [url stringByReplacingOccurrencesOfString:@"html#" withString:@"html?"];
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * fname = urlComponents.path;
    
    return fname;
}

#pragma mark - PDF ebook handle

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

//  chm.DeleteCookies('jiasaw.vitalsource.com','_jigsaw_session');
-(void) deletecookie
{
    WKWebsiteDataStore *dateStore = [WKWebsiteDataStore defaultDataStore];
    [dateStore
       fetchDataRecordsOfTypes:[WKWebsiteDataStore allWebsiteDataTypes]
       completionHandler:^(NSArray<WKWebsiteDataRecord *> * __nonnull records) {
         for (WKWebsiteDataRecord *record  in records) {
           //NSLog(@"%@",record);
           if ( [record.displayName containsString:@"vitalsource.com"]) {
              NSLog(@"%@",record);
             [[WKWebsiteDataStore defaultDataStore]
                 removeDataOfTypes:record.dataTypes
                 forDataRecords:@[record]
                 completionHandler:^{
                   NSLog(@"Cookies for %@ deleted successfully",record.displayName);
                 }
             ];
            NSString * aurl= @"https://www.vitalsource.com/bookshelf/home";
            [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
           }
         }
       }
     ];
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
    NSLog(@"didStartProvisionalNavigation: %@", webView.URL);
}


- (void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation {
    // didReceiveServerRedirectForProvisionalNavigation.
    NSURL *aURL = [webView.URL copy];
    NSLog(@"redirect %s url: %@", __FUNCTION__, aURL);
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

-(void)printwkview
{
    //[self Setwebviewheight];
    //webView.customUserAgent = c_agent14;
    SEL printSelector = NSSelectorFromString(@"_printOperationWithPrintInfo:"); // This is SPI on WKWebView. Apparently existing since 10.11 ?

     NSMutableDictionary *printInfoDict = [[[NSPrintInfo sharedPrintInfo] dictionary] mutableCopy];
     printInfoDict[NSPrintJobDisposition] = NSPrintSaveJob; // means you want a PDF file, not printing to a real printer.
    NSString * fname = [webdelegate pagefilename:pageindex];
    printInfoDict[NSPrintJobSavingURL] = [NSURL fileURLWithPath:[fname stringByExpandingTildeInPath]];
    //printInfoDict[NSPrintJobSavingURL] = [NSURL fileURLWithPath:[@"~/Documents/print_test.pdf" stringByExpandingTildeInPath]]; // path of the generated pdf file
     printInfoDict[NSPrintDetailedErrorReporting] = @YES; // not necessary

     // customize the layout of the "printing"
     NSPrintInfo *customPrintInfo = [[NSPrintInfo alloc] initWithDictionary:printInfoDict];
     [customPrintInfo setHorizontalPagination: NSPrintingPaginationModeAutomatic];
     [customPrintInfo setVerticalPagination: NSPrintingPaginationModeAutomatic];
     [customPrintInfo setVerticallyCentered:NO];
     [customPrintInfo setHorizontallyCentered:NO];
     customPrintInfo.leftMargin = 15;
     customPrintInfo.rightMargin = 15;
     customPrintInfo.topMargin = 30;
     customPrintInfo.bottomMargin = 30;
    //[customPrintInfo setPaperSize:NSMakeSize(612,792)];
    //customPrintInfo.orientation = NSPaperOrientationPortrait;

//#pragma clang diagnostic push
//#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
     NSPrintOperation *printOperation = (NSPrintOperation*) [webView performSelector:printSelector withObject:customPrintInfo];
//#pragma clang diagnostic pop
    
     //[printOperation setShowsPrintPanel:YES];
     [printOperation setShowsPrintPanel:NO];
     [printOperation setShowsProgressPanel:NO];
//    [[printOperation printPanel] setOptions:[[printOperation printPanel] options] | NSPrintPanelShowsPaperSize | NSPrintPanelShowsOrientation | NSPrintPanelShowsScaling];

//    BOOL printSuccess = [printOperation runOperation]; // THIS DOES NOT WORK WITH WKWEBVIEW! Use runOperationModalForWindow: instead (asynchronous)
//     [printOperation runOperationModalForWindow:self.window delegate:self didRunSelector:@selector(printPanelDidEnd:returnCode:contextInfo:) contextInfo:nil]; // THIS WILL WORK, but is async
    printing = true;
    [printOperation runOperationModalForWindow:self.window delegate:self didRunSelector:@selector(printOperationDidRun:success:contextInfo:) contextInfo:nil]; // THIS WILL WORK, but is async
}

- (void)printOperationDidRun:(NSPrintOperation *)printOperation  success:(BOOL)success  contextInfo:(void *)contextInfo
{
    //webView.customUserAgent = c_agent16;
    //NSRect r1 = webviewrect;
    //[webView setFrame:NSMakeRect(r1.origin.x,r1.origin.y,tviewwidth,r1.size.height)];
    //NSLog(@"print done");
    printing = false;
}
// NSPrintOperation  knowsPageRange
//NSPrintOperation view's frame was not initialized properly before knowsPageRange: returned. (WKPrintingView)
//http://mirror.informatimago.com/next/developer.apple.com/documentation/Cocoa/Conceptual/Printing/Tasks/PaginatingViews.html
//https://dewey-b1ca48e0aaf4d04af8c9081f67abbf90.listen.libbyap
//- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler
//{
//    NSString * aurl = [navigationAction.request.URL absoluteString];
//    if ([aurl rangeOfString:@"dewey-"].location!=NSNotFound) {
//        epubframe = navigationAction.targetFrame;
//        NSLog(@"decidePolicyForNavigationAction %@",[navigationAction.request.URL absoluteString]);
//    }
//
//    //if (navigationAction._canHandleRequest) {
//    decisionHandler(WKNavigationActionPolicyAllow);
//    return;
//    //}
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
//    NSLog(@"decidePolicyForNavigationResponse %@",webView.URL);
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
       //webdelegate.title = atitle;
       //NSLog(@"[%@] title %@",framename,atitle);
       // [self log:@"Title %@",atitle];
        
    }
}

- (void) urlchanged
{
    //[self updateTextFieldFromURL:webView.URL];
    [address setStringValue:[webView.URL absoluteString ]];
    addressurl = [webView.URL absoluteString ];
    if (working) {

    } else { //find book open
       if ([addressurl rangeOfString:@"/loan/"].location == NSNotFound) {
//           [downloadbtn setEnabled:false];
//           webdelegate.ebookid = @"111";
//           [[textview.textStorage mutableString] setString:@""];
//           [self log:@"\rOpen audiobook \r"];
           //NSLog(@"^^^^^^^^book find");
           //NSLog(@"url changes %@ ",[webView.URL absoluteString ]);
//           if ([addressurl rangeOfString:@"recent"].location != NSNotFound) {
//               return;
//           }
//           if (![downloadbtn isEnabled]){
//               [self foundjason];
//           }

       } else {
//           [downloadbtn setEnabled:false];
//           pausing =false;
//           captcha = 0;
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
            //booktitle = webView.title;
            //webdelegate.title = webView.title;
        }
    } else if ([keyPath isEqualToString:@"URL"]) {
        [self urlchanged];
    } else if ([keyPath isEqualToString:@"estimatedProgress"] && object == webView) {
        //[self.progressView setAlpha:1.0f];
        //[self.progressView setProgress:self.webView.estimatedProgress animated:YES];
        NSLog(@"estimatedProgress %f",webView.estimatedProgress);
//        if(webView.estimatedProgress >= 1.0f) {
//            NSLog(@"estimatedProgress ",webView.estimatedProgress);
//        }
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

-(int)urlpageno:(NSString *)aurl
{
    //addressurl=@"https://bookshelf.vitalsource.com/#/books/VCS-0074009900852/cfi/6/10!/4/6/4/2/2/2/2/2@0:0";
    NSString * url= [aurl stringByRemovingPercentEncoding];
    NSString * page;
    if ([url rangeOfString:@"!"].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@"!"];
    } else if ([url rangeOfString:@"["].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@"["];
    } else if ([url rangeOfString:@";"].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@";"];
    } else if ([url rangeOfString:@"@"].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@"@"];
    } else {
        page = [self strFrom:url from:@"/cfi/" to:@"***"];
    }
//
//    NSString * page = [self strFrom:url from:@"/cfi/" to:@"!"];
//    if (!page) {
//        page = [self strFrom:url from:@"/cfi/" to:@"["];
//    }
//    if (!page) {
//        page = [self strFrom:url from:@"/cfi/" to:@";"];
//    }
    page = [page stringByTrimmingCharactersInSet:[NSCharacterSet illegalCharacterSet]];
    page = [[page componentsSeparatedByCharactersInSet:
                  [[NSCharacterSet characterSetWithCharactersInString:@"+0123456789"]
                  invertedSet]]
                  componentsJoinedByString:@""];
    page =[webdelegate cleanfilename:page];
    
    int p ;
    p = [page intValue];
    
    return p;
}

-(NSString *)pagefilename:(NSString *)aurl
{
    //addressurl=@"https://bookshelf.vitalsource.com/#/books/VCS-0074009900852/cfi/6/10!/4/6/4/2/2/2/2/2@0:0";
    NSString * url= [aurl stringByRemovingPercentEncoding];
    NSString * bookid=[self strFrom:url from:@"#/books/" to:@"/cfi/"];
    NSString * page;
    if ([url rangeOfString:@"!"].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@"!"];
    } else if ([url rangeOfString:@"["].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@"["];
    } else if ([url rangeOfString:@";"].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@";"];
    } else if ([url rangeOfString:@"@"].location!=NSNotFound) {
        page = [self strFrom:url from:@"/cfi/" to:@"@"];
    } else {
        page = url;
    }
//
//    NSString * page = [self strFrom:url from:@"/cfi/" to:@"!"];
//    if (!page) {
//        page = [self strFrom:url from:@"/cfi/" to:@"["];
//    }
//    if (!page) {
//        page = [self strFrom:url from:@"/cfi/" to:@";"];
//    }
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
    //[self runjs2:jsdiv];
    //NSLog(@"%@",[webView.scrollView]);
    NSRect r1 ;
    int h = frameheigh+100;// [self webviewheight];
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

-(void)Setwebviewheight
{
    //return;
    //[self runjs2:jsdiv];
    int h = frameheigh+250;// [self webviewheight];
    NSRect r = webviewrect;// [webView frame];
    //NSRect r = [webView frame];
    //[self log:@"%@ %.0f %d %@",curpage,frameheigh,h,addressurl];
    int ph =1350;
    //h = (frameheigh/ph+1)*ph;
//    if (r.size.height>frameheigh+100) {
    if (frameheigh<r.size.height) {
//        //h = frameheigh+40;// [self webviewheight];
        h = 1200;
        //return;
    }
    int h2 = h-r.size.height;
    [webView setFrame:NSMakeRect(r.origin.x,r.origin.y,r.size.width,h)];
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
            NSString * fname = [self pagefilename:addressurl];
            [imageData writeToFile:fname atomically:NO];
            //[webdelegate saveurl:fname];
            [webdelegate saveurl:addressurl];
            //isDone = true;
            NSRect r1 = webviewrect;
            [webView setFrame:NSMakeRect(r1.origin.x,r1.origin.y,tviewwidth,r1.size.height)];
        }];
//    if (r1.size.height>0) {
//    }
}

-(NSString *)jskeydown
{
    NSString* rstr=[self runjs2:js_keypress];
    //NSLog(@"%@",rstr);
    return rstr;
}

-(NSString *)rightkeyjs
{
    NSString* rstr=[self runjs2:js_nextpage];
    //NSLog(@"%@",rstr);
    return rstr;
    //NSString * str = @"document.body.focus; \
    document.body.dispatchEvent(new KeyboardEvent('keypress',{'keyCode':39}));";
    
//    NSString * str = @" var node = document.querySelector('#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper > button'); \
//        if (node) { node.click(); node.className; } \
//        node=  document.querySelector('#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper > button'); \
//        if (node) { node.click(); node.className;}";
//   rstr=[self runjs2:str];
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

- (NSString *)runjs3:(NSString *)script {
    
    
    __block NSString *resultString = nil;
    __block BOOL finished = NO;

//    [webView evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
    [webView evaluateJavaScript:script
                                 inFrame: epubframe // Your WKFrameInfo object
                          inContentWorld:[WKContentWorld pageWorld]
                       completionHandler:^(id result, NSError *error) {
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
- (void) goURL:(NSString *) aurl
{
    frameheigh=0;
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
}

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
    } else if ((r1.location != NSNotFound)&&(r2.location == NSNotFound))
    {
        r2.location = [str length];
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

-(NSMutableData *) doAES:(NSString*) key datain:(NSData *) dataIn op:(CCOperation)kCCEncrypt_or_kCCDecrypt
{
        CCCryptorStatus ccStatus   = kCCSuccess;
        size_t          cryptBytes = 0;
        NSMutableData  *dataOut    = [NSMutableData dataWithLength:kCCBlockSizeAES128+dataIn.length + kCCBlockSizeBlowfish];
        NSData *keydata =[key dataUsingEncoding:NSUTF8StringEncoding];
    NSData *iv = nil; //[IV dataUsingEncoding:NSUTF8StringEncoding];
        
        ccStatus = CCCrypt( kCCEncrypt_or_kCCDecrypt,
                           kCCAlgorithmAES,
                           kCCOptionPKCS7Padding,
                           keydata.bytes,
                           keydata.length,
                           (iv)?nil:iv.bytes,
                           dataIn.bytes,
                           dataIn.length,
                           dataOut.mutableBytes,
                           dataOut.length,
                           &cryptBytes);
        
        if (ccStatus == kCCSuccess) {
            dataOut.length = cryptBytes;
        }
        else {
            dataOut = nil;
            NSError *error = [NSError errorWithDomain:@"kEncryptionError"
                                         code:ccStatus
                                     userInfo:nil];
            NSLog(@"%@",error);
        }
        
        return dataOut;
}

-(NSMutableData *) encryptfile:(NSString *) key infile:(NSString *)  infile
{
    NSData * indata;
    if([[NSFileManager defaultManager] fileExistsAtPath:infile])
    {
        indata = [[NSFileManager defaultManager] contentsAtPath:infile];
    }   else  {
       NSLog(@"File not exits");
        return nil;
    }
    NSMutableData *outdata = [self doAES:key datain:indata op:kCCEncrypt];
    //[outdata writeToFile:outfile atomically:NO];
    //return [result base64EncodedStringWithOptions:0];
    return outdata;
}

-(NSString *) decryptfile:(NSString *) key infile:(NSString *)infile
{
    NSData * indata;
    if([[NSFileManager defaultManager] fileExistsAtPath:infile])
    {
        indata = [[NSFileManager defaultManager] contentsAtPath:infile];
    }   else  {
       NSLog(@"File not exits");
        return nil;
    }
    NSMutableData *outdata = [self doAES:key datain:indata op:kCCDecrypt];
    //if (outdata)
    //    [outdata writeToFile:outfile atomically:NO];
    //return [result base64EncodedStringWithOptions:0];
    return  [[NSString alloc] initWithData:outdata encoding:NSUTF8StringEncoding];
}



@end
