//
//  CalendarManager.h
//  RSL
//
//  Created by ryan lee on 6/9/20.
//

#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface CameraManager : NSObject <RCTBridgeModule, UINavigationControllerDelegate, UIActionSheetDelegate, UIImagePickerControllerDelegate>
@property (nonatomic, strong) UIImagePickerController *picker;
@end
