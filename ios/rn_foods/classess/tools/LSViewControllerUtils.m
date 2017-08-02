//
//  LSViewControllerUtils.m
//  LSTestCategory
//
//  Created by 刘硕 on 15/12/16.
//  Copyright (c) 2015年 ls. All rights reserved.
//

#import "LSViewControllerUtils.h"

@implementation LSViewControllerUtils

//获取最前面的控制器
+ (UIViewController *)activityViewController
{
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    UIViewController *curentController = app.window.rootViewController;
    
    if ([curentController isKindOfClass:[UINavigationController class]]){
        UINavigationController *nav = (UINavigationController *)curentController;
        return nav.visibleViewController;
    }else{
      return curentController;
    }
}

+ (UIViewController *)findViewcontroller:(UIView *)sourceView
{
    id target = sourceView;
    while (target) {
        target = ((UIResponder *)target).nextResponder;
        if ([target isKindOfClass:[UIViewController class]]) {
            break;
        }
    }
    return target;
}
@end
