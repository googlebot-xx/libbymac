//
//  RegController.h
//  Server Commander
//
//  Created by aa on 2/26/13.
//  Copyright (c) 2013 flyos. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface RegController : NSWindowController
{
    IBOutlet NSTextField * nameedit;
    IBOutlet NSTextField * snedit;

    IBOutlet id activatecaption; // caption in inputsn
    
    BOOL _isreg;
    NSString * activatemsg;
	NSString * suser ;
	NSString * ssn ;
    
    int status;
    int licenseday;
    NSString * pid;
    int TrialDaysTotal;
    NSString *regmsg;
    NSDate * orderdate;
}

@property int TrialDaysTotal;
@property int licenseday;
@property (nonatomic,copy) NSString *pid;
@property (nonatomic,copy) NSString *regmsg;
@property (nonatomic,copy) NSString *ssn;
@property (nonatomic,copy) NSString *skey;
@property int status;

- (void)opensnwindow:(id)sender;
- (void) savekey:(NSString *) asn skey:(NSString *)akey suser:(NSString *)auser;
- (NSString *) loadkeyfile;
- (void) writekeyfile:(NSString *)str;
- (int) validsn2: (NSString *) str;
- (void) RecheckKey;


@end
