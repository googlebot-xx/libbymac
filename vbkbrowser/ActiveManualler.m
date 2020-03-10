//
//  ActiveManualler.m
//  eBook Converter Bundle
//
//  Created by jy on 2019-06-24.
//  Copyright © 2019 ebookconverter. All rights reserved.
//

#import "ActiveManualler.h"
#import "const.h"

@interface ActiveManualler ()

@end

@implementation ActiveManualler

@synthesize activatemsg;

- (void)windowDidLoad {
    [super windowDidLoad];
    suser=@"web";
    ssn=@"111";
    activatemsg=@"";
    //[suser retain];
    //[ssn retain];
    // Implement this method to handle any initialization after your window controller's window has been loaded from its nib file.
}

- (IBAction)closesnwindow:(id)sender
{
    [[self window] close];
    [NSApp stopModal];
}

- (IBAction) activatew:(id)sender
{

         [[self window] close];
            [NSApp stopModal];
    
    NSString * base64 = [unlocked stringValue];
    
    NSData *data = [[NSData alloc] initWithBase64EncodedString:base64 options:NSDataBase64DecodingIgnoreUnknownCharacters];
    activatemsg = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    
    return;
    
    NSString * str= ssn;

    if ([self validsn:str] == 2) { // activate ok,
//        [[self window] close];
//        [NSApp stopModal];
        
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        NSAlert *alert = [[NSAlert alloc] init];

        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"Quit"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        
        [NSApp terminate:self];
    } else {
        
        NSAlert *alert = [[NSAlert alloc] init];
        //NSAlert *alert = [[[NSAlert alloc] init] autorelease];
        
        [alert setAlertStyle:NSWarningAlertStyle];
        [alert setMessageText:activatemsg];
        [alert addButtonWithTitle:@"OK"];
        
        //NSInteger alertResult = [alert runModal];
        [alert runModal];
        return;
    }
    return;
}

- (void)opensnwindow:(id)sender
{
    
    //    [self closewintomain:nil];
//    NSString * s = @"\-It need to access internet to activate you copy.\n\
//    -Copy and Paste SN from your email, click 'Activate' button.\n\
//    -Restart program after activation." ;
//    
//    NSString *s1 = [s stringByReplacingOccurrencesOfString: @"<product>" withString:c_product];
//    
//    [activatecaption setStringValue:s1];
    [NSApp runModalForWindow:[self window]];
    
}

- (int) validsn: (NSString *) str
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

@end
