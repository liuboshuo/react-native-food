//
//  NativeApplicationModules.m
//  RNRouter_learn
//
//  Created by ls-mac on 2017/5/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "NativeAppModules.h"
#import "LSProjectUtils.h"
#import "LSViewControllerUtils.h"
#import "NSString+Category.h"
@interface NativeAppModules ()<UIActionSheetDelegate>

@end

@implementation NativeAppModules
RCT_EXPORT_MODULE(NativeAppModules);

RCT_EXPORT_METHOD(showHint:(NSString *)text){
  UIViewController *controller = RCTPresentedViewController();
  RCTExecuteOnMainQueue(^{
    [LSProjectUtils showHint:text inView:controller.view];
  });
}
RCT_EXPORT_METHOD(showHud:(NSString*)msg){
  UIViewController *controller = [LSViewControllerUtils activityViewController];
  RCTExecuteOnMainQueue(^{
    [LSProjectUtils showHudHint:msg inView:controller.view];
  });
}
RCT_EXPORT_METHOD(resignFirstResponder){
	RCTExecuteOnMainQueue(^{
		UIViewController *controller = [LSViewControllerUtils activityViewController];
		[controller.view endEditing:YES];
	});
}
RCT_EXPORT_METHOD(hideHud){
  RCTExecuteOnMainQueue(^{
    [LSProjectUtils hideHud];
  });
}
RCT_REMAP_METHOD(getAppInfos,
									 resolver: (RCTPromiseResolveBlock) resolve
									 rejecter: (RCTPromiseRejectBlock) reject )
{

  NSDictionary * result = @{
														@"brand" : @"Apple",
														@"server_host" : ServerURL,
														@"appId" : [NSString getAppId],
														@"version" : [NSString getAppVersion],
                            @"appKey" : AppKey
														};
		
  resolve(result);
	}


@end
