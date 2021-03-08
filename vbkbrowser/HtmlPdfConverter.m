//
//  HtmlPdfConverter.m
//  html2pdf
//
//  Created by Nat Budin on 4/5/11.
//

#import "HtmlPdfConverter.h"
#import "BuyController.h"
#include <stdio.h>
#import "mainWin.h"

#define EPUB_CONTAINER @"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
<container version=\"1.0\" xmlns=\"urn:oasis:names:tc:opendocument:xmlns:container\">\n\
  <rootfiles>\n\
    <rootfile full-path=\"OEBPS/content.opf\" media-type=\"application/oebps-package+xml\"/>\n\
  </rootfiles>\n\
</container>"

#define EPUB_MIMETYPE @"application/epub+zip"

#define XML_TAG @"<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"no\"?>\n\
<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\"  \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">\n"
//<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>

NSDictionary *presets;

@interface HtmlPdfConverter() <WebFrameLoadDelegate>
{
    NSString * unzipfolder;
    NSString * epubname;
    NSString *coverfile;
    NSString *htmldir;
    dispatch_semaphore_t sem ;
    
}
@end

@implementation HtmlPdfConverter

@synthesize msg;

//-(id)initWithWebView:(WebView *)wv fileDests:(NSDictionary *)fileDests paperSize:(PaperSize *)ps
-(id)initWithData;
{
    //webview = wv;
      presets = @{@"letter" : @{@"width": @612, @"height": @796, @"margin": @36},
                  @"4x6" : @{@"width": @432, @"height": @288, @"margin": @18},
                  @"3x5" : @{@"width": @360, @"height": @216, @"margin": @18},
                  @"a4"  : @{@"width": @595, @"height": @842, @"margin": @36},
                  @"a5"  : @{@"width": @420, @"height": @595, @"margin": @18},
                  @"a6"  : @{@"width": @298, @"height": @420, @"margin": @18},
                  @"a7"  : @{@"width": @210, @"height": @298, @"margin": @18}
    };
    
    NSRect rect = NSMakeRect(0, 0, 400, 400);
    
    webview = [[WebView alloc] initWithFrame:rect];
    WebPreferences *webprefs = [[WebPreferences alloc] init];
    
    [webprefs setShouldPrintBackgrounds:FALSE];// TRUE];
    [webview setPreferences:webprefs];
    [webview setFrameLoadDelegate:self];
    
    orientation = NSPortraitOrientation;
    
    [self setPapersize:@"letter"];
    bwait = false;
    //paperSize = ps;
    
    htmllist=[[NSMutableArray alloc] init];
    coverfile = nil;
	
    
	return self;
}

-(void)dealloc {
    //[currentWorkItem release];
    todoList=nil;
    webprefs=nil;
    webview=nil;
    htmllist=nil;
    //[todoList release];
    //[webprefs release];
    //[webview release];
    //[super dealloc];
}

-(BOOL)isValidPresetName:(NSString *)name {
    return ([presets objectForKey:name] != nil);
}

-(void)setPapersize:(NSString *)name
{
    NSDictionary *presetParams = [presets objectForKey:name];
    if (presetParams != nil) {
        width = [[presetParams objectForKey:@"width"] intValue] ;
        height = [[presetParams objectForKey:@"height"] intValue];
        margin = [[presetParams objectForKey:@"margin"] intValue];
        
        //size = [[PaperSize alloc] initWithWidth:[width intValue] height:[height intValue] margin:[margin intValue] orientation:orientation];
    }
    
}

-(void)setOrient:(NSString *)orientationString
{
    if ([orientationString isEqualToString:@"portrait"])
        orientation = NSPortraitOrientation;
    else if ([orientationString isEqualToString:@"landscape"])
        orientation = NSLandscapeOrientation;
}

-(void)startNextItem {
//	currentWorkItem = [todoList objectAtIndex:0];
//	[todoList removeObjectAtIndex:0];
//    outputpdf = [currentWorkItem pdfFile];
//    [outputpdf retain];
//	printf("Generating %s from %s\n", [[currentWorkItem pdfFile] UTF8String], [[currentWorkItem htmlFile] UTF8String]);
//
//	NSURL *url = [[NSURL alloc] initFileURLWithPath:[currentWorkItem htmlFile]];
//	NSURLRequest *request = [[NSURLRequest alloc] initWithURL:url];
//
//	[[webview mainFrame] loadRequest:request];
//
//	[request release];
//	[url release];
}

//https://stackoverflow.com/questions/149646/best-way-to-make-nsrunloop-wait-for-a-flag-to-be-set
-(void)wait
{
    while (bwait)
    {
        [[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:0.3]];
        //[[NSRunLoop mainRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];
        //[[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:0.5]];
        //NSRunLoop *theRL = [NSRunLoop currentRunLoop];
        //[theRL runMode:NSRunLoopCommonModes beforeDate:[NSDate dateWithTimeIntervalSinceNow:0.2]];
        // Execute code on DefaultRunLoop
//        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode                                  beforeDate:[NSDate distantFuture]];
    }
}

//https://blog.wilcoxd.com/2012/10/28/modern-cocoa-concurrency-asynchronous-processing-patterns/
-(void)printhtml3:(NSString *)fhtml toPDF:(NSString *)destFile
{
    outputpdf = destFile;
    if (outputpdf==nil){
        NSString * ext = [fhtml pathExtension];
        outputpdf = [fhtml stringByReplacingOccurrencesOfString:ext withString:@"pdf"];
    }
    //printf("Generating %s from %s\n", [fhtml UTF8String], [outputpdf UTF8String]);
    //NSLog(@"print html %@",fhtml);

    NSURL *url = [[NSURL alloc] initFileURLWithPath:fhtml];
    NSURLRequest *request = [[NSURLRequest alloc] initWithURL:url];
    
    
    sem = nil;
    sem = dispatch_semaphore_create(0);
    [[webview mainFrame] loadRequest:request];
    dispatch_semaphore_wait(sem, DISPATCH_TIME_FOREVER);
    request=nil;
    url=nil;
    NSLog(@"done %@",fhtml);
}

-(int)printhtml:(NSString *)fhtml toPDF:(NSString *)destFile
{
    msg = @"";
    outputpdf = destFile;
    if (outputpdf==nil){
        NSString * ext = [fhtml pathExtension];
        outputpdf = [fhtml stringByReplacingOccurrencesOfString:ext withString:@"pdf"];
        //NSString * ffname = [fhtml lastPathComponent];
        //NSString * path = [fhtml stringByDeletingLastPathComponent];
        //outputpdf =  [NSString stringWithFormat:@"%@%@.pdf",path,ffname];
    }
    
    //[outputpdf retain];
    //printf("Generating %s from %s\n", [fhtml UTF8String], [outputpdf UTF8String]);
    //NSLog(@"print html %@",fhtml);
    NSURL *url = [[NSURL alloc] initFileURLWithPath:fhtml];
    
    //fhtml = [self percentEscapeString:fhtml];
    //fhtml = [NSString stringWithFormat:@"file://%@",fhtml];
    
    //NSURL* url = [NSURL fileURLWithPath:fhtml];
    [self log:@"printhtml html %@ \rpdf %@",fhtml,outputpdf];
    //NSLog(@"printhtml html %@ \rpdf %@",fhtml,outputpdf);
    NSURLRequest *request = [[NSURLRequest alloc] initWithURL:url];
    //NSURLRequest* request = [NSURLRequest requestWithURL:url];
    
    
    //[request release];
    //[url release];
//    [[webview mainFrame ] stopLoading];
//    [NSThread sleepForTimeInterval:0.1f];
    bwait = true;
    [[webview mainFrame] loadRequest:request];
    //[[webview mainFrame] loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:fhtml]]];
    [self log:@"mainfame loadRequest"];
    [NSThread sleepForTimeInterval:0.2f];
    [self wait];
    //request=nil;
    //url=nil;
    [[webview mainFrame ] stopLoading];
    [self log:@"print done"];
    return 2;
    //NSLog(@"done %@",fhtml);
}

- (NSString *)percentEscapeString:(NSString *)string
{
    return CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,
               (CFStringRef)string, NULL, (CFStringRef)@":?@!$&'()*+,;= ", kCFStringEncodingUTF8));
}

-(void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame {
	if (frame == [sender mainFrame]) {
		//[self printFrame:frame toFile:[currentWorkItem pdfFile]];
        [self log:@"webview didFinishLoadForFrame"];

        [self printFrame:frame toFile:outputpdf];

		if ([todoList count] > 0) {
			[self startNextItem];
		} else {
			//[[NSApplication sharedApplication] terminate:self];
		}
        //NSLog(@"loadfinish %@",outputpdf);
        bwait = false;
        [self log:@"webview didFinishLoadForFrame bwait=false"];
	}
}

-(void)webView:(WebView *)sender didFailLoadWithError:(NSError *)error forFrame:(WebFrame *)frame {
    bwait = false;
	printf("%s\n", [[error localizedDescription] UTF8String]);
	//[[NSApplication sharedApplication] terminate:self];
}


-(void)webView:(WebView *)sender didFailProvisionalLoadWithError:(NSError *)error forFrame:(WebFrame *)frame {
    bwait = false;
	printf("%s\n", [[error localizedDescription] UTF8String]);
	//[[NSApplication sharedApplication] terminate:self];
}

-(void)setupPrintInfo:(NSPrintInfo*)printInfo {
    [printInfo setBottomMargin:margin];
    [printInfo setTopMargin:margin];
    [printInfo setLeftMargin:margin];
    [printInfo setRightMargin:margin];
    [printInfo setPaperSize:NSMakeSize(width, height)];
    [printInfo setOrientation:orientation];
}

-(void)printFrame:(WebFrame *)frame toFile:(NSString *)destFile {
    //NSLog(@"printFrame");
	WebFrameView *frameView = [frame frameView];
	NSPrintInfo *sharedInfo = [NSPrintInfo sharedPrintInfo];
	NSMutableDictionary *printInfoDict = [NSMutableDictionary dictionaryWithDictionary:[sharedInfo dictionary]];
	[printInfoDict setObject:NSPrintSaveJob forKey:NSPrintJobDisposition];
	[printInfoDict setObject:destFile forKey:NSPrintSavePath];
    [self log:@"printFrame pdf %@",destFile];

    NSPrintInfo *printInfo = [[NSPrintInfo alloc] initWithDictionary:printInfoDict];
	[printInfo setHorizontalPagination:NSAutoPagination];
	[printInfo setVerticalPagination:NSAutoPagination];
	[printInfo setVerticallyCentered:FALSE];
	//[paperSize setupPrintInfo:printInfo];
    [self setupPrintInfo:printInfo];
	
    [self log:@"setupPrintInfo"];
    
	NSPrintOperation *printOp = [frameView printOperationWithPrintInfo:printInfo];
	[printOp setShowsPrintPanel:FALSE];
	[printOp setShowsProgressPanel:FALSE];
	[printOp runOperation];
	
	//[printInfo release];
    printInfo=nil;
}



- (int)mobi2pdf:(NSString*) azwfile outputpdf:(NSString*)apdf
{
    msg = @"";
    NSString *slog= msg;
    NSMutableArray * pdflist=[[NSMutableArray alloc] init];
    
    // ??? [self folderlist:unzipfolder filelist:htmllist];
    for (int i=0; i<[htmllist count]; i++) {
        NSString* file = [htmllist objectAtIndex:i];
        NSString* ext = [NSString stringWithFormat:@".%@",[file pathExtension]];
        NSString* pdf = [file stringByReplacingOccurrencesOfString:ext withString:@".pdf"];
        [self log:@"html %@",file];
        [self printhtml:file toPDF:pdf];
        //if ([self fileexist:pdf ]) { check later
            [pdflist addObject:pdf];
        //}
        NSLog(@"file %@",file);
        slog = [slog stringByAppendingFormat:@"\n%@",msg];
    }
    msg = slog;
    [self log:@"html to pdf %d",[htmllist count]];
    //NSLog(@"%@",pdflist);
    //join pdf page
    [self joinPDF:pdflist pdfPathOutput:apdf];
#ifndef DEBUG
    [[NSFileManager defaultManager] removeItemAtPath:htmldir error:nil];
#endif
    NSLog(@"mobi2pdf end.");
    return 2;
}




#pragma mark - epub to pdf

- (void)joinPDF:(NSArray *)listOfPath pdfPathOutput:(NSString *) pdfPathOutput

{
    
//    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);

    CFURLRef pdfURLOutput = (__bridge CFURLRef)[NSURL fileURLWithPath:pdfPathOutput];
    NSInteger numberOfPages = 0;
    int totalPages = 0;
    // Create the output context
    CGContextRef writeContext = CGPDFContextCreateWithURL(pdfURLOutput, NULL, NULL);

    if (coverfile!=nil) {
        CGRect mediaBox = CGRectMake(0,0,612,792);
        NSImage *image = [[NSImage alloc]initWithContentsOfFile:coverfile];
//        NSData* data = image.TIFFRepresentation;
//        NSBitmapImageRep* bitmap = [NSBitmapImageRep imageRepWithData:data];
//        CGRect imageRect = CGRectMake(0, 0, bitmap.pixelsWide , bitmap.pixelsHigh);
//        NSLog(@"conver size %d %d",bitmap.pixelsWide , bitmap.pixelsHigh);
//
//        bitmap = nil;

        CGImageSourceRef source =CGImageSourceCreateWithData((CFDataRef)[image TIFFRepresentation], NULL);
        CGImageRef maskRef =  CGImageSourceCreateImageAtIndex(source, 0, NULL);
        
        CGContextBeginPage(writeContext, &mediaBox);
        CGContextDrawImage(writeContext, mediaBox, maskRef);
//        CGContextDrawImage(writeContext, imageRect, maskRef);
        CGContextEndPage(writeContext);

    }
    
    int i =0;
    
    for (NSString *htmlpdf in listOfPath) {

        //NSString *htmlpdf = [htmlfile stringByReplacingOccurrencesOfString:@".html" withString:@".pdf"];
        if(![self fileexist:htmlpdf]){
            [self log:@"page pdf not found %@",htmlpdf];
            continue;
        }
        //[self log:@"add pdf %@",htmlpdf];

        CFURLRef pdfURL =  CFURLCreateFromFileSystemRepresentation(NULL, [htmlpdf UTF8String],[htmlpdf length], NO);
        
        //file ref
        CGPDFDocumentRef pdfRef = CGPDFDocumentCreateWithURL(pdfURL);
        numberOfPages = CGPDFDocumentGetNumberOfPages(pdfRef);
        
        //[_mainwin log:@"add pdf page %d total %d",numberOfPages,totalPages];
        // Loop variables
        CGPDFPageRef page;
        CGRect mediaBox;
        
        // Read the first PDF and generate the output pages
        //DLog(@"GENERATING PAGES FROM PDF 1 (%@)...", source);
        for (int i=1; i<=numberOfPages; i++) {
            page = CGPDFDocumentGetPage(pdfRef, i);
            mediaBox = CGPDFPageGetBoxRect(page, kCGPDFMediaBox);
            CGContextBeginPage(writeContext, &mediaBox);
            CGContextDrawPDFPage(writeContext, page);
            
            if (![reg isreg]) { //watermarks
                //CGContextSelectFont(writeContext, "Helvetic", 30, kCGEncodingMacRoman);
                CGContextSelectFont(writeContext, "Arial", 36, kCGEncodingMacRoman);
                CGContextSetTextDrawingMode(writeContext, kCGTextFill);
                CGContextSetRGBFillColor(writeContext, 256, 0, 0, 1);
                const char *text="Demo version eBook Converter";
                CGContextShowTextAtPoint(writeContext, 30, 550, text, strlen(text));
                const char *text2="www.ebook-converter.com";
                CGContextShowTextAtPoint(writeContext, 30, 500, text2, strlen(text2));
            }

            CGContextEndPage(writeContext);
        }
        totalPages += numberOfPages;
        i+=1;
        CGPDFDocumentRelease(pdfRef);
        CFRelease(pdfURL);
    }
    [self log:@"join pdf total page %d",totalPages];
    // CFRelease(pdfURLOutput);
    //
    //    // Finalize the output file
    CGPDFContextClose(writeContext);
    CGContextRelease(writeContext);
}



- (NSString *)folderlist:(NSString*) afolder filelist:(NSMutableArray*)htmllist
{
        //NSString * afolder = htmlfolder;
        NSDirectoryEnumerator *directoryEnumerator = [[NSFileManager defaultManager] enumeratorAtPath:afolder ];//    NSDirectoryEnumerator *directoryEnumerator = ;
        NSString *file = nil;
        NSString * filelist=@"";
        int i = 0;
        while ((file = [directoryEnumerator nextObject])) {
            i += 1;
            NSString * fdir = [afolder stringByAppendingPathComponent:file];
            BOOL isDir;
            [[NSFileManager defaultManager] fileExistsAtPath:fdir isDirectory:&isDir];
            if (isDir) { //dir, hidden file -- pas
                [self folderlist:fdir filelist:htmllist];
                continue;
            }
            if ([file hasPrefix:@"."]) { //dir, hidden file -- pas
                continue;
            }
            NSString * ext = [file pathExtension];
            if ([@"htmlxhtml" rangeOfString:ext].location != NSNotFound) { //same xhtml -- pass
                if([htmllist indexOfObject:fdir]==NSNotFound)
                    [htmllist addObject:fdir];
            }
        }
    
    return filelist;
}


- (NSString *)pathForTemporaryFileWithPrefix:(NSString *)prefix
{
    NSString *  result;
    CFUUIDRef   uuid;
    CFStringRef uuidStr;

    uuid = CFUUIDCreate(NULL);
    assert(uuid != NULL);

    uuidStr = CFUUIDCreateString(NULL, uuid);
    assert(uuidStr != NULL);

//    result = [NSTemporaryDirectory() stringByAppendingPathComponent:[NSString stringWithFormat:@"%@-%@", prefix, uuidStr]];
    result = [_mainwin.datadir stringByAppendingPathComponent:[NSString stringWithFormat:@"%@-%@", prefix, uuidStr]];
    assert(result != nil);

    CFRelease(uuidStr);
    CFRelease(uuid);

    return result;
}

- (BOOL)fileexist: (NSString *)afile
{
    NSFileManager *fileManager = [NSFileManager defaultManager];
    if (afile) {
        return [fileManager fileExistsAtPath: afile];
    }
    return false;
}

- (void) log:(NSString *)formatString, ...
{
    va_list args;
    va_start(args, formatString);
    NSString * str = [[NSString alloc] initWithFormat:formatString arguments:args];
    va_end(args);
    msg = [msg stringByAppendingFormat:@"\n%@",str];
    //[_mainwin log:str];
    //NSLog(str);

}
@end
