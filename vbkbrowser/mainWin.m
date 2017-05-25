//
//  mainWin.m
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//
#import "WebKit/WebKit.h"
#import "mainWin.h"
#import "webdelegate.h"
#import "const.h"
#import "BuyController.h"
#import "AboutController.h"

@interface mainWin ()

@end

mainWin * _mainwin;
BuyController *reg;
AboutController * aboutcontroller;



@implementation mainWin {

    IBOutlet NSButton * testbtn;
    IBOutlet id productcaption; // caption in main

    IBOutlet NSBox * box;
    IBOutlet NSButton * downloadbtn;
    IBOutlet NSTextView *textview;
    IBOutlet NSTextField *address;
    
    IBOutlet id buybtn;
    IBOutlet id helpbtn;
    IBOutlet id aboutbtn;

    int taskindex;
    int totalpage;
    int pageindex;
    BOOL jswaiting;
    NSString * jsmessage;
    
    WebDelegate * webdelegate;
}

@synthesize working;
@synthesize datadir;
@synthesize ebookdir;


- (id)init
{
    self = [super initWithWindowNibName:@"mainWin" ];
    if (self) {
        aboutcontroller = [[AboutController alloc] initWithWindowNibName:@"AboutController"];
        webdelegate = [[WebDelegate alloc] init];
        _mainwin = self;
        vars = [[NSMutableDictionary alloc] init];
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

- (void)awakeFromNib
{
    [productcaption setStringValue:c_product];
    
    NSArray * paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    docdir = [paths objectAtIndex:0];
    
    ebookdir = docdir;
    ebookdir = [ebookdir stringByAppendingPathComponent:c_company];
    [self createfolder:ebookdir];
    
    
    ebookdir = [ebookdir stringByAppendingPathComponent:c_app];
    [self createfolder:ebookdir];

    cachedir = [ebookdir stringByAppendingPathComponent:@"cache"];
    [self createfolder:cachedir];
    
    datadir = [ebookdir stringByAppendingPathComponent:@"tmp"];
    [self createfolder:datadir];
    
    //[NSString stringWithFormat:@"Ver %@ (%@)\n\n%@",s2,s4,s5];
    //[textview setHasVerticalScroller:YES];
    //[textview setHasHorizontalScroller:YES];
    //[webView setUIDelegate:self];
    //[webView setFrameLoadDelegate:self];
    [textview setVerticallyResizable:YES];
    [textview setHorizontallyResizable:NO];
    
    [box setHidden:true];

#ifndef DEBUG
    [testbtn setHidden:true];
#endif
    //[downloadbtn setWantsLayer:YES];
    //downloadbtn.layer.backgroundColor = [NSColor greenColor].CGColor;
    
    //address ed
    [address setTarget:self];
    [address setAction:@selector(enterAddress:)];

    //[webView setResourceLoadDelegate:self];
    [self setcache];
    [webView setResourceLoadDelegate:webdelegate];
    [webView setPolicyDelegate:self];
    [webView setFrameLoadDelegate:self];
    NSString * aurl = @"https://www.vitalsource.com/login";
    [[webView mainFrame] loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
    
    
    //[self log:@"ready %@",aurl];
    //[self log:@"go"];
}

- (void)setcache
{
    int cacheSizeMemory = 4*1024*1024; // 4MB
    int cacheSizeDisk = 32*1024*1024; // 32MB
    NSURLCache *sharedCache = [[NSURLCache alloc] initWithMemoryCapacity:cacheSizeMemory diskCapacity:cacheSizeDisk diskPath:cachedir];
    [NSURLCache setSharedURLCache:sharedCache];
}

- (void)clearcache
{
    [[NSURLCache sharedURLCache] removeAllCachedResponses];
}

- (IBAction)testfile:(id)sender
{
    //NSString * url =@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg";
    //[webdelegate saveepubfile:url data:nil];
    [self pageiframejs:0];
}

- (IBAction)testbtn:(id)sender
{
//    [self setWorking:true];
//    NSLog(@"start");
//    [self wait:3];
//    NSLog(@"end");
    //[webdelegate BuildPub:nil];
    //return;
    
    NSString * url = [webView mainFrameURL];
    if ([url rangeOfString:@"login"].location != NSNotFound) {
        [self loginjs:nil];
    } else {
        [self totalbuttonjs];
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
    [self setWorking:true];
   // [self totalbuttonjs];
}

- (IBAction)boxclosebtn:(id)sender
{
    [box setHidden:true];
}


- (IBAction)runjstext:(id)sender
{
    NSString * js = [[textview textStorage] string];
    id jsobj = [webView windowScriptObject];
    [jsobj evaluateWebScript: js];
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
        [vars removeAllObjects];
        [webdelegate clearurllist];
        totalpage=0;
        pageindex=0;
        taskindex=0;
        tasktimer = [NSTimer scheduledTimerWithTimeInterval:0.3 target:self selector:@selector(taskhandle:) userInfo:nil repeats:YES];
        [self log:@"Start download, wait ...."];
    } else {
        working = false;
        [tasktimer invalidate];
        [self log:@"end"];
    }
    //NSLog(@"working %d",aworking);
}

- (void) rundownload
{
    [self setWorking:true];
    
    taskindex = 0;
}

- (void) taskhandle:(NSTimer*)theTimer
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
            break;
        default:
            break;
    }

    if (pageindex>1) {
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
        return 1;
    }
    return 0;
}

#pragma mark - javasript

- (void) log:(NSString *)formatString, ...
{
    
    va_list args;
    va_start(args, formatString);
    NSString * str = [[NSString alloc] initWithFormat:formatString arguments:args];
    va_end(args);
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:str]];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
}

