//
//  BuyController.m
//  Server Commander
//
//  Created by aa on 2/26/13.
//  Copyright (c) 2013 flyos. All rights reserved.
//

#import "BuyController.h"
#import <CommonCrypto/CommonDigest.h>
#import "const.h"
#import "RegController.h"
//#import "AppDelegate.h"
#import "mainWin.h"

#define r_times @"times"
#define r_ver @"version"

@interface BuyController ()

@end

RegController * regcontroller;

@implementation BuyController

@synthesize times; 

- (id)initWithWindow:(NSWindow *)window
{
    self = [super initWithWindow:window];
    if (self) {
        // Initialization code here.
        regcontroller = [[RegController alloc] initWithWindowNibName:@"RegController"];

    }
    
    return self;
}

//- (void)dealloc
//{
//    //[regcontroller dealloc];
//    //[super dealloc];
//}

- (void)windowDidLoad
{
    [super windowDidLoad];
    
    // Implement this method to handle any initialization after your window controller's window has been loaded from its nib file.
}

- (void)awakeFromNib
{
    NSBundle * bundle = [NSBundle bundleForClass:[self class]];
    NSString * exec_name = [[bundle infoDictionary] objectForKey:@"CFBundleName"];
    [title setStringValue:exec_name];
    [title setNeedsDisplay:YES];
    
    NSString * s2 = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIconFile"];
    NSImage *img = [NSImage imageNamed:s2];
    [iconimg setImage:img];
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

- (void) checkkey
{
    _isreg=false;
    [self getkey2];

    NSString * ssn = regcontroller.ssn;//  regcontroller.ssn;
    NSString * skey = regcontroller.skey;
    
    if (ssn) {
        NSString * s1 =  [[skey stringByAppendingString:c_seed] copy];
        NSString * smd5 = [self MD5:s1];
        smd5 = [smd5 substringWithRange:NSMakeRange(0,16)];
        _isreg =  [ssn isEqualToString:smd5];
        
    }
    
    times = 0;// [self loadtimes];

    if (!_isreg)
    {
        [self checkver];
        times = [self loadtimes];
        [self openbuywindow:self];
    }
}

- (void) getkey2
{
    NSString* str =[regcontroller loadkeyfile];
    //NSLog(@"%@",str);
    if (str.length<10) return;
    [regcontroller validsn2:str];
    
    return;
    if (!_isreg)
    {
        [self checkver];
        times = [self loadtimes];
        [self openbuywindow:self];
    }
}

- (void) checkbuy:(id)sender
{
    if (!_isreg)
    {
        [self openbuywindow:self];
    }
}



- (BOOL) isreg
{
	return _isreg;
}

- (IBAction)closewindow:(id)sender
{
   	[[self window] close];
    [NSApp stopModal];
}

- (void)openbuywindow:(id)sender
{
    NSWindow *win = [self window];// [self window];

   
    //	[self closewintomain:nil];
	NSString * s ;
	s = @"You can try download Vitalsource ebook in demo version, it has limitation that not all pages show.\n\n"
    "if you would like to get the full version, please click 'Buy now' button.";

#ifdef PAGE1
	//s = @"You can decrypt %d ebooks in demo version, %d left.\n\n"
    //"if you would like to get the full version, please click 'Buy now' button.";
#endif
//    int nday =  c_times-times;
//    if (nday<0) {
//        nday = 0;
//    }
    
	NSString *s1 = [NSString stringWithFormat:s];
	
	[timeslabel setStringValue:s1];
    
	[NSApp runModalForWindow:win];
	[win orderOut:self];
}

- (IBAction)buynowurl:(id)sender
{
	[[NSWorkspace sharedWorkspace] openURL: [NSURL URLWithString:c_order]];
}

- (IBAction)inputsn:(id)sender
{
    [self closewindow:NULL];
#ifdef DEBUG
    [self savetimes];
#endif
    [regcontroller opensnwindow:self];
    
}

- (IBAction)gohome:(id)sender
{
	[[NSWorkspace sharedWorkspace] openURL: [NSURL URLWithString:c_home]];
}


- (void) savetimes:(int)n
{
	//if (![regobj isreg]) return;
    times = n;
    NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
	[prefs setObject:[NSNumber numberWithInt:times] forKey:[self GetTimesKey]];
	[prefs synchronize];
}

- (void) savetimes
{
#ifdef NDEBUG
    //	times = 0;
#endif
	
	if (_isreg) return;
    //times = times+1;
    NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
	[prefs setObject:[NSNumber numberWithInt:times] forKey:[self GetTimesKey]];
	[prefs synchronize];
}

- (int) loadtimes
{
	NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
    NSString * key = [self GetTimesKey]; //[self GetTimesKey];
    int n =  [[prefs objectForKey:key] intValue];
    
    return n;
}

- (void) savedays
{
	NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
#ifdef DEBUG
    NSString * key = [self GetTimesKey];
    NSDate * d2 = [NSDate date];
   [prefs setObject:d2 forKey:key];
    return;
#endif
	return;
    
	if (_isreg) return;
    times = times+1;
    //NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
	[prefs setObject:[NSNumber numberWithInt:times] forKey:[NSString stringWithFormat:@"%@times", c_str]];
	[prefs synchronize];
}


- (int) loaddays
{
	NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
    NSString * key = [self GetTimesKey];
    NSDate * d1 =  [prefs objectForKey:key];
    NSDate * d2 = [NSDate date];
    int n = 0;
    if (d1==nil) {
        //n = [nm intValue];
        NSLog(@"%@",d1);
        [prefs setObject:d2 forKey:key];
    } else {
        n = [d2 timeIntervalSinceDate:d1] ;
        n = n / 86400;
    }
    
    return n;
}

- (void) checkver
{
	NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
    NSString * s =  [prefs objectForKey:r_ver];
    NSString * s2 = [self GetVer];
    
    if (![s isEqualToString:s2]) {  //different version
        [prefs setObject:s2 forKey:r_ver];  // save key
        //[prefs setObject:@"s2" forKey:r_ver];  // save key
        [prefs setObject:NULL forKey:[self GetTimesKey]]; //delete times
        [prefs synchronize];
    }
}

- (NSString *)GetTimesKey
{
    return [NSString stringWithFormat:@"%@times", c_str];
}

- (NSString *)GetVer
{
    NSString * exec_name = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleName"];
    NSString * s2 = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    //NSString * s4 = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
    NSString * s = [NSString stringWithFormat:@"%@.%@",exec_name,s2];
    return s;
}

@end
