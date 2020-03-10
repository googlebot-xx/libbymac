//
//  RegController.m
//  Server Commander
//
//  Created by aa on 2/26/13.
//  Copyright (c) 2013 flyos. All rights reserved.
//

#import "RegController.h"
#import "const.h"
#import "mainWin.h"
#import "ActiveManualler.h"


@interface RegController ()

@end

@implementation RegController

ActiveManualler * activemanu;

@synthesize TrialDaysTotal;
@synthesize licenseday;
@synthesize pid;
@synthesize regmsg;
@synthesize status;
@synthesize ssn;
@synthesize skey;

- (id)initWithWindow:(NSWindow *)window
{
    self = [super initWithWindow:window];
    if (self) {
        // Initialization code here.
        //winbuy = [[NSWindow alloc] initwith];
        activemanu = [[ActiveManualler alloc] initWithWindowNibName:@"ActiveManualler"];
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
    return [self validsn2:str];
    
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

- (int) validsnmanu: (NSString *) str
{
    if ([str length]<3) {
        return 1;
    }
    NSArray *array = [str componentsSeparatedByString:@"|"];
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

- (NSString *) activemanual
{
    NSString * str= @"";
    NSString * url =[NSString stringWithFormat:c_activem,ssn,c_pid];
    [[NSWorkspace sharedWorkspace] openURL: [NSURL URLWithString:url]];
    [activemanu opensnwindow:nil];
    str= activemanu.activatemsg;
    return str;
}

- (IBAction) manaulbtnclick:(id)sender
{
    suser = [nameedit stringValue];
    ssn = [snedit stringValue];
    
    //if you want to trim the trailing whitespaces only you can use @"\\s*$" instead.
    //NSRange range = [ssn rangeOfString:@"^\\s*" options:NSRegularExpressionSearch];
    //ssn =  [ssn stringByReplacingCharactersInRange:range withString:@""];
    ssn = [ssn stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    //[suser retain];
    //[ssn retain];
    
    NSString * str = [self activemanual];
    NSLog(@"%@",str);
    int ret = [self validsn:str];

    if (ret == 10) { // activate ok,
        [[self window] close];
        [NSApp stopModal];
        NSData *nsdata = [str dataUsingEncoding:NSUTF8StringEncoding];
         
        // Get NSString from NSData object in Base64
        NSString *base64 = [nsdata base64EncodedStringWithOptions:0];
        [self writekeyfile:base64];
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];

        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"Quit"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        
        [NSApp terminate:self];
    } else {
        if ([str length]==0)
            return;
            //activatemsg=@"sn is wrong";
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];

        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"OK"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        return;
    }
}



- (IBAction) activatew:(id)sender
{
    suser = [nameedit stringValue];
    ssn = [snedit stringValue];
    
    //if you want to trim the trailing whitespaces only you can use @"\\s*$" instead.
    //NSRange range = [ssn rangeOfString:@"^\\s*" options:NSRegularExpressionSearch];
    //ssn =  [ssn stringByReplacingCharactersInRange:range withString:@""];
    ssn = [ssn stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    NSString * url = [NSString stringWithFormat:c_active,ssn,c_pid];
    //NSLog(@"%@",url);
    //NSString * url = [c_active stringByAppendingString:ssn];
    NSString * str;
    NSData *data=nil;
    data = [NSData dataWithContentsOfURL:[NSURL URLWithString:url]];
    int ret;
    
    if (data == NULL) {
        [self manaulbtnclick:nil];
        //str = [self activemanual];
        //ret = [self validsn:str];
        //ret = [self validsnmanu:str];
    } else {
        str= [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        [self writekeyfile:str];
        str = [self loadkeyfile];
        ret = [self validsn:str];
    }

    if (ret == 10) { // activate ok,
        //[self writekeyfile:str];
        [[self window] close];
        [NSApp stopModal];
        
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];

        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"Quit"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        
        [NSApp terminate:self];
    } else {
        if ([str length]==0)
            return;
            //activatemsg=@"sn is wrong";
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];

        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"OK"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        return;
    }
    return;
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


- (BOOL)fileexist: (NSString *)afile
{
    NSFileManager *fileManager = [NSFileManager defaultManager];
    if (afile) {
        return [fileManager fileExistsAtPath: afile];
    }
    return false;
}

- (void) writekeyfile:(NSString *)str
{
    //NSString *path = [[NSBundle mainBundle] resourcePath];
    //NSString *fname = [NSString stringWithFormat:@"%@/%@",path,c_licensefile];
    NSString *path = ebookdir00;//[[NSBundle mainBundle] resourcePath];
    NSString *fname = [NSString stringWithFormat:@"%@/%@",path,c_licensefile];
    NSData * data = [str dataUsingEncoding:NSUTF8StringEncoding];
    [data writeToFile:fname atomically:YES ];
    
}

- (NSString *) loadkeyfile
{
//    NSString *path = [[NSBundle mainBundle] resourcePath];
//    NSString *fname = [NSString stringWithFormat:@"%@/%@",path,c_licensefile];
    NSString *path = ebookdir00;//[[NSBundle mainBundle] resourcePath];
    NSString *fname = [NSString stringWithFormat:@"%@/%@",path,c_licensefile];
    NSString * str =@"";
    
    if (![self fileexist:fname]) return str;
    
    NSData *data = [[NSFileManager defaultManager] contentsAtPath:fname]; //load file
    str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding]; //to string
    //decode base64
    data = [[NSData alloc] initWithBase64EncodedString:str options:NSDataBase64DecodingIgnoreUnknownCharacters];
    str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding]; //to string
    // remove \n
    str = [str stringByReplacingOccurrencesOfString:@"\n" withString:@""];
    return str;
}

- (int) indexOf:(NSString *)str sub:(NSString *)sub
{
    NSRange range = [str rangeOfString:sub];
    if ( range.length > 0 ) {
        return range.location;
    } else {
        return -1;
    }
}

- (NSString *)getmetavalue: (NSString *)str
{
    int p = [self indexOf:str sub:@":" ];
    int l = [str length];
    NSRange r = NSMakeRange(p+1, l-p-1);
    return [str substringWithRange: r];
}

- (NSDate *)strtodate:(NSString *)str
{
    NSDate * d = [NSDate date];
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"MM/dd/yyyy"];
    d = [dateFormatter dateFromString:str];
    return d;
}

