import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front
  });
};

/*

CameraResultType is an enum with the following values:

export declare enum CameraResultType {
    Uri = "uri",
    Base64 = "base64",
    DataUrl = "dataUrl"
}
--------------------------------------------------

CameraDirection is an enum with the following values:

export declare enum CameraDirection {
    Rear = "REAR",
    Front = "FRONT"
}
*/
