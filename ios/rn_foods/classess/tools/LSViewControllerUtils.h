//
//  LSViewControllerUtils.h
//  LSTestCategory
//
//  Created by 刘硕 on 15/12/16.
//  Copyright (c) 2015年 ls. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "AppDelegate.h"
@interface LSViewControllerUtils : NSObject

/**
 *  获取活跃的控制器（根据不同项目该方法会有所变动，获取当前的控制器也就是呈现在用户的控制器）
 *
 *  @return <#return value description#>
 */
+ (UIViewController *)activityViewController;


/**
 *  获取指定视图属于谁
 *
 *  @param sourceView <#sourceView description#>
 *
 *  @return <#return value description#>
 */
+ (UIViewController *)findViewcontroller:(UIView *)sourceView;

@end
