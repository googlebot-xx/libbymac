//http://stackoverflow.com/questions/149646/best-way-to-make-nsrunloop-wait-for-a-flag-to-be-set

volatile BOOL pageStillLoading;

- (void) runInBackground:(id)arg
{
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    // Simmulate web page loading
    sleep(5);

    // This will not wake up the runloop on main thread!
    pageStillLoading = NO;

    // Wake up the main thread from the runloop
    [self performSelectorOnMainThread:@selector(wakeUpMainThreadRunloop:) withObject:nil waitUntilDone:NO];

    [pool release];
}


- (void) wakeUpMainThreadRunloop:(id)arg
{
    // This method is executed on main thread!
    // It doesn't need to do anything actually, just having it run will
    // make sure the main thread stops running the runloop
}


- (IBAction)start:(id)sender
{
    pageStillLoading = YES;
    [NSThread detachNewThreadSelector:@selector(runInBackground:) toTarget:self withObject:nil];
    [progress setHidden:NO];
    while (pageStillLoading) {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
    }
    [progress setHidden:YES];
}

==============================

while ([self isFinished] == NO) {
    [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];
}

    NSDate *future = [NSDate dateWithTimeIntervalSinceNow: 0.1];
    [[NSRunLoop currentRunLoop] runUntilDate: future];

===============================
exitRunLoop = NO;
while (!exitRunLoop)
{
    [[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];
}
====================
 NSTimer *aTimer = [NSTimer timerWithTimeInterval:(x) target:self selector:@selector(timerFired:) userInfo:nil repeats:YES];

    NSRunLoop *runner = [NSRunLoop currentRunLoop];
    [runner addTimer:aTimer forMode: NSDefaultRunLoopMode];  
    [popUpImageView release];

- (void)timerFired:(NSTimer*)theTimer 
{
    if(condition)
    {
      [theTimer isValid]; //recall the NSTimer
       //implement your methods
    }
    else
    {
      [theTimer invalidate]; //stop the NSTimer

    }
}
===============================
- (void)onTimerTick:(NSTimer*)timer
{
    NSLog(@"MY TIMER TICKED");
}

- (void)testTimerBasics
{
    NSLog(@"timer time");
    
    NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:0.1
                              target:self
                              selector:@selector(onTimerTick:)
                              userInfo:nil
                              repeats:YES];
    
    //[timer fire];
    
    NSDate *runUntil = [NSDate dateWithTimeIntervalSinceNow: 3.0 ];
    
    NSLog(@"about to wait");    
    [[NSRunLoop currentRunLoop] runUntilDate:runUntil];
    NSLog(@"wait time is over");    
}
===============================

@end