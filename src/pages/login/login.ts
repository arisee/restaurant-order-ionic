import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushPage(){
    this.navCtrl.push(HomePage);
  }


}
