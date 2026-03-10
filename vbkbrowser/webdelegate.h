//
//  webdelegate.h
//  vbkbrowser
//
//  Created by aa on 2017-05-15.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "WebKit/WebKit.h"

@interface WebDelegate : NSObject <WebResourceLoadDelegate>
{
    NSMutableArray * urllist;
    NSMutableArray * titlelist;
    NSMutableArray * cfilist;
    NSTimer *timer;
    int tick;
    
    NSString *idurl;
    int ebooktype;
    NSString * title;
    NSString * ebookid;
    NSString * host;
    NSString * epubfile;
    NSString * mp3file;
    NSArray * pagelist;
    NSString * booktmp;
    int curindex;
    int downnum;

}

- (void) saveepubfile: (NSString *)url data:(NSData *)data;
- (void) clearurllist;
- (void) saveurl: (NSString *)url;
- (void) savedownloadurl: (NSString *)url;
- (void) checkbookid: (NSString *)url;
- (NSString*) urltopath: (NSString *) url;
- (void) savetitle: (NSString *)atitle;
- (NSString *) nextpage: (int)page;
- (BOOL) findMissing;
- (bool) BuildPub:(NSString *) afile;
- (void)joinPDF;
- (BOOL) createfolder: (NSString*) folder;
- (NSString *) cleanfilename: (NSString *) str;
- (void) setWorking:(BOOL)aworking;
- (BOOL) saveurllist:(BOOL)b;
- (NSString *) getbookid: (NSString *) path;
- (void) findbook:(NSDictionary *)dict;
- (BOOL)fileexist: (NSString *)afile;
- (NSString *) pagefilename:(int) i;
- (NSString *) pageurl:(int) i;
- (int) indexofcfi:(NSString *)cfi;
- (NSString *) cleancfi: (NSString *) url;
- (NSString*) urltodomain: (NSString *) url;



@property (nonatomic, assign) int tick;
@property (nonatomic, assign) int ebooktype;
@property (nonatomic, assign) int curindex;
@property (nonatomic, assign) BOOL ticked;
@property (nonatomic, retain) NSString* title;
@property (nonatomic, retain) NSString* ebookid;
@property (nonatomic, retain) NSString* epubfile;
@property (nonatomic, retain) NSString* mp3file;
@property (nonatomic, retain) NSString* host;
@property (nonatomic, retain) NSString* booktmp;
@property (nonatomic, retain) NSArray* pagelist;
@property (nonatomic, retain) NSMutableArray* urllist;
@end
