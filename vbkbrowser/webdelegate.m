//
//  webdelegate.m
//  vbkbrowser
//
//  Created by aa on 2017-05-15.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import "webdelegate.h"
#import "mainWin.h"
#import "ZipArchive.h"

@implementation WebDelegate

@synthesize tick;
@synthesize ticked;
@synthesize title;

- (id)init
{
    self = [super init];
    if (self) {
        //aboutcontroller = [[AboutController alloc] initWithWindowNibName:@"AboutController"];
        urllist = [[NSMutableArray alloc] init];
        pagelist = [[NSMutableArray alloc] init];
        timer = [NSTimer scheduledTimerWithTimeInterval:1 target:self selector:@selector(timerFired:) userInfo:nil repeats:YES];
        title = @"test epub";
        //_mainwin = self;
    }
    
    return self;
}

- (void)timerFired:(NSTimer*)theTimer
{
    tick += 1;
    if (tick>6) {
        if (_mainwin.working) {
            //NSLog(@"tick %d",tick);
        }
        ticked = true;
        tick = 0;
    }
}

#pragma mark - delegate

- (void) clearurllist
{
    [urllist removeAllObjects];
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
    NSString *url = [identifier absoluteString];
    //int d = [self PosRight:url substr:@"pages"];
    tick = 0;
    ticked = false;
    bool isbook = false;
    //NSLog(@"didFinishDataSource %d %@ ",tick,url);
//    if ([self PosRight:url substr:@"pages"]==1) {
//        [_mainwin log:url];
//        //NSLog(@"didFinishDataSource %d %@ ",tick,url);
//        isbook = true;
//    }

    if ([url rangeOfString:@"/epub/OEBPS/"].location != NSNotFound) {
        isbook = true;
    }
    
    if (isbook) {
        NSDictionary *dict = [NSDictionary dictionaryWithObjectsAndKeys: identifier, @"url", dataSource, @"dataSource", nil];
        [self performSelector: @selector(reallyDidFinishLoading:) withObject: dict afterDelay: 0.1];
    }
}

- (void) reallyDidFinishLoading: (NSDictionary *)dict
{
    NSURL *url = [dict objectForKey: @"url"];
    NSString * s1 = [url absoluteString];
    WebDataSource *dataSource = [dict objectForKey: @"dataSource"];
    
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

    WebResource *wd = [dataSource subresourceForURL:url] ;//] [NSURL URLWithString:identifier]];
    NSData *data = [wd data];
    if (data == nil) {
        data = [dataSource data];
    }
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
    //NSLog(@"OEBPS %@",url);
    
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * path = urlComponents.path;
    
    if (_mainwin.working && [path rangeOfString:@"xhtm"].location != NSNotFound) {
        NSLog(@"%@",url);
        [urllist addObject:url];
    }

    path = [path stringByReplacingOccurrencesOfString:@"/books/" withString:@"/"]; //remove /books/ in path
    NSString * fname = [_mainwin.datadir stringByAppendingPathComponent:path];
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

- (NSString *) getepubfolder: (NSString *) url
{
    NSURLComponents *urlComponents = [NSURLComponents componentsWithString:url];
    NSString * path = urlComponents.path;

    NSString * s2=@"/books/";
    NSRange r1 = [url rangeOfString:s2];
    NSRange r2 = [url rangeOfString:@"/OEBPS/"];
    
    if ((r1.location!=NSNotFound)||(r2.location != NSNotFound)) {
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
    
    if (_mainwin.working && [path rangeOfString:@"xhtm"].location != NSNotFound) {
        NSLog(@"%@",url);
        [urllist addObject:url];
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
    for (int i=0; i<[urllist count];i++){
        NSString * url = [urllist objectAtIndex:i];
        
        NSString * fname = [self urltopath:url];
        //fname = [fname lastPathComponent];
        fname = [self getpagepath:fname] ;
        //NSLog(@"%@",fname);
        NSString * scfi = [[fname lastPathComponent] stringByDeletingPathExtension];
        scfi = [scfi stringByDeletingPathExtension];
        //NSLog(@"%@",scfi);
        pageidlist= [NSString stringWithFormat:@"%@\r\t\t<item href=\"%@\" id=\"%@\" media-type=\"application/xhtml+xml\"/>",pageidlist,fname,scfi];
        itemreflist= [NSString stringWithFormat:@"%@\r\t\t<itemref idref=\"%@\"/>",itemreflist,scfi];
    }
    //NSLog(@"%@",pageidlist);
    //NSLog(@"%@",itemreflist);
    path = [path stringByAppendingPathComponent:@"OEBPS"];
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

    NSString * nvpoint=@"";
    for (int i=0; i<[urllist count];i++){
        NSString * url = [urllist objectAtIndex:i];
        NSString * fname = [self urltopath:url];
        fname = [self getpagepath:fname] ;
        //NSLog(@"%@",fname);
        NSString * scfi = [[fname lastPathComponent] stringByDeletingPathExtension];
        scfi = [scfi stringByDeletingPathExtension];
        //NSLog(@"%@",scfi);
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t<navPoint id=\"navpoint%d\" playOrder=\"%d\">",nvpoint,i+1,i+1];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t<navLabel>",nvpoint];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t\t<text>%@</text>",nvpoint,scfi];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t</navLabel>",nvpoint];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t<content src=\"%@\"/>",nvpoint,fname];
        nvpoint= [NSString stringWithFormat:@"%@\r\t\t</navPoint>",nvpoint];
    }
    opfstr = [opfstr stringByReplacingOccurrencesOfString:@"{navPoint}" withString:nvpoint];

    data = [opfstr dataUsingEncoding:NSUTF8StringEncoding];
    NSString * s1 = [NSString stringWithFormat:@"%@/OEBPS/toc.ncx",path];
    [data writeToFile:s1 atomically:YES];
}


- (void) BuildPub:(NSString *) afile
{
    [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/cover.xlink.xhtml#cfi=/6/2"];
    [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/ch0001.xlink.xhtml#cfi=/6/4%5B;vnd.vst.idref=ch0001%5D"];
    [urllist addObject:@"https://jigsaw.vitalsource.com/books/9781506301587DEMO/epub/OEBPS/ch0005.xlink.xhtml#cfi=/6/6%5B;vnd.vst.idref=ch0005%5D"];
    NSString * idpath = [self getepubfolder:[urllist objectAtIndex:0]];
    NSString * dir = [_mainwin.datadir stringByAppendingPathComponent:idpath];

    NSLog(@"%@",dir);
    //[self CopyMETAINF:dir];
    //[self ContentOPF:dir];
    //[self TocNcx:dir];
    [self zipePub:dir];
}

- (void) zipePub:(NSString *) path
{
    NSString * fname = [NSString stringWithFormat:@"%@/%@.epub",_mainwin.ebookdir,title];
    NSLog(@"%@",fname);
    //SSZipArchive *archiver = [[SSZipArchive alloc] init];
    BOOL success = [SSZipArchive createZipFileAtPath:fname
                             withContentsOfDirectory:path];

}

#pragma mark - tools

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
