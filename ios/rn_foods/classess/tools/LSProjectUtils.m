//
//  LSProjectUtils.m
//  LSDevelopmentIOS
//
//  Created by 刘硕 on 16/4/11.
//  Copyright © 2016年 liushuo. All rights reserved.
//

#import "LSProjectUtils.h"
#import "MBProgressHUD.h"
#import <objc/runtime.h>
static const void *HttpRequestHUDKey = &HttpRequestHUDKey;


@implementation LSProjectUtils


+ (MBProgressHUD *)HUD{
    return objc_getAssociatedObject(self, HttpRequestHUDKey);
}

+ (void)setHUD:(MBProgressHUD *)HUD{
    objc_setAssociatedObject(self, HttpRequestHUDKey, HUD, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}

+ (void)showHint:(NSString *)hint inView:(UIView *)view{
  if (view == nil) {
     view = [[UIApplication sharedApplication].delegate window];
  }
  MBProgressHUD *hud = [MBProgressHUD showHUDAddedTo:view animated:YES];
  hud.userInteractionEnabled = NO;
  // Configure for text only and offset down
  hud.mode = MBProgressHUDModeText;
  hud.label.text = hint;
  hud.margin = 10.f;
	hud.offset = CGPointMake(hud.offset.x, 0);
  hud.removeFromSuperViewOnHide = YES;
  [hud hideAnimated:YES afterDelay:2];
}
+ (void)showHint:(NSString *)hint{
  [self showHint:hint inView:nil];
}

+ (void)hideHud{
    [[LSProjectUtils HUD] hideAnimated:YES];
}

+(void)showHudHint:(NSString *)hint inView:(UIView *)view
{
    if (view == nil) {
        view = [[UIApplication sharedApplication].delegate window];
    }
    MBProgressHUD *HUD = [[MBProgressHUD alloc] initWithView:view];
    HUD.label.text = hint;
    [view addSubview:HUD];
    [HUD showAnimated:YES];
    [LSProjectUtils setHUD:HUD];
}

+(void)alertView:(NSString *)str
{
    UIAlertView *endAlert =[[UIAlertView alloc] initWithTitle:@"提示"  message:str delegate:self cancelButtonTitle:@"确定" otherButtonTitles:nil];
    [endAlert show];
}

+(NSString *)createDocumentFile:(NSString *)fileName
{
    NSString *path = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject];
    NSString *file = [path stringByAppendingPathComponent:fileName];
    NSFileManager *mgr = [NSFileManager defaultManager];
    if (![mgr fileExistsAtPath:file]) {
        [mgr createFileAtPath:file contents:nil attributes:nil];
    }
    return file;
}

+(NSString *)createCacheFile:(NSString *)fileName
{
    NSString *path = [NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) firstObject];
    NSString *file = [path stringByAppendingPathComponent:fileName];
    NSFileManager *mgr = [NSFileManager defaultManager];
    if (![mgr fileExistsAtPath:file]) {
        [mgr createFileAtPath:file contents:nil attributes:nil];
    }
    return file;
}
+(NSString *)createLibraryFile:(NSString *)fileName
{
    NSString *path = [NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES) firstObject];
    NSString *file = [path stringByAppendingPathComponent:fileName];
    NSFileManager *mgr = [NSFileManager defaultManager];
    if (![mgr fileExistsAtPath:file]) {
        [mgr createFileAtPath:file contents:nil attributes:nil];
    }
    return file;
}
+(NSString *)createFileNameWithDateFormat:(NSString *)strExtension
{
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"yyyyMMddHHmmss"];
    NSString *strDateTime = [dateFormatter stringFromDate:[NSDate date]];
    strDateTime = [NSString stringWithFormat:@"%@.%@",strDateTime,strExtension];
    return strDateTime;
}
+ (NSMutableDictionary *) getFileInfo:(NSString *)fileName
{
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSError *error;
    
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    
    // Get file size
    NSString *filePath = [documentsDirectory stringByAppendingPathComponent:fileName];
    NSDictionary *fileAttributes = [fileManager attributesOfItemAtPath:filePath error:&error];
    NSString * mb_String = nil;
    if(fileAttributes != nil)
    {
        NSString *fileSize = [fileAttributes objectForKey:NSFileSize];
        long long n_FileSize = [fileSize longLongValue];
        float kb_size = n_FileSize*1.0f/1024;
        float mb_size = kb_size*1.0f/1024;
        
        mb_String = [NSString stringWithFormat:@"%.2f MB",mb_size];
    }
    
    //data string
    NSDate * date = [fileAttributes objectForKey:NSFileModificationDate];
    NSMutableDictionary * savedDictionary = [NSMutableDictionary dictionary];
    if( mb_String)
    {
        [savedDictionary setObject:mb_String forKey:@"fileSizeMB"];
        
        NSString *fileSize = [fileAttributes objectForKey:NSFileSize];
        [savedDictionary setObject:fileSize forKey:@"fileSize"];
    }
    
    // date
    if(date)
    {
        NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
        [formatter setAMSymbol:@"AM"];
        [formatter setPMSymbol:@"PM"];
        [formatter setDateFormat:@"MM/dd/yyyy hh:mm:ss:a"];
        
        NSString * string = [formatter stringFromDate:date];
        [savedDictionary setObject:string forKey:@"modifyDate"];
        //[formatter release];
    }
    
    NSString * fileType = [fileAttributes objectForKey:NSFileType];
    NSString * myFileName = [NSString stringWithFormat:@"%@.%@",[fileAttributes objectForKey:@"NSFileOwnerAccountName"],fileType];
    [savedDictionary setObject:myFileName forKey:@"fileName"];
    
    return savedDictionary;
}

@end
