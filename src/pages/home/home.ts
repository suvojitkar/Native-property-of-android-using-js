import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  res:any;
  constructor(public navCtrl: NavController, public http: HTTP) {
  	this.load();
  }

  load(){
  this.http.get('http://ionic.io', {}, {})
  .then(data => {
    
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
    this.res=data.data;

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });

}
}
