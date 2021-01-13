//
//  Mkwebview.m
//  VitalSource Downloader
//
//  Created by aa on 2021-01-13.
//  Copyright © 2021 ebookconverter. All rights reserved.
//

#import "Mkwebview.h"

@implementation Mkwebview

//- (void)drawRect:(NSRect)dirtyRect {
//    [super drawRect:dirtyRect];
//
//    // Drawing code here.
//}

- (BOOL)knowsPageRange:(NSRangePointer)range
{
    NSPrintInfo *pi = [[NSPrintOperation currentOperation] printInfo];
    NSRect bounds;
    NSRect paper;
    CGFloat scale;
    
    // Work out the image's bounds
//    bounds = NSMakeRect(0, 0, [(SeaContent *)[document contents] width] * (72.0 / (CGFloat)[[document contents] xres]), [[document contents] height] * (72.0 / (CGFloat)[[document contents] yres]));
    
    // Work out the paper's bounding rectangle
//    paper.size = [pi paperSize];
//    paper.size.height -= [pi topMargin] + [pi bottomMargin];
//    paper.size.width -= [pi leftMargin] + [pi rightMargin];
//    scale = [[pi dictionary][NSPrintScalingFactor] doubleValue];
//    paper.size.height /= scale;
//    paper.size.width /= scale;
//
//    if (bounds.size.width < paper.size.width && bounds.size.height < paper.size.height) {
//        // Handle one page documents
//        range->location = 1;
//        range->length = 1;
//        [pi setHorizontallyCentered:YES];
//        [pi setVerticallyCentered:YES];
//    } else {
//        // Otherwise do tiling
//        range->location = 1;
//        range->length = ceil((CGFloat)bounds.size.width / (CGFloat)paper.size.width) * ceil((CGFloat)bounds.size.height / (CGFloat)paper.size.height);
//        [pi setHorizontallyCentered:NO];
//        [pi setVerticallyCentered:NO];
//    }
    range->location = 1;
    range->length = 1;
    
    return YES;
}

@end
