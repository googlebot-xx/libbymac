//
//  webdelegate.m
//  vbkbrowser
//
//  Created by aa on 2017-05-15.
//  Copyright © 2017 ebookconverter. All rights reserved.
//
#import <Quartz/Quartz.h>
#import "webdelegate.h"
#import "BuyController.h"
#import "const.h"
#import "mainWin.h"
#import "ZipArchive.h"


@interface WebDelegate () <WebResourceLoadDelegate>

@end

@implementation WebDelegate {
    NSString * ebookid;
}

@synthesize tick;
@synthesize ticked;
@synthesize title;
@synthesize ebooktype;
@synthesize pagelist;

- (id)init
{
    self = [super init];
    if (self) {
        //aboutcontroller = [[AboutController alloc] initWithWindowNibName:@"AboutController"];
        urllist = [[NSMutableArray alloc] init];
        titlelist = [[NSMutableArray alloc] init];
        timer = [NSTimer scheduledTimerWithTimeInterval:1 target:self selector:@selector(timerFired:) userInfo:nil repeats:YES];
        title = @"test epub";
        ebooktype = 0;
        //_mainwin = self;
    }
    
    return self;
}

- (void)timerFired:(NSTimer*)theTimer
{
    if (ticked)
        tick =0;
    else
        tick += 1;

    if (tick>c_timeout) {
        if (_mainwin.working) {
            //NSLog(@"tick %d",tick);
        }
        ticked = true;
    }
}

#pragma mark - delegate

- (void) clearurllist
{
    [urllist removeAllObjects];
    [titlelist removeAllObjects];
}

- (id)webView:(WebView *)sender identifierForInitialRequest:(NSURLRequest *)request
fromDataSource:(WebDataSource *)dataSource
{
    //NSString *url = [self urldecode:request];
    //NSLog(@"%@",url);
    
    //[urllist addObject:[request URL]];
    //[_mainwin log:url];
    return [request URL];
}

- (void) webView: (WebView *)sender resource:(id)identifier didFinishLoadingFromDataSource:(WebDataSource *)dataSource
{
    idurl = [identifier absoluteString];
    //int d = [self PosRight:url substr:@"pages"];
    tick = 0;
    ticked = false;
    bool isbook = false;
  

// https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b5831394d716d784c79356d55547130716a5a672b4c70644e2b6b4b7630424e4a5261453d0a/encrypted/1600
//    if ([url rangeOfString:@"/epub/OEBPS/"].location != NSNotFound) {
    NSString * path = [self urltopath:idurl];
    //if ([path rangeOfString:@"/books/"].location == 0) {
    if ([path rangeOfString:@"/books/"].location !=NSNotFound) {
        isbook = true;
    }
    
    if (isbook) {
        //NSLog(@"didFinishDataSource %d %@ ",tick,url);
        //version 1
        //NSDictionary *dict = [NSDictionary dictionaryWithObjectsAndKeys: identifier, @"url", dataSource, @"dataSource", nil];
        
        
        //version 2
        WebResource *wd = [dataSource subresourceForURL:identifier] ;//] [NSURL URLWithString:identifier]];
        NSDictionary *dict = [NSDictionary dictionaryWithObjectsAndKeys: identifier, @"url", wd, @"dataSource", nil];
        
        [self performSelector: @selector(reallyDidFinishLoading:) withObject: dict afterDelay: 0.1];
    }
}

- (void) reallyDidFinishLoading: (NSDictionary *)dict
{
    NSURL *url = [dict objectForKey: @"url"];
    NSString * s1 = [url absoluteString];

    //https://jigsaw.vitalsource.com/api/v0/books/9781506301594DEMO/pages
    NSString *pagestr=[s1 substringFromIndex:s1.length-6];
    if ([pagestr rangeOfString:@"/pages"].location!=NSNotFound) {
        //NSLog(@"pages found %@",s1);
        [self savepages:dict];
        return;
    }

    if ([s1 rangeOfString:@"/api/"].location!=NSNotFound) {
        return;
    }

    //NSString * path = [self urlsplit:s1];
    //[_mainwin log:path];
//    WebDataSource *ds = [dict objectForKey: @"dataSource"];
//    WebResource *wd = [ds subresourceForURL:url];
//    if ([s1 rangeOfString:@".xhtm"].location != NSNotFound) {
//        s1 = [self urlremovequery:s1];
//        NSLog(@"OEBPS %@",s1);
//        for(NSString *s in [dataSource subresources])
//            NSLog(@"resource : %@",s);
//        url = [NSURL URLWithString:s1];
//    }

    //return;
    //version 1
//    WebDataSource *dataSource = [dict objectForKey: @"dataSource"];
//    WebResource *wd = [dataSource subresourceForURL:url] ;//] [NSURL URLWithString:identifier]];
//    NSData *data = [wd data];
//    if (data == nil) {
//        data = [dataSource data];
//    }
    //NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

    //version 2
    WebResource *wd = [dict objectForKey: @"dataSource"];
    NSData *data = [wd data];
    [self saveepubfile:s1 data:data];
    tick = 0;
    
    //pdf ebook next page
    if (_mainwin.working && [s1 rangeOfString:@"/encrypted/"].location!=NSNotFound ) {
        [self saveurl:s1];
        //NSLog(@"save url %@",s1);
        ticked = true;
    }
    //[_mainwin log:str];
}

//OEBPS https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg133.jpg
//OEBPS https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg


- (void) saveurl: (NSString *)url
{
    //if (_mainwin.working && [url rangeOfString:@"xhtm"].location != NSNotFound) {
    if (_mainwin.working) {
        [urllist addObject:url];
        //NSLog(@"save url %@",url);
    }
}

//By implementing and registering a subclass of NSURLProtocol you can capture all the request from your UIWebView.
//https://stackoverflow.com/questions/5353278/uiwebviewdelegate-not-monitoring-xmlhttprequest
//https://stackoverflow.com/questions/3155359/in-webkit-how-do-i-get-the-content-of-a-resource

//https://www.raywenderlich.com/59982/nsurlprotocol-tutorial

- (void) savepages:(NSDictionary *)dict
{
    //NSURL *url = [dict objectForKey: @"url"];
    //url = [NSURL URLWithString:idurl];
    
    //version 1
//    WebDataSource *dataSource = [dict objectForKey: @"dataSource"];
//    WebResource *wd = [dataSource subresourceForURL:url] ;//] [NSURL URLWithString:identifier]];
//    NSData *data = [wd data];

    //version 2
    WebResource *wd = [dict objectForKey: @"dataSource"];
    NSData *data = [wd data];
    
    NSError *error = nil;
    //[pagelist dealloc];
    

#ifdef DEBUG
    //NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    //NSLog(@"%@",str);
#endif
    
    pagelist = NULL;
    pagelist = [NSJSONSerialization JSONObjectWithData:data options:0 error:&error];
    //pagelist.retain;
    
//    [urllist removeAllObjects];
//    for (int i=0; i<[pagelist count]; i++) {
//        NSDictionary *urldict = [pagelist objectAtIndex:i];
//        NSString * s1 = [urldict objectForKey:@"absoluteURL"];
//        s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com%@",s1];
//        [urllist addObject:s1];
//    }
    
}

- (void) buildurllist
{
    //build urllist
    [urllist removeAllObjects];
    for (int i=0; i<[pagelist count]; i++) {
        NSDictionary *urldict = [pagelist objectAtIndex:i];
        NSString * s1 = [urldict objectForKey:@"absoluteURL"];
        s1 = [NSString stringWithFormat:@"https://jigsaw.vitalsource.com%@",s1];
        [urllist addObject:s1];
    }
}


- (void) savetitle: (NSString *)atitle
{
    if (_mainwin.working) {
        [titlelist addObject:atitle];
        //NSLog(@"save title %@",atitle);
    }
}

