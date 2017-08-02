//
//  UIImage+Category.h
//  ErShouHui
//
//  Created by 刘硕 on 15/12/16.
//  Copyright (c) 2015年 www.woyuance.com. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AssetsLibrary/AssetsLibrary.h>
#import <QuartzCore/QuartzCore.h>
#import <Accelerate/Accelerate.h>
@interface UIImage (Category)


/**
 *  根据本地选择的图片assert URl生成一张图片
 *
 *  @param asset <#asset description#>
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)fullResolutionImageFromALAsset:(nullable ALAsset *)asset;

/**
 *  图片模糊
 */

// 0.0 to 1.0
- (nullable UIImage*)blurredImage:(CGFloat)blurAmount;
/**
 *  传入一种颜色生成一张图片
 *
 *  @param color <#color description#>
 *
 *  @return <#return value description#>
 */

- (nullable UIImage *)fixOrientation;


+(nullable UIImage *)imageWithColor:(nullable UIColor *)color;
+ (nullable UIImage *)imageWithColor:(nullable UIColor *)color size:(CGSize)size;
/**
 *  截整个屏幕的一张图
 *
 *  @return <#return value description#>
 */
+ (nullable UIImage *)screenshot;


/**
 *  生成JIF
 *
 *  @param data  <#data description#>
 *  @param scale <#scale description#>
 *
 *  @return <#return value description#>
 */
+ (nullable UIImage *)imageWithSmallGIFData:(nullable NSData *)data scale:(CGFloat)scale;
/**
 *  判断是不是可以GIF
 *
 *  @param data data
 *
 *  @return <#return value description#>
 */
+ (BOOL)isAnimatedGIFData:(nullable NSData *)data;

/**
 *  是否是Gif动画
 *
 *  @param path 文件路径
 *
 *  @return <#return value description#>
 */
+ (BOOL)isAnimatedGIFFile:(nullable NSString *)path;

/**
 *  根据emoji生成一张图片
 *
 *  @param emoji <#emoji description#>
 *  @param size  <#size description#>
 *
 *  @return <#return value description#>
 */
+ (nullable UIImage *)imageWithEmoji:(nullable NSString *)emoji size:(CGFloat)size;

/**
 *  裁剪
 *
 *  @param rect        <#rect description#>
 *  @param contentMode <#contentMode description#>
 *  @param clips       <#clips description#>
 */
- (void)drawInRect:(CGRect)rect withContentMode:(UIViewContentMode)contentMode clipsToBounds:(BOOL)clips;

/**
 *  生成size大小的图片
 *
 *  @param size        size
 *  @param contentMode 填充模式
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByResizeToSize:(CGSize)size contentMode:(UIViewContentMode)contentMode;

/**
 *  矩形圆角的裁剪
 *
 *  @param radius 半径
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByRoundCornerRadius:(CGFloat)radius;
/**
 *  矩形圆角的裁剪
 *
 *  @param radius      半径
 *  @param borderWidth 边界宽度
 *  @param borderColor 边界颜色
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByRoundCornerRadius:(CGFloat)radius
                                   borderWidth:(CGFloat)borderWidth
                                   borderColor:(nullable UIColor *)borderColor;
/**
 *  矩形圆角的裁剪
 *
 *  @param radius         半径
 *  @param corners        指定哪些叫圆角
 *  @param borderWidth    边界宽度
 *  @param borderColor    边界颜色
 *  @param borderLineJoin 要使用的接合类型  
 kCGLineJoinMiter
 接合点为尖角。这是默认的接合类型。
 kCGLineJoinBevel
 接合点为斜角
 kCGLineJoinRound
 接合点为圆角
 *
 *  @return
 */
- (nullable UIImage *)imageByRoundCornerRadius:(CGFloat)radius
                                       corners:(UIRectCorner)corners
                                   borderWidth:(CGFloat)borderWidth
                                   borderColor:(nullable UIColor *)borderColor
                                borderLineJoin:(CGLineJoin)borderLineJoin;
/**
 *  旋转
 *
 *  @param radians
 *  @param fitSize <#fitSize description#>
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByRotate:(CGFloat)radians fitSize:(BOOL)fitSize;
/**
 *  左旋准
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByRotateLeft90;

/**
 *  右旋转
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByRotateRight90;

/**
 *  模糊效果
 *
 *  @param color <#color description#>
 *
 *  @return <#return value description#>
 */
- (nullable UIImage *)imageByTintColor:(nullable UIColor *)color;
- (nullable UIImage *)imageByGrayscale;
- (nullable UIImage *)imageByBlurSoft;
- (nullable UIImage *)imageByBlurLight;
- (nullable UIImage *)imageByBlurExtraLight;
- (nullable UIImage *)imageByBlurDark;
- (nullable UIImage *)imageByBlurWithTint:(nullable UIColor *)tintColor;
- (nullable UIImage *)imageByBlurRadius:(CGFloat)blurRadius
                              tintColor:(nullable UIColor *)tintColor
                               tintMode:(CGBlendMode)tintBlendMode
                             saturation:(CGFloat)saturation
                              maskImage:(nullable UIImage *)maskImage;
@end
