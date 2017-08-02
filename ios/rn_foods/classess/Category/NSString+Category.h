//
//  NSString+Category.h
//  ErShouHui
//
//  Created by 刘硕 on 15/12/16.
//  Copyright (c) 2015年 www.woyuance.com. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
@interface NSString (Category)

//是否整形数
- (BOOL)isPureInt;

// 2.浮点形判断：
- (BOOL)isPureFloat;

//正则判断手机号码地址格式
- (BOOL)isMobileNumber;
//判断邮箱
-(BOOL)isEmail;
/**
 *  URL
 *
 *  @return <#return value description#>
 */
-(BOOL)validateURL;

/**
 *  反解码
 *
 *  @return <#return value description#>
 */
- (nullable instancetype)URLDecodeString;

/**
 *  URLencode
 */
- (nullable instancetype)URLEncodedString;


/**
 *  是否是中文校验
 *
 *  @return <#return value description#>
 */
-(BOOL)isChinese;


/**
 *  返回base64字符串
 *
 *  @return <#return value description#>
 */
-(nullable NSString *)base64EncodedString;
/**
 *  返回字符串
 *
 *  @param base64EncodedString <#base64EncodedString description#>
 *
 *  @return <#return value description#>
 */
+ (nullable NSString *)stringWithBase64EncodedString:(nullable NSString *)base64EncodedString;
/**
 *  ios URL 编码
 *
 *  @return <#return value description#>
 */
- (nullable NSString *)stringByURLEncode;
/**
 *  iOS URL 解码
 *
 *  @return <#return value description#>
 */
- (nullable NSString *)stringByURLDecode;

/**
 *  根据字体和大小mode返回尺寸
 *
 *  @param font          字体
 *  @param size          规定大小
 *  @param lineBreakMode 模式
 *
 *  @return 尺寸
 */
- (CGSize)sizeForFont:(nullable UIFont *)font size:(CGSize)size mode:(NSLineBreakMode)lineBreakMode;
/**
 *  单行
 *
 *  @param font <#font description#>
 *
 *  @return <#return value description#>
 */
- (CGFloat)widthForFont:(nullable UIFont *)font;
/**
 *  多行
 *
 *  @param font  <#font description#>
 *  @param width <#width description#>
 *
 *  @return <#return value description#>
 */
- (CGFloat)heightForFont:(nullable UIFont *)font width:(CGFloat)width;

/**
 *  获取设备UUID
 *
 *  @return <#return value description#>
 */
+ (nullable NSString *)stringWithUUID;

/**
 *  nil , @"" , @"  " returnNO
 *
 *  @return <#return value description#>
 */
- (BOOL)isNotBlank;
/**
 *  包含字符串
 *
 *  @param string <#string description#>
 *
 *  @return <#return value description#>
 */
- (BOOL)containsString:(nullable NSString *)string;

/**
 *  获取字符的范围
 *
 *  @return <#return value description#>
 */
- (NSRange)rangeOfAll;

/**
 *  转成数字对象
 *
 *  @return <#return value description#>
 */
- (nullable NSNumber *)numberValue;
/**
 *  转成二进制
 *
 *  @return <#return value description#>
 */
- (nullable NSData *)dataValue;

/**
 *  字符串转换成字典
 *
 *  @return <#return value description#>
 */
- (nullable id)jsonValueDecoded;
/**
 *  去掉空行和开始或者结尾的空行
 *
 *  @return <#return value description#>
 */
- (nullable NSString *)stringByTrim;
@end
