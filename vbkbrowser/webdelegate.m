//
//  webdelegate.m
//  vbkbrowser
//
//  Created by aa on 2017-05-15.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import "webdelegate.h"
#import "mainWin.h"

@implementation WebDelegate

@synthesize tick;
@synthesize ticked;
- (id)init
{
    self = [super init];
    if (self) {
        //aboutcontroller = [[AboutController alloc] initWithWindowNibName:@"AboutController"];
        urllist = [[NSMutableArray alloc] init];
        timer = [NSTimer scheduledTimerWithTimeInterval:1 target:self selector:@selector(timerFired:) userInfo:nil repeats:YES];
        
        //_mainwin = self;
    }
    
    return self;
}

- (void)timerFired:(NSTimer*)theTimer
{
    tick += 1;
    if (tick>6) {
        if (_mainwin.working) {
            NSLog(@"tick %d",tick);
        }
        ticked = true;
        tick = 0;
    }
}

- (id)webView:(WebView *)sender identifierForInitialRequest:(NSURLRequest *)request
fromDataSource:(WebDataSource *)dataSource
{
    NSString *url = [self urldecode:request];
    //NSLog(@"%@",url);
    
    //[urllist addObject:[request URL]];
    //[_mainwin log:url];
    return [request URL];
}

- (void) webView: (WebView *)sender resource:(id)identifier didFinishLoadingFromDataSource:(WebDataSource *)dataSource
{
    NSString *url = [identifier absoluteString];
    int d = [self PosRight:url substr:@"pages"];
    tick = 0;
    ticked = false;
    bool isbook = false;
    //NSLog(@"didFinishDataSource %d %@ ",tick,url);
    if ([self PosRight:url substr:@"pages"]==1) {
        [_mainwin log:url];
        //NSLog(@"didFinishDataSource %d %@ ",tick,url);
        isbook = true;
    }

    if ([url rangeOfString:@"/epub/OEBPS/"].location != NSNotFound) {
        isbook = true;
    }
    
    if (isbook) {
        NSData *data = [dataSource data];
        WebResource *wd = [dataSource subresourceForURL:identifier] ;//] [NSURL URLWithString:identifier]];
        NSDictionary *dict = [NSDictionary dictionaryWithObjectsAndKeys: identifier, @"url", wd, @"dataSource", nil];
        [self performSelector: @selector(reallyDidFinishLoading:) withObject: dict afterDelay: 0.1];
    }
    
//    if ([url hasPrefix: @"http://www.example.org/image?"]) {
//        NSDictionary *dict =
//        [NSDictionary dictionaryWithObjectsAndKeys: identifier, @"url", dataSource, @"dataSource", nil];
//        [self performSelector: @selector(reallyDidFinishLoading:) withObject: dict afterDelay: 0.1];
//    }
}

- (void) reallyDidFinishLoading: (NSDictionary *)dict
{
    NSURL *url = [dict objectForKey: @"url"];
    NSString * s1 = [url absoluteString];
    
    //NSString * path = [self urlsplit:s1];
    //[_mainwin log:path];
//    WebDataSource *ds = [dict objectForKey: @"dataSource"];
//    WebResource *wd = [ds subresourceForURL:url];
    WebResource *wd = [dict objectForKey: @"dataSource"];
    NSData *data = [wd data];
    //NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    [self saveepubfile:s1 data:data];
    tick = 0;
    //[_mainwin log:str];
}

//OEBPS https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg133.jpg
//OEBPS https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg

- (void) saveepubfile: (NSString *)url data:(NSData *)data
{
    //NSArray * urllist = [self urlsplit:url];
    //NSMutableArray *pathlist= [self cleanpathlist:urllist];
    //NSFileManager *fileManager = [NSFileManager defaultManager];
    //NSLog(@"%@",pathlist);
    NSLog(@"OEBPS %@",url);
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * path = urlComponents.path;
    path = [path stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"]; //remove /books/ in path
    NSString * fname = [_mainwin.datadir stringByAppendingPathComponent:path];
    //path = [[fname lastPathComponent] stringByDeletingPathExtension];
    path = [fname stringByDeletingLastPathComponent];
    [self createfolder:path];
    if (data != nil) {
        [data writeToFile:fname atomically:YES];
    }
}

- (NSString *) urldecode: (NSURLRequest *) request
{
    NSString * s1 = [[request URL] absoluteString];
    NSString *result = [s1 stringByReplacingOccurrencesOfString:@"+" withString:@" "];
    result = [result stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
    return result;
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

- (NSArray *) strsplit: (NSString *) str
{
    NSString * astr;
    NSArray * list = [astr componentsSeparatedByString:@"="];
    return list;
}

- (NSMutableArray *) cleanpathlist: (NSArray *) alist
{
    NSString * astr;
    NSArray * list;
    NSMutableArray *muarray = [[NSMutableArray alloc]init];
    int n = [alist indexOfObject:@"books"];
    if  (n+1==[alist count]) return muarray;
    
    for (int i=n+1; i<[alist count]; i++)
    {
        [muarray addObject:alist[i]];
    }
    
    return muarray;
}

- (NSArray *) urlsplit: (NSString *) url
{
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * path = urlComponents.path;
    NSArray * list = [path componentsSeparatedByString:@"/"];
    //   /api/v0/books/9781506301587DEMO/pages
    //NSString * astr;
    //NSArray * list = [astr componentsSeparatedByString:@"="];
    return list;
}

- (BOOL) createfolder: (NSString*) folder
{
    // Check if the path exists
    NSFileManager *fileManager = [NSFileManager defaultManager];
    folder = [folder stringByExpandingTildeInPath];
    if ([fileManager fileExistsAtPath: folder] == NO)
    {
        //[fileManager createDirectoryAtPath: folder attributes: nil];
        //NSURL * furl = [NSURL URLWithString:[path stringByAddingPercentEscapesUsingEncoding:NSASCIIStringEncoding]]; //NSUTF8StringEncoding]];
        NSURL * furl = [NSURL fileURLWithPath:folder];
        NSError *error;
        if (![fileManager createDirectoryAtURL:furl withIntermediateDirectories:YES attributes:nil error:&error])
        {
            NSLog(@"Create error: %@", error);
        }
        
    }
    return true;
}
@end
