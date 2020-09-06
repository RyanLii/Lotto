//
//  CalendarManager.m
//  RSL
//
//  Created by ryan lee on 6/9/20.
//

#import <Foundation/Foundation.h>
#import "CameraManager.h"
#import <React/RCTLog.h>

@implementation CameraManager

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(openPhotoLibrary)
{
  dispatch_async(dispatch_get_main_queue(), ^{
      [self launchImagePicker];
  });
}

- (void)launchImagePicker {
  self.picker = [[UIImagePickerController alloc] init];
  self.picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
  self.picker.delegate = self;
  dispatch_async(dispatch_get_main_queue(), ^{
      UIViewController *root = RCTPresentedViewController();
      [root presentViewController:self.picker animated:YES completion:nil];
  });
}
- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info {

  // TODO:
//    UIImage *chosenImage = info[UIImagePickerControllerEditedImage];
//    self.imageView.image = chosenImage;

    [picker dismissViewControllerAnimated:YES completion:NULL];

}
@end
