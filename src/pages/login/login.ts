import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {RegisterPage} from "../register/register";

import { AngularFireAuth} from "angularfire2/auth";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string){
  this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
  }).present();
  }

  logIn(){

    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(
        data => {

          this.alert('Wellcome biker!');
          this.navCtrl.setRoot( TabsPage);
        }
    ).catch(error => {

      this.alert(error.message);

    })
  }

    signUp(){

    this.navCtrl.push(RegisterPage);



    }


}