- (NSString *) nextpage: (int)page
{
    if (page<[urllist count]) {
        return [urllist objectAtIndex:page];
    }
    return NULL;
}


//OEBPS https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/images/pg141.jpg
//pbk https://jigsaw.vitalsource.com/books/9780826904942/pages/300737558/content#cfi=/9

- (void) saveepubfile: (NSString *)url data:(NSData *)data
{
    //NSArray * urllist = [self urlsplit:url];
    //NSMutableArray *pathlist= [self cleanpathlist:urllist];
    //NSFileManager *fileManager = [NSFileManager defaultManager];
    //NSLog(@"%@",pathlist);
    //NSLog(@"savefile %@",url);
    
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * path = urlComponents.path;
    NSString *bookid = [self getbookid:path];
    
    if (!bookid) return;  //no bookid no save
    
    bool isepub = [path rangeOfString:@"/epub/"].location!=NSNotFound;

   
    NSString * fname;
    if  (isepub) {
        path = [path stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"]; //remove /books/ in path
        fname = [_mainwin.datadir stringByAppendingPathComponent:path];
    } else {
        fname = [_mainwin.datadir stringByAppendingPathComponent:bookid];
        fname = [fname stringByAppendingPathComponent:path];
    }
    //path = [[fname lastPathComponent] stringByDeletingPathExtension];
    path = [fname stringByDeletingLastPathComponent];
    [self createfolder:path];
    if (data != nil) {
        [data writeToFile:fname atomically:YES];
    }
}

#pragma mark - epub build

//https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/cover.xlink.xhtml#cfi=/6/2
//https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/ch0001.xlink.xhtml#cfi=/6/4%5B;vnd.vst.idref=ch0001%5D
//https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/ch0005.xlink.xhtml#cfi=/6/6%5B;vnd.vst.idref=ch0005%5D

- (NSString *) getepubfolder: (NSString *)url path:(NSString *)path
{
    NSString * dir =[url stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"];
    NSRange r2 = [dir rangeOfString:path];
    NSRange r1;
    r1.length = r2.location;
    r1.location = 1;
    dir = [dir substringWithRange:r1];
    return dir;
}

- (NSString *) getepubfolder2: (NSString *) url
{
    NSArray * list = [url componentsSeparatedByString:@"/"];
    int n = [list count];
    NSString * path = @"";
    for (int i=0; i<n; i++) {
        NSString * s1 = [list objectAtIndex:i];
        if ([s1 isEqualToString:@"books"]) {
            path  = [path stringByAppendingPathComponent:[list objectAtIndex:i+1]];
            if (n>i+1) {
                NSString * epub = [list objectAtIndex:i+2];
            }
            break;
        }
        
    }
    return path;
    
    
    
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    path = urlComponents.path;
    path = [path stringByDeletingLastPathComponent];
    title = [self getbookid:path];

    path = [path stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"]; //remove /books/ in path
    return path;
    
    NSString * s2=@"/books/";
    NSRange r1 = [url rangeOfString:s2];
    NSRange r2 = [url rangeOfString:@"/OEBPS/"];
    
    if ((r1.location!=NSNotFound) && (r2.location != NSNotFound)) {
        r1.location = r1.location+[s2 length];
        r1.length = r2.location-r1.location;
        path = [url substringWithRange:r1];
    }
    //path = [_mainwin.datadir stringByAppendingPathComponent:path];
    return path;
    
    NSString * s1;
    if (r1.location != NSNotFound) {
        r1.location = r1.location+[s2 length];
        r1.length = [url length]-r1.location;
        s1 = [url substringWithRange:r1];
    }
    
    
    path = [path stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"]; //remove /books/ in path
    path = [path stringByReplacingOccurrencesOfString:@"/OEBPS/" withString:@"/"]; //remove /books/ in path
    NSString * fname = [_mainwin.datadir stringByAppendingPathComponent:path];
    //path = [[fname lastPathComponent] stringByDeletingPathExtension];
    path = [fname stringByDeletingLastPathComponent];
    return path;
}

- (NSString *) getepubid: (NSString *) path
{
    return @"";
}


- (NSString*) getmimetype: (NSString *) ext
{
    NSString * mimetype;
    if ([@".xhtml.html" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"application/xhtml+xml";
    }
    else if ([@".jpge.jpg" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"image/jpeg";
    }
    else if ([@"..png" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"image/png";
    }
    else if ([@".gif" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"image/gif";
    }
    else if ([@".css" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"text/css";
    }
    else if ([@".otf" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"application/vnd.ms-opentype";
    }
    else if([@".ttf" rangeOfString:ext].location != NSNotFound) {
        mimetype = @"application/x-font-ttf";
    }
    
    return mimetype;
}


- (void) CopyMETAINF:(NSString *) path
{
    NSString * s1 = [NSString stringWithFormat:@"%@/META-INF",path];
    [self createfolder:s1];
    NSString * s2 = [NSString stringWithFormat:@"%@/container.xml",s1];
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"container" ofType:@"xml"];
    NSData *conainer = [NSData dataWithContentsOfFile:filePath];
    [conainer writeToFile:s2 atomically:YES];

    filePath = [[NSBundle mainBundle] pathForResource:@"mimetype" ofType:nil];
    conainer = [NSData dataWithContentsOfFile:filePath];
    s2 = [NSString stringWithFormat:@"%@/mimetype",path];
    [conainer writeToFile:s2 atomically:YES];
}

- (NSString *) pageidlist
{
    NSString * s1;
    
    return s1;
    
}


- (void) ContentOPF:(NSString *) path
{
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"content" ofType:@"opf"];
    NSData *data = [NSData dataWithContentsOfFile:filePath];
    NSString *opfstr = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{title}" withString:title];
    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{bookid}" withString:[[[NSUUID UUID] UUIDString] lowercaseString]];
    
    NSString * pageidlist=@"";
    NSString * itemreflist=@"";
    for (int i=0; i<[pagelist count];i++){
        NSDictionary *urldict = [pagelist objectAtIndex:i];
        NSString * fname =  [urldict objectForKey:@"path"];
        fname = [self removelash:fname];
        
        //NSString * url = [urllist objectAtIndex:i];
        
        //fname = [self urltopath:url];
        //fname = [fname lastPathComponent];
        //fname = [self getpagepath:fname] ;
        //NSLog(@"%@",fname);
        NSString * scfi = [[fname lastPathComponent] stringByDeletingPathExtension];
        scfi = [scfi stringByDeletingPathExtension];
        //NSLog(@"%@",scfi);
        pageidlist= [NSString stringWithFormat:@"%@\r\t\t<item href=\"%@\" id=\"%@\" media-type=\"application/xhtml+xml\"/>",pageidlist,fname,scfi];
        itemreflist= [NSString stringWithFormat:@"%@\r\t\t<itemref idref=\"%@\"/>",itemreflist,scfi];
    }
    //NSLog(@"%@",pageidlist);
    //NSLog(@"%@",itemreflist);
    
    //path = [path stringByAppendingPathComponent:@"OEBPS"];
    
    //NSLog(@"%@",path);
    //NSURL *myDirectoryURL = [NSURL fileURLWithPath:path];
    NSDirectoryEnumerator *directoryEnumerator = [[NSFileManager defaultManager] enumeratorAtPath:path ];//    NSDirectoryEnumerator *directoryEnumerator = [[NSFileManager defaultManager] enumeratorAtPath:path includingPropertiesForKeys:[NSArray array] options:0 errorHandler:^BOOL(NSURL *url, NSError *error) {
//        // handle error
//        return NO;
//    }];
    
    NSString *file = nil;
    NSString * filelist=@"";
    int i = 0;
    while ((file = [directoryEnumerator nextObject])) {
        i += 1;
        NSString * fdir = [path stringByAppendingPathComponent:file];
        BOOL isDir;
        [[NSFileManager defaultManager] fileExistsAtPath:fdir isDirectory:&isDir];
        if (isDir || [file hasPrefix:@"."]) { //dir, hidden file -- pas
            continue;
        }
        if ([pageidlist rangeOfString:file].location != NSNotFound) { //same xhtml -- pass
            continue;
        }
        if ([file isEqualToString:@"content.opf"]) { //content.opf -- pass
            continue;
        }
        NSString * scfi = [NSString stringWithFormat:@"file%d",i];
        NSString * ext = [file pathExtension];
        NSString * mimetype = [self getmimetype:ext];
        
        if (!mimetype) {
            continue;
        }

        filelist= [NSString stringWithFormat:@"%@\r\t\t<item href=\"%@\" id=\"%@\" media-type=\"%@\"/>",filelist,file,scfi,mimetype];
        //NSLog(@"%@",file);
        
        //file = [self getpagepath:file];
    }
    //NSLog(@"%@",filelist);
    
    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{pageidlist}" withString:pageidlist];
    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{itemreflist}" withString:itemreflist];

    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{filelist}" withString:filelist];

    data = [opfstr dataUsingEncoding:NSUTF8StringEncoding];
    NSString * s1 = [NSString stringWithFormat:@"%@/content.opf",path];
    [data writeToFile:s1 atomically:YES];

    //NSLog(@"%@",opfstr);
    
}

- (void) TocNcx:(NSString *) path
{
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"toc" ofType:@"ncx"];
    NSData *data = [NSData dataWithContentsOfFile:filePath];
    NSString *opfstr = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

    NSString *demofile = [[NSBundle mainBundle] pathForResource:@"instru" ofType:@"xhtml"];
    NSData *demodata = [NSData dataWithContentsOfFile:demofile];

    NSString * nvpoint=@"";
    for (int i=0; i<[pagelist count];i++){
        NSDictionary *urldict = [pagelist objectAtIndex:i];
        NSString * fname = [urldict objectForKey:@"path"];
        fname = [self removelash:fname];

        //NSString * url = [urllist objectAtIndex:i];
        //NSString * fpath = [self urltopath:url];
        //NSString * fname = [self getpagepath:fpath] ;
        //NSLog(@"%@",fname);
        //NSString * scfi = [[fname lastPathComponent] stringByDeletingPathExtension];
        //scfi = [scfi stringByDeletingPathExtension];
        NSString * scfi = [urldict objectForKey:@"chapterTitle"];
        //if ([titlelist count]>i)
        //    scfi = [titlelist objectAtIndex:i];
        //NSLog(@"%@",scfi);
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t<navPoint id=\"navpoint%d\" playOrder=\"%d\">",nvpoint,i+1,i+1];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t<navLabel>",nvpoint];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t\t<text>%@</text>",nvpoint,scfi];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t</navLabel>",nvpoint];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t<content src=\"%@\"/>",nvpoint,fname];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t</navPoint>",nvpoint];
        
        if (![reg isreg])
        {
            int j = i % 2;
            if (i>2 && j==0) { //copy demo page from 4
            //if (true) { //copy demo page from 4
                NSString * epubdemo = fname ;//[fpath stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"];
                epubdemo = [path stringByAppendingPathComponent:epubdemo];

                //NSString * epubfile = [fpath stringByAppendingPathComponent:@""];

                //NSLog(@"%@",epubfile);
                [demodata writeToFile:epubdemo atomically:YES];
            
            }
        }
    }
    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{navPoint}" withString:nvpoint];

    data = [opfstr dataUsingEncoding:NSUTF8StringEncoding];
    //NSString * s1 = [NSString stringWithFormat:@"%@/OEBPS/toc.ncx",path];
    NSString * s1 = [NSString stringWithFormat:@"%@/toc.ncx",path];
    [data writeToFile:s1 atomically:YES];
}


- (bool) BuildPub:(NSString *) afile
{
//    [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/cover.xlink.xhtml#cfi=/6/2"];
//    [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/ch0001.xlink.xhtml#cfi=/6/4%5B;vnd.vst.idref=ch0001%5D"];
//    [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/ch0005.xlink.xhtml#cfi=/6/6%5B;vnd.vst.idref=ch0005%5D"];
    _mainwin.outputfile = nil;
    
    if ([pagelist count]==0)
        return false;
    
    NSDictionary *urldict = [pagelist objectAtIndex:0];
    title = [self getbookid:[urldict objectForKey:@"absoluteURL"]];
    if ([title length]>100) {
        title = [title substringToIndex:100];
    }
    //NSString *bookid = [self getbookid:path];

    [self buildurllist];
  
    NSString * idpath = [self getepubfolder:[urldict objectForKey:@"absoluteURL"] path:[urldict objectForKey:@"path"]];
    NSString * dir = [_mainwin.datadir stringByAppendingPathComponent:idpath];

    //NSLog(@"%@",dir);
    [self CopyMETAINF:dir];
    [self ContentOPF:dir];
    [self TocNcx:dir];
    return [self zipePub:dir];
    //return true;
}

- (bool) zipePub:(NSString *) path
{
    NSString * fname = [self cleanfilename:title];
    epubfile = [NSString stringWithFormat:@"%@/%@.epub",_mainwin.ebookdir,fname];
    
    //NSLog(@"%@",fname);
    //SSZipArchive *archiver = [[SSZipArchive alloc] init];
    BOOL success = [SSZipArchive createZipFileAtPath:epubfile
                             withContentsOfDirectory:path];
    _mainwin.outputfile = epubfile;
    return success;

}

#pragma mark - build pdf
/// VitalSource Downloader/tmp/43857938579demo/
- (NSString *) getpdftmpfolder: (NSString *) url
{
    NSString * path;
    NSString * s1 = [self urltopath:url];
    ebookid = [self getbookid:s1] ;
    path = [_mainwin.datadir stringByAppendingPathComponent:ebookid];
    //path = [path stringByAppendingPathComponent:@""];
    
    return path;
}

- (bool) Buildpdf:(NSString *) afile
{
//        [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b58312f6a624d4f4747432b504e674f7473614c397473465736735567315635486a446f3d0a/encrypted/1600"];
//        [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b583138496e4237495553664c6c335736426b6e54387236615a6b7662463358596c4b773d0a/encrypted/1600"];
//        [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781446297650DEMO/images/553246736447566b58312b756244794e2f4550664641416137476b486d796e7a4f61734543754f5a4737673d0a/encrypted/1600"];
    
    //title = [titlelist objectAtIndex:0];
    NSString * dir = [self getpdftmpfolder:[urllist objectAtIndex:0]];
    //NSString * dir = [_mainwin.datadir stringByAppendingPathComponent:idpath];
    
    //NSLog(@"%@",dir);
    _mainwin.outputfile = nil;

    PDFDocument *pdf = [[PDFDocument alloc] init];
    //NSImage * img = scaledImage;
    
    for (NSString *url in urllist) {
        
        NSString * path = [self urltopath:url];
        path = [dir stringByAppendingPathComponent:path];
        //NSLog(@"%@", path);
        
        NSFileManager *fileManager = [NSFileManager defaultManager];
        
        if (![fileManager fileExistsAtPath:path])
            continue;
        
        NSImage *img = [[NSImage alloc]initWithContentsOfFile:path];
        
        if (![reg isreg])
            [self drawtext:img];
        
        PDFPage * page;
        
        page = [[PDFPage alloc] init];
        [page initWithImage: (NSImage *) img];
        [pdf insertPage: page atIndex: [pdf pageCount]];
        
        //[page release];
        //[img release];
    }
    NSString * fname = [NSString stringWithFormat:@"%@.pdf",ebookid];
    fname = [_mainwin.ebookdir stringByAppendingPathComponent:fname];
    
   	[pdf writeToFile:  fname];
    _mainwin.outputfile = fname;
    //[pdf release];
    return true;
}

- (void)drawtext: (NSImage *) scaledImage
{
    [scaledImage lockFocus];
    //	NSColor *color = [NSColor redColor];
    // THESE DOESN'T SEEM TO WORK...
    //	[color set];
    //	[color setStroke];
    //	[color setFill];
    NSFont *slFont = [[NSFontManager
                       sharedFontManager]
                      fontWithFamily:@"Courier"
                      traits:NSBoldFontMask
                      weight:35 size:35.0];
    NSDictionary *attr = [NSDictionary dictionaryWithObjectsAndKeys:
                          slFont, NSFontAttributeName,
                          [NSColor redColor], NSForegroundColorAttributeName,
                          nil ];
    
    int y = [scaledImage size].height/2;
    NSString *string = [NSString stringWithFormat:@"%@ demo version\n%@", c_product,c_home];
    [string drawAtPoint:NSMakePoint(10,y) withAttributes:attr];
    //[attr release];
    [scaledImage unlockFocus];
}


#pragma mark - tools

// /books/9781506301587DEMO/epub/OEBPS/cover.xlink.xhtml ==> /OEBPS/cover.xlink.xhtml
//NSArray* comps = [path pathComponents];
- (NSString*) getpagepath: (NSString *) url
{
    NSString * s1=@"" ;
    NSString * s2=@"/epub/OEBPS/";
    NSRange r1 = [url rangeOfString:s2];
    if (r1.location != NSNotFound) {
        r1.location = r1.location+[s2 length];
        r1.length = [url length]-r1.location;
        s1 = [url substringWithRange:r1];
    }
    return s1;
}

- (NSString*) urltopath: (NSString *) url
{
    url = [url stringByReplacingOccurrencesOfString:@"html#" withString:@"html?"];
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * fname = urlComponents.path;
    
    return fname;
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

- (NSString *) cleanfilename: (NSString *) str
{
    NSString * fname = [str stringByReplacingOccurrencesOfString:@":" withString:@""];
//    fname = [fname stringByReplacingOccurrencesOfString:@"[" withString:@""];
//    fname = [fname stringByReplacingOccurrencesOfString:@"]" withString:@""];
//    fname = [fname stringByReplacingOccurrencesOfString:@"?" withString:@""];
//    fname = [fname stringByReplacingOccurrencesOfString:@"," withString:@""];
    NSCharacterSet* illegalFileNameCharacters = [NSCharacterSet characterSetWithCharactersInString:@"/\\?%*|:,[]\"<>"];
    fname  = [[str componentsSeparatedByCharactersInSet:illegalFileNameCharacters] componentsJoinedByString:@""];

    return fname;
}

- (NSString *) removelash: (NSString *) str
{
    NSString * ss = str;
    unichar first = [str characterAtIndex:0];
    if (first == '/') {
        ss = [str substringFromIndex:1];
        // The first character is a letter from A-Z or a-z
    }
    return ss;
}

- (NSArray *) strsplit: (NSString *) str
{
    NSString * astr;
    NSArray * list = [astr componentsSeparatedByString:@"="];
    return list;
}

- (NSString *) urlremovequery: (NSString *) url
{
    NSString * astr;
    NSArray * list = [url componentsSeparatedByString:@"?"];
    return list[0];
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

//   /api/v0/books/9781506301587DEMO/pages
- (NSString *) getbookid: (NSString *) path
{
    NSArray * list = [path componentsSeparatedByString:@"/"];
    
    for (int i=0; i<[list count]; i++) {
        NSString * s1 = [list objectAtIndex:i];
        if ([s1 isEqualToString:@"books"] && [list count]>i)
            return [list objectAtIndex:i+1];
        
    }
    //   /api/v0/books/9781506301587DEMO/pages
    //NSString * astr;
    //NSArray * list = [astr componentsSeparatedByString:@"="];
    return nil;
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
