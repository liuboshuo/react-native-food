//
//  LSProjectUtils.h
//  LSDevelopmentIOS
//
//  Created by 刘硕 on 16/4/11.
//  Copyright © 2016年 liushuo. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
@interface LSProjectUtils : NSObject

/**
 *  隐藏弹出文字
 */
+ (void)hideHud;

/**
 *  弹出文字提示
 *
 *  @param hint <#hint description#>
 */
+ (void)showHint:(NSString *)hint;

+ (void)showHint:(NSString *)hint inView:(UIView *)view;
/**
 *  转菊花
 *
 *  @param hint 文字
 *  @param view 添加视图
 */
+ (void)showHudHint:(NSString *)hint inView:(UIView *)view;

/**
 *  系统弹出文字
 *
 *  @param str <#str description#>
 */
+(void)alertView:(NSString *)str;


/**
 *  key-value保存到NSUserdefault
 *
 *  @param key   <#key description#>
 *  @param value <#value description#>
 */
+(void)saveValueNSUserdefaultsWithKey:(NSString *)key value:(id)value;

/**
 *  从NSUerdefault获取value
 *
 *  @param key <#key description#>
 *
 *  @return <#return value description#>
 */
+(id)objectWithKey:(NSString *)key;

/**
 *  从NSUserdefault删除值
 *
 *  @param key <#key description#>
 */
+(void)removeValueWithKey:(NSString *)key;

/**
 *  获取document目录的路径
 *
 *  @param name 文件名
 *
 *  @return 路径
 */
+(NSString *)getDocumentsFilePathWithFileName:(NSString *)name;

/**
 *  获取library目录的文件路径
 *
 *  @param name 文件名
 *
 *  @return
 */
+(NSString *)getLibrarysFilePathWithFileName:(NSString *)name;

/**
 *  获取Caches目录的文件路径
 *
 *  @param name 文件名
 *
 *  @return <#return value description#>
 */
+(NSString *)getCachesFilePathWithFileName:(NSString *)name;

/**
 *  获取文件信息
 *
 *  @param fileName <#fileName description#>
 *
 *  @return <#return value description#>
 */
+ (NSMutableDictionary *) getFileInfo:(NSString *)fileName;

/**
 *  document文件夹创建文件
 *
 *  @param fileName 文件名
 *
 *  @return <#return value description#>
 */
+(NSString *)createDocumentFile:(NSString *)fileName;
/**
 *  caches目录下创建文件类型
 *
 *  @param fileName 文件名
 *
 *  @return <#return value description#>
 */
+(NSString *)createCacheFile:(NSString *)fileName;

/**
 *  librar创建文件
 *
 *  @param fileName 文件名
 *
 *  @return <#return value description#>
 */
+(NSString *)createLibraryFile:(NSString *)fileName;

/**
 *  根据当前日期创建文件名称
 *
 *  @param strExtension 后缀类型
 *
 *  @return 
 */
+(NSString *)createFileNameWithDateFormat:(NSString *)strExtension;

@end