- (int)daysBetween:(NSDate *)dt1 and:(NSDate *)dt2 {
    NSUInteger unitFlags = NSDayCalendarUnit;
    NSCalendar *calendar = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    NSDateComponents *components = [calendar components:unitFlags fromDate:dt1 toDate:dt2 options:0];
    return [components day]+1;
}

-(NSString *)getkeyvalue:(NSArray *)list key:(NSString *)akey
{
    for (id row in list) {
        //NSLog(@"%@",row);
        int p = [self indexOf:row sub:akey ];
        if (p <0 ) continue;
        
        p =[self indexOf:row sub:@"=" ];
        int l = [row length];
        NSRange r = NSMakeRange(p+1, l-p-1);
        return [row substringWithRange: r];
    }
    return @"";
}

- (int) validsn2: (NSString *) str
{
    if ([str length]<3) {
        return 1;
    }
    str = [str stringByReplacingOccurrencesOfString:@"\n" withString:@""];

    
    NSArray *array = [str componentsSeparatedByString:@"\r"];
    if ([array count] ==1) {
        return 1;
    }
    NSString * s = [self getkeyvalue:array key:@"status"];
    status = [s intValue];
    
    pid = [self getkeyvalue:array key:@"pid"];
    s = [self getkeyvalue:array key:@"licenseday"];
    licenseday = [s intValue];
    s = [self getkeyvalue:array key:@"check"];
    activatemsg = [self getkeyvalue:array key:@"msg"];
    
    NSDate * checkday = [self strtodate:s];
    NSDate * d2 = [NSDate date];
    NSLog(@"%@",s);
    if (licenseday>10) { //subscription
        s = [self getkeyvalue:array key:@"orderdate"];
        orderdate = [self strtodate:s];
        int n = abs([self daysBetween:d2 and:orderdate]);
        TrialDaysTotal = licenseday-n;
        if (n>licenseday) { // expired
            return 50;
        }
        //check md5
        ssn = [self getkeyvalue:array key:@"sn"];
        skey = [self getkeyvalue:array key:@"key"];
    } else { //lifetime
        ssn = [self getkeyvalue:array key:@"sn"];
        skey = [self getkeyvalue:array key:@"key"];

    }
    //[ssn retain];
    //[skey retain];
    //[orderdate retain];
    //[pid retain];
    return status;
}

- (void) RecheckKey
{
    //check every 150 days
    if (TrialDaysTotal<150) return;

    //register user
    if (status!=10) return;

    NSString * url = [NSString stringWithFormat:c_active,ssn,c_pid];
    //NSLog(@"%@",url);
    //NSString * url = [c_active stringByAppendingString:ssn];
    NSString * str;
    NSData *data=nil;
    data = [NSData dataWithContentsOfURL:[NSURL URLWithString:url]];
    int ret;
    
    if (data == NULL) {
        if (licenseday>10) {
            [self writekeyfile:@""];
            status = 40;
            activatemsg = @"Check License online again";
        }
        //str = [self activemanual];
        //ret = [self validsn:str];
        //ret = [self validsnmanu:str];
    } else {
        str= [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        [self writekeyfile:str];
        str = [self loadkeyfile];
        ret = [self validsn:str];
    }
    
}


@end
