
//
//  LSNavigationController.m
//  LSDevelopmentIOS
//
//  Created by 刘硕 on 16/3/13.
//  Copyright © 2016年 liushuo. All rights reserved.
//

#import "NavigationController.h"

@interface NavigationController ()<UINavigationControllerDelegate>

@property(nonatomic , assign)BOOL enableRightGesture;

@end

@implementation NavigationController


-(void)viewDidLoad
{
    [super viewDidLoad];
    
    self.enableRightGesture = YES;
    self.interactivePopGestureRecognizer.delegate = self;
    self.delegate = self;
    [self setSkin];
}

-(void)pushViewController:(UIViewController *)viewController animated:(BOOL)animated
{
    [super pushViewController:viewController animated:YES];
}

-(UIViewController *)popViewControllerAnimated:(BOOL)animated
{
    UIViewController *viewController = [super popViewControllerAnimated:animated];
    return viewController;
}
-(void)setSkin
{
		[self.navigationBar setBarTintColor:Color(242,0,51,1)];
		self.navigationBar.tintColor = [UIColor whiteColor];
		[self.navigationBar setTitleTextAttributes:[NSDictionary dictionaryWithObjectsAndKeys:[UIColor whiteColor],NSForegroundColorAttributeName,nil]];
	
    if ([[UIDevice currentDevice].systemVersion doubleValue] >= 8.0) {
        self.navigationBar.translucent = NO;
        [self.navigationBar setBackgroundImage:[UIImage new] forBarPosition:UIBarPositionAny barMetrics:UIBarMetricsDefault];
    }
    self.navigationBar.barStyle = UIBarStyleBlack;
    self.navigationBar.shadowImage = [[UIImage alloc] init];
}
@end
