//
//  AboutController.m
//  eBook Converter Bundle
//
//  Created by meijun on 2013-11-02.
//  Copyright (c) 2013 ebookconverter. All rights reserved.
//

#import "AboutController.h"
#import "const.h"
#import "MainWin.h"
#import "BuyController.h"

@interface AboutController ()

@end

@implementation AboutController

- (id)initWithWindow:(NSWindow *)window
{
    self = [super initWithWindow:window];
    if (self) {
        // Initialization code here.
    }
    
    return self;
}

- (void)windowDidLoad
{
    [super windowDidLoad];

    
    // Implement this method to handle any initialization after your window controller's window has been loaded from its nib file.
}

- (void)awakeFromNib
{
    //    buycontroller = [[BuyController alloc] initWithWindowNibName:@"RegController"];
    NSString * s2 = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIconFile"];
    NSImage *img = [NSImage imageNamed:s2];
    [iconimg setImage:img];
    [iconimg setImageFrameStyle:NSImageFrameNone];
    [backimg setImageFrameStyle:NSImageFrameNone];
    
    s2 = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    NSString * s4 = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
    NSString * s5;
    if ([reg isreg]) {
        s5 = @"Licensed";
    } else
        s5 = @"Demo version";
    NSString * s3 = [NSString stringWithFormat:@"Ver %@ (%@)\n\n%@",s2,s4,s5];
    [version setStringValue:s3];
    
    NSBundle * bundle = [NSBundle bundleForClass:[self class]];
    NSString * exec_name = [[bundle infoDictionary] objectForKey:@"CFBundleName"];
    [title setStringValue:exec_name];
    [weblabel setStringValue:c_web];
#ifndef DEBUG
    if ([reg isreg]) {
        [snbtn setHidden:true];
    }
#endif
}

- (IBAction)okbtn:(id)sender
{
    [[self window] close];
    [NSApp stopModal];
}

- (void)ShowAbout
{
    [NSApp runModalForWindow:[self window]];    
}

- (IBAction)inputsnbtn:(id)sender
{
    [[self window] close];
    [NSApp stopModal];
    [reg inputsn:sender];
}


/*
- (void)drawRect:(NSRect)dirtyRect
{
    [[NSColor orangeColor] set];
    
    NSBezierPath *path = [NSBezierPath bezierPath];
    [path appendBezierPathWithRoundedRect:outerFrame xRadius:5 yRadius:5];
    [path setLineWidth:4.0];
    [path stroke];
}
*/


@end
