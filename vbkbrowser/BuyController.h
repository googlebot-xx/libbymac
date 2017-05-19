//
//  BuyController.h
//  Server Commander
//
//  Created by aa on 2/26/13.
//  Copyright (c) 2013 flyos. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@class RegController;

@interface BuyController : NSWindowController
{

    IBOutlet id title;
    IBOutlet id timeslabel;
    IBOutlet NSImageView *iconimg;

    //RegController * regcontroller;
    BOOL _isreg;
	int times;    
    
}

@property (assign) int times;

- (void) checkkey;
- (void) checkbuy:(id)sender;
- (BOOL) isreg;

- (int) loadtimes;
- (void) savetimes;
- (void) savetimes:(int)n;
- (void)openbuywindow:(id)sender;
- (IBAction)inputsn:(id)sender;

@end

extern RegController * regcontroller;
