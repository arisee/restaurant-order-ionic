import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {HomePage} from "../home/home.component";

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushPage(){
    this.navCtrl.push(HomePage);
  }

  presentAlert(){

  }
}
