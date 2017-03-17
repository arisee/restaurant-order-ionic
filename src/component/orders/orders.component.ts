import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {OrderFormComponent} from "./order-form/order-form.component";

@Component({
  selector: 'page-order',
  templateUrl: 'orders.component.html'
})

export class OrderComponent {
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  pushMenuPage() {
    this.navCtrl.push(OrderFormComponent);
  }
}