- (void) log1: (NSString*) msg
{
    //[textview ]
    //NSString * str = [NSString stringWithFormat:msg,args];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:msg]];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
}

- (void)webView:(WebView *)webView windowScriptObjectAvailable:(WebScriptObject *)windowScriptObject {
    
    [windowScriptObject setValue:self forKey:@"MyApp"];
}

- (void) loginjs:(id)sender
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id jsobj = [webView windowScriptObject];
    //[jsobj setValue:self forKey:@"MyApp"];
    NSString* js;
    
#ifdef DEBUG
    js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
    document.getElementById(\"session_email\").value = \"a01@pwqsoft.com\"; \
    document.getElementById(\"session_password\").value = \"600338qQ~\";  \
    document.getElementById(\"new_session\").submit(); \
    MyApp.consoleLog_(\"login ...\"); \
    ";
    //console.log(\"hellow\");";
    [jsobj evaluateWebScript: js];
#endif
   
}

- (void)consoleLog:(NSString *)aMessage {
    //NSLog(@"consoleLog: %@", aMessage);
    jsmessage = aMessage;
    jswaiting = false;
}

- (void)varLog:(NSString *)aMessage {
//    int i = (int)[aMessage rangeOfString:@"###"].location;
//    NSLog(@"# pos %d",i);
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

- (int) totalbuttonjs
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win = [webView windowScriptObject];
    NSString* js = @"var items =document.getElementsByClassName(\"level level-1 group\"); \
            if (items.length==0) {\
                document.getElementsByClassName(\"toolbar-button toc-button /img/toc/toc.svg\")[0].click();} \
    ";
    [win evaluateWebScript: js];
    [self wait:0.8];
    js = @"var items =document.getElementsByClassName(\"level level-1 group\"); \
        MyApp.varLog_(\"###Totalpages=\"+items.length);  \
        ";
    [win evaluateWebScript: js];
    //[self log:@"before totoalpage"];
    
    return 10;
    
    js = @"var items =document.getElementsByClassName(\"level level-1 group\"); \
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

- (int) pagebuttonjs:(int) page
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win = [webView windowScriptObject];
    NSString* js ;
    js = @"var items =document.getElementsByClassName(\"level level-1 group\"); \
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
    id win = [webView windowScriptObject];
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

- (void)webView:(WebView *)sender decidePolicyForNewWindowAction:(NSDictionary *)actionInformation request:(NSURLRequest *)request newFrameName:(NSString *)frameName decisionListener:(id<WebPolicyDecisionListener>)listener {
    //[[NSWorkspace sharedWorkspace] openURL:[actionInformation objectForKey:WebActionOriginalURLKey]];
    //[listener use];
    [[webView mainFrame] loadRequest:request];
}

//save iframe html
- (void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame {
    //NSURL * url = [[[frame dataSource] request] URL];
    NSString * url = [[[[frame dataSource] request] URL] absoluteString];
    NSString * framename = [frame name];
    if ([framename isEqualToString:@"epub-content"]) {
        //[self log:@"Frame %@",url];
        WebDataSource *source = [frame dataSource];
        NSData *data = [source data];
        [webdelegate saveurl:url];
        [webdelegate saveepubfile:url data:data];
        if (working)
        {
            [self log:@"save page %d",pageindex+1];
        }
        
        //NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        if ([box isHidden]) {
            [box setHidden:false];
            [[textview.textStorage mutableString] setString:@""];

            //[self log:@"ebook ready to download, click download button, \r%@",webdelegate.title];
            [self log:@"ebook ready to download, click download button, \r"];
        }
        //NSLog(@"%@",url);
    }

    if (frame == [sender mainFrame]){
        [address setStringValue:url];
        //[self log:@"didFinishLoadForFrame %@"];
     }
   
}

- (void)webView:(WebView *)sender didReceiveTitle:(NSString *)atitle forFrame:(WebFrame *)frame
{
    // Report feedback only for the main frame.
    NSString * framename = [frame name];
    if (pageindex==0 && [framename isEqualToString:@"epub-content"]) {
        //webdelegate.title = atitle;
        //NSLog(@"%@",atitle);
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

#pragma mark - Browser
//https://stackoverflow.com/questions/995758/execute-an-action-when-the-enter-key-is-pressed-in-a-nstextfield
- (void)enterAddress:(id)sender
{
    // do something interesting when the user hits <enter> in the text field
    NSString * aurl = [address stringValue];
    if ([aurl rangeOfString:@"http://"].location == NSNotFound)
    {
        aurl = [NSString stringWithFormat:@"http://%@",aurl];
    }
    [[webView mainFrame] loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
    
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

#pragma mark - buy button
- (IBAction)aboutbtn:(id)sender
{
    [aboutcontroller ShowAbout];
}

- (IBAction)gohome:(id)sender
{
    [[NSWorkspace sharedWorkspace] openURL: [NSURL URLWithString:c_home]];
}

- (IBAction)buynowurl:(id)sender
{
    [[NSWorkspace sharedWorkspace] openURL: [NSURL URLWithString:c_order]];
}


@end
