//
//  NSData+Category.h
//  LSDevelopmentIOS
//
//  Created by 刘硕 on 16/4/7.
//  Copyright © 2016年 liushuo. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSData (Category)


/**
 *  转字符
 *
 *  @return 字符
 */
- (nullable NSString *)utf8String;

/**
 *  生成Base64加密后的编码
 *
 *  @return <#return value description#>
 */
- (nullable NSString *)base64EncodedString;

/**
 *  反编码
 *
 *  @param base64EncodedString <#base64EncodedString description#>
 *
 *  @return <#return value description#>
 */
+ (nullable NSData *)dataWithBase64EncodedString:(nullable NSString *)base64EncodedString;

/**
 *  返回数组活字典 反decoded
 *
 *  @return <#return value description#>
 */
-(nullable id)jsonValueDecoded;

/**
 */
@end
