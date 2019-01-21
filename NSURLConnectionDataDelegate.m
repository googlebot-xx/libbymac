//
//  WVViewController.m
//  WebViewTrial
//
//  Created by Mert Buran on 11/4/13.
//  Copyright (c) 2013 Mert Buran. All rights reserved.
//

#import "WVViewController.h"

@interface WVViewController () <UIWebViewDelegate, NSURLConnectionDataDelegate>
@property (nonatomic, retain) NSURLResponse *response;
@property (nonatomic, retain) NSData *data;
@end

@implementation WVViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    [self.webView setDelegate:self];
    NSString *url = @"http://en.wikipedia.org/wiki/Takeru_Kobayashi";
    NSURLRequest *urlRequest = [NSURLRequest requestWithURL:[NSURL URLWithString:url]];
    NSURLConnection *connection = [NSURLConnection connectionWithRequest:urlRequest delegate:self];
    self.data = [NSData data];
    [connection start];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    if(navigationType == UIWebViewNavigationTypeLinkClicked && request.URL.fragment != nil)
    {
        NSURLConnection *connection = [NSURLConnection connectionWithRequest:request delegate:self];
        [connection start];
        return NO;
    }
    return YES;
}
- (void)webViewDidStartLoad:(UIWebView *)webView
{
}
- (void)webViewDidFinishLoad:(UIWebView *)webView
{
}
- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response
{
    self.response = response;
}
- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data
{
    NSMutableData *oldData = [NSMutableData dataWithData:self.data];
    [oldData appendData:data];
    self.data = oldData;
}
- (void)connectionDidFinishLoading:(NSURLConnection *)connection
{
    [self.webView loadData:self.data MIMEType:self.response.MIMEType textEncodingName:@"utf-8" baseURL:self.response.URL];
    self.data = [NSData data];
}
@end