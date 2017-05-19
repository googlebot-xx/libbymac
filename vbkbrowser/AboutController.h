//
//  AboutController.h
//  eBook Converter Bundle
//
//  Created by meijun on 2013-11-02.
//  Copyright (c) 2013 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface AboutController : NSWindowController
{
    IBOutlet NSImageView *iconimg;
    IBOutlet NSImageView *backimg;
    IBOutlet id title;
    IBOutlet id version;
    IBOutlet id weblabel;
    IBOutlet id snbtn;
}

- (void)ShowAbout;

@end
