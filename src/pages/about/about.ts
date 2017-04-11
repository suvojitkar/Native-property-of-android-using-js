import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  base64Image:any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private datePicker: DatePicker, private barcodeScanner: BarcodeScanner, private camera: Camera, private tts: TextToSpeech) {

  }

  photo(){
      const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

  this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
  this.tts.speak('Image Captured Successfully')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

  this.base64Image = 'data:image/jpeg;base64,' + imageData;

}, (err) => {
 // Handle error
});

  }

  date(){
  	this.datePicker.show({
  date: new Date(),
  mode: 'date',
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
}).then(
  date => console.log('Got date: ', date),
  err => console.log('Error occurred while getting date: ', err)
);
  
}
  barcode(){
  	this.barcodeScanner.scan().then((result) => {
    let alert = this.alertCtrl.create({
    title: 'Scanned',
    subTitle: result.text ,
    buttons: ['Dismiss']
  });
  alert.present();
}, (err) => {
    // An error occurred
});
  }
 }
