import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})

export class OrderComponent {
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  pushMenuPage(){
    this.navCtrl.push(MenuComponent);
  }
}
