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
}

- (void)opensnwindow:(id)sender;
- (void) savekey:(NSString *) asn skey:(NSString *)akey suser:(NSString *)auser;


@end
