//
//  AppDelegate.m
//  vbkbrowser
//
//  Created by aa on 2017-05-09.
//  Copyright © 2017 ebookconverter. All rights reserved.
//

#import "AppDelegate.h"
#import "mainWin.h"
#import "AboutController.h"
#import "HybridNSURLProtocol.h"

@interface AppDelegate ()

@property (weak) IBOutlet NSWindow *window;
@end

@implementation AppDelegate

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
    // Insert code here to initialize your application
    [mainwin checkkey];
    //[NSURLProtocol registerClass:[HybridNSURLProtocol class]];

}


- (void)applicationWillTerminate:(NSNotification *)aNotification {
    // Insert code here to tear down your application
    [[NSURLCache sharedURLCache] removeAllCachedResponses];
}

- (BOOL)applicationShouldTerminateAfterLastWindowClosed:(NSApplication *)theApplication {
    return YES;
}


- (void)awakeFromNib
{
    if (!mainwin) {
        mainwin = [[mainWin alloc] init];
        
    }
}

- (IBAction)aboutbtn:(id)sender
{
    [aboutcontroller ShowAbout];
}

@end
