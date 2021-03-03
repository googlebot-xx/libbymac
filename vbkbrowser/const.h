//
//  capture.h
//  epubpdf
//
//  Created by aa on 9/6/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

#define c_company @"eBookConverter"
#define c_kindle @"Bookshelf"
#define c_kindlebundle @"com.vitalsource.bookshelf"
#define c_bundle @"com.ebookconverter.vbkdownload"
#define c_lib @"Library"
#define c_app @"VitalSource Downloader"
#define c_product @"VitalSource Downloader"
#define c_self @"VitalSource Downloader"
#define c_order @"http://www.ebook-converter.com/download/order.php?id=46"
#define c_home @"https://www.ebook-converter.com/download/help.php?id=46"
#define c_web @"https://www.ebook-converter.com"
//#define c_active @"http://www.ebook-converter.com/download/activemac.php?id=%@&pid=%@"
//#define c_active @"https://www.ebook-converter.com/download/activevsprinter.php?id=%@&pid=%@"
#define c_active @"https://www.ebook-converter.com/download/api/active200.php?id=%@&pid=%@"
#define c_activem @"https://www.ebook-converter.com/download/api/activemanlong.php?id=%@&pid=%@"
#define c_str @"vistaldownload"
#define c_pid @"46"
#define c_times 40
#define c_licensefile @"converter.dat"

//46 40ccbda02539220a d05c68f22d5d78ab
//70 9a3680b8ad7265e2 4e46543bdf65d530
// 271 c73b3262c1808174 2021-2

#define c_seed @"vitaldownmac"
#define contains(str1, str2) ([str1 rangeOfString: str2 ].location != NSNotFound)

//NSString a = @"PUC MINAS - BRAZIL";
//NSString b = @"BRAZIL";
//if( contains(a,b) ){
//   //TO DO HERE
//}
//com.vitalsource.bookshelf

