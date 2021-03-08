//
//  HtmlPdfConverter.h
//  html2pdf
//
//  Created by Nat Budin on 4/5/11.
//

#import <Cocoa/Cocoa.h>
#import <AppKit/AppKit.h>
#import <WebKit/WebKit.h>

//#include "PaperSize.h"
//#include "FileToConvert.h"

@interface HtmlPdfConverter : NSObject  {
	//PaperSize *paperSize;
	//FileToConvert *currentWorkItem;
    CGFloat margin;
    CGFloat width;
    CGFloat height;
	NSMutableArray *todoList;
	WebView *webview;
    WebPreferences *webprefs;
    NSPrintingOrientation orientation;
    NSString *outputpdf;
    NSString * msg;
    BOOL bwait;
    
    NSMutableArray * htmllist;
}

@property (nonatomic,copy) NSString *msg;

//-(id)initWithWebView:(WebView *)wv fileDests:(NSDictionary *)fileDests paperSize:(PaperSize *)ps;
-(id)initWithData;

-(void)startNextItem;
-(void)printFrame:(WebFrame *)frame toFile:(NSString *)destFile;

-(void)webView:(WebView *)sender didFinishLoadForFrame:(WebFrame *)frame;
-(void)webView:(WebView *)sender didFailProvisionalLoadWithError:(NSError *)error forFrame:(WebFrame *)frame;
-(void)webView:(WebView *)sender didFailLoadWithError:(NSError *)error forFrame:(WebFrame *)frame;
-(void)setPapersize:(NSString *)name;
-(void)setOrient:(NSString *)orientationString;
-(int)printhtml:(NSString *)fhtml toPDF:(NSString *)destFile;
-(int)epub2pdf:(NSString*)aepub outputpdf:(NSString*)apdf;

@end
