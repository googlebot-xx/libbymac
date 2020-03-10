//
//  ActiveManualler.h
//  eBook Converter Bundle
//
//  Created by jy on 2019-06-24.
//  Copyright © 2019 ebookconverter. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface ActiveManualler : NSWindowController
{
        IBOutlet NSTextField * unlocked;
        NSString * activatemsg;
    NSString * suser;
    NSString * ssn;
    
}

@property (nonatomic,copy) NSString *activatemsg;

- (void)opensnwindow:(id)sender;

@end
