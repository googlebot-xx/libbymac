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

@implementation mainWin 

@synthesize working;
@synthesize datadir;

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
    
    //[convertbtn setWantsLayer:YES];
    //convertbtn.layer.backgroundColor = [NSColor grayColor].CGColor;
    //[[convertbtn cell] setBackgroundColor:[NSColor redColor]];

    //[webView setResourceLoadDelegate:self];
    [self setcache];
    [webView setResourceLoadDelegate:webdelegate];
    [webView setPolicyDelegate:self];
    [webView setFrameLoadDelegate:self];
    NSString * aurl = @"https://www.vitalsource.com/login";
    [[webView mainFrame] loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:aurl]]];
    
    //[self log:@"ready"];
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
    NSString * url =@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg";
    [webdelegate saveepubfile:url data:nil];   
}

- (IBAction)testbtn:(id)sender
{
//    [self setWorking:true];
//    NSLog(@"start");
//    [self wait:3];
//    NSLog(@"end");
//    return;
    
    NSString * url = [webView mainFrameURL];
    if ([url rangeOfString:@"login"].location != NSNotFound) {
        [self runjs:nil];
    } else {
        //[self rundownload];
        //[self performSelector: @selector(rundownload) withObject: nil afterDelay: 0.1];
        [self setWorking:true];

    }
#ifdef DEBUG
    //[regcontroller savekey:@"" skey:@"" suser:@"aa"];
    //[reg savekey:@"" skey:@"" suser:@""];
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
        [vars removeAllObjects];
        totalpage=0;
        pageindex=0;
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
            totalpage= [vars[@"Totalpages"] intValue];
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
                [self pagebuttonjs:pageindex]; ////goback page button click
                [self log:[NSString stringWithFormat:@"load page %d",pageindex]];
                taskindex = 11;
            }
            break;
        case 11:
            // Item 3
            if( webdelegate.ticked ){
                pageindex += 1;
                taskindex = 10; //goback page button click
            }
            break;
        default:
            break;
    }

    if (pageindex>1) {
        //working = false;
    }
    if (pageindex==totalpage) {
        working = false;
        [theTimer invalidate];
        [self log:@"end"];
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

- (void) log: (NSString*) msg
{
    //[textview ]
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:msg]];
    [textview.textStorage appendAttributedString:[[NSAttributedString alloc] initWithString:@"\n"]];
}

- (void)webView:(WebView *)webView windowScriptObjectAvailable:(WebScriptObject *)windowScriptObject {
    
    [windowScriptObject setValue:self forKey:@"MyApp"];
}

- (void) runjs:(id)sender
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id jsobj = [webView windowScriptObject];
    //[jsobj setValue:self forKey:@"MyApp"];
    NSString* js = @"console = { log: function(msg) { MyApp.consoleLog_(msg); } };\
                    document.getElementById(\"session_email\").value = \"a02@pwqsoft.com\"; \
                    document.getElementById(\"session_password\").value = \"600338qQ~\";  \
                    document.getElementById(\"new_session\").submit(); \
                    MyApp.consoleLog_(\"login ...\"); \
                    ";
                    //console.log(\"hellow\");";
    [jsobj evaluateWebScript: js];
    //[webView  stringByEvaluatingJavaScriptFromString:@"alert('ok');"];
    //NSString *href = [[webView windowScriptObject] evaluateWebScript:@"alert('ok');"];
    //[self log:href];
}

- (void)consoleLog:(NSString *)aMessage {
    NSLog(@"consoleLog: %@", aMessage);
    jsmessage = aMessage;
    jswaiting = false;
}

- (void)varLog:(NSString *)aMessage {
//    int i = (int)[aMessage rangeOfString:@"###"].location;
//    NSLog(@"# pos %d",i);
    if ([aMessage rangeOfString:@"###"].location == 0) {
        NSString * astr = [aMessage stringByReplacingOccurrencesOfString:@"###" withString:@""];
        [self log:astr];
        NSArray * list = [astr componentsSeparatedByString:@"="];
        [vars setValue:[list objectAtIndex:1] forKey:[list objectAtIndex:0]];
        //NSLog(@"varlog %@",list);
        [self log:aMessage];
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

- (int) totalbuttonjs
{
    //NSString* jsString = [NSString stringWithFormat:@"alert('ok');"];
    //[webView stringByEvaluatingJavaScriptFromString:jsString];
    id win = [webView windowScriptObject];
    NSString* js = @"document.getElementsByClassName(\"toolbar-button toc-button /img/toc/toc.svg\")[0].click(); \
    ";
    [win evaluateWebScript: js];
    [self wait:0.8];
    js = @"var items =document.getElementsByClassName(\"level level-1 group\"); \
        MyApp.varLog_(\"###Totalpages=\"+items.length);  \
        ";
    [win evaluateWebScript: js];
    [self log:@"before totoalpage"];
    
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
        buttons[0].click(); \
    }    \
    ";
    js = [NSString stringWithFormat:js,page,page];
    [win evaluateWebScript: js];
    //NSLog(@"pagebutton %f",p2-p1);
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

- (void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame {
    if (frame == [sender mainFrame]){
        NSURL * url = [[[frame dataSource] request] URL];
        [address setStringValue:[url absoluteString]];
        //NSLog(@"didFinishLoadForFrame %@",[url absoluteString]);
        //[self log:@"didFinishLoadForFrame %@"];
     }
   
}

- (void)webView:(WebView *)sender didReceiveTitle:(NSString *)title forFrame:(WebFrame *)frame
{
    // Report feedback only for the main frame.
    if (frame == [sender mainFrame]){
        //[[sender window] setTitle:title];
        //[self log:title];
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

@end
