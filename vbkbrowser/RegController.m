//
//  RegController.m
//  Server Commander
//
//  Created by aa on 2/26/13.
//  Copyright (c) 2013 flyos. All rights reserved.
//

#import "RegController.h"
#import "const.h"


@interface RegController ()

@end

@implementation RegController

- (id)initWithWindow:(NSWindow *)window
{
    self = [super initWithWindow:window];
    if (self) {
        // Initialization code here.
        //winbuy = [[NSWindow alloc] initwith];
    }
    
    return self;
}

- (void)awakeFromNib
{
    
//    buycontroller = [[BuyController alloc] initWithWindowNibName:@"RegController"];
}

- (void)windowDidLoad
{
    [super windowDidLoad];
    
    // Implement this method to handle any initialization after your window controller's window has been loaded from its nib file.
}

- (BOOL) isreg
{
	return !_isreg;
}

- (void)opensnwindow:(id)sender
{
    NSWindow *win = [self window];// [self window];
    
    NSBundle * bundle = [NSBundle bundleForClass:[self class]];
    NSString * exec_name = [[bundle infoDictionary] objectForKey:@"CFBundleName"];
    //[title setStringValue:exec_name];
    //[title setNeedsDisplay:YES];
    
    //	[self closewintomain:nil];
	NSString * s = @"\n\
    -It need to access internet to activate you copy.\n\
    -Copy and Paste SN from your email, click 'Activate' button.\n\
    -Restart program after activation." ;
	
	NSString *s1 = [s stringByReplacingOccurrencesOfString: @"<product>" withString:c_product];
	
	[activatecaption setStringValue:s1];
    
	NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];
	s1 =  [prefs stringForKey:[NSString stringWithFormat:@"%@user", c_str]] ;
    if (s1) {
        [nameedit setStringValue:s1];
    }
	s1 =  [prefs stringForKey:[NSString stringWithFormat:@"%@sn", c_str]] ;
    if (s1) {
        [snedit setStringValue:s1];
    }
    
	[NSApp runModalForWindow:win];
	[win orderOut:self];
}

- (void) savekey:(NSString *) asn skey:(NSString *)akey suser:(NSString *)auser
{
	NSUserDefaults *prefs = [NSUserDefaults standardUserDefaults];

    if (asn) {
        [prefs setObject:asn forKey:[NSString stringWithFormat:@"%@sn", c_str]];
    }
    if (akey) {
        [prefs setObject:akey forKey:[NSString stringWithFormat:@"%@key", c_str]];
    }
    if (auser) {
        [prefs setObject:auser forKey:[NSString stringWithFormat:@"%@user", c_str]];
    }
	[prefs synchronize];
    
}


- (IBAction)quitClick:(id)sender {
	[NSApp terminate: nil];
}

- (int) validsn: (NSString *) str
{
    if ([str length]<3) {
        return 1;
    }
    NSArray *array = [str componentsSeparatedByString:@"\r"];
    if ([array count] ==1) {
        return 1;
    }
    
    NSString * s = [array objectAtIndex:0];
    activatemsg = [array objectAtIndex:1];
    
#ifdef DEBUG
    if ([s isEqualToString:@"20"]) {
        [self savekey:@"" skey:@"" suser:suser]; //save
        return 1;
    }
#endif
    if ([s isEqualToString:@"10"]) {
        [self savekey:ssn skey:activatemsg suser:suser]; //save
        activatemsg = [array objectAtIndex:2];
        //[activatemsg retain];
        return 2;
    }
    
    //[activatemsg retain];
    return 0;
}


- (IBAction) activatew:(id)sender
{
	suser = [nameedit stringValue];
	ssn = [snedit stringValue];
    
	//if you want to trim the trailing whitespaces only you can use @"\\s*$" instead.
	//NSRange range = [ssn rangeOfString:@"^\\s*" options:NSRegularExpressionSearch];
	//ssn =  [ssn stringByReplacingCharactersInRange:range withString:@""];
	ssn = [ssn stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    //[suser retain];
    //[ssn retain];
	
	NSString * url = [NSString stringWithFormat:c_active,ssn,c_pid];
	//NSString * url = [c_active stringByAppendingString:ssn];
	
	NSData *data = [NSData dataWithContentsOfURL:[NSURL URLWithString:url]];
	NSString * str= [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    
    if ([self validsn:str] == 2) { // activate ok,
        [[self window] close];
        [NSApp stopModal];
        
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init] ;
        
        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"Quit"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        
        [NSApp terminate:self];
    } else {
        
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];
        
        [alert setAlertStyle:NSCriticalAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"OK"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        return;
    }
    return;
    
/////////////////////////////////////////////
    [self savekey:ssn skey:str suser:suser];
    if ([str isEqualToString:@"bad key" ]) //bad key
    {
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];
        
        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:@"SN isn't correct !\n\
         Please copy and paste SN, try again.\n"];
        [alert addButtonWithTitle:@"OK"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        return;
    }   
    
    //NSLog(@"Activate %@",str);
	//[self closewintomain:sender];
    [[self window] close];
	[NSApp stopModal];
	
	//NSAlert *alert = [[[NSAlert alloc] init] autorelease];
    NSAlert *alert = [[NSAlert alloc] init];
	
	[alert setAlertStyle:NSWarningAlertStyle];
	[alert setMessageText:@"Activation finished !\n\
	 Please restart APP.\n"];
	[alert addButtonWithTitle:@"Quit"];
	
	//NSInteger alertResult = [alert runModal];
	[alert runModal];
	
	[NSApp terminate:self];
}


- (IBAction)openinputsnw:(id)sender
{
	
    //	[self closewintomain:nil];
	NSString * s = @"\-It need to access internet to activate you copy.\n\
    -Copy and Paste SN from your email, click 'Activate' button.\n\
    -Restart program after activation." ;
	
	NSString *s1 = [s stringByReplacingOccurrencesOfString: @"<product>" withString:c_product];

    
	[activatecaption setStringValue:s1];
	[NSApp runModalForWindow:[self window]];
	
}

- (IBAction)closesnwindow:(id)sender
{
   	[[self window] close];
    [NSApp stopModal];
}

@end
