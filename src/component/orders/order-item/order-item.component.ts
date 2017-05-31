import { Component } from "@angular/core";
import { Dish } from "../../dishes/shared/dish.model";
import { AlertController, NavController, NavParams } from "ionic-angular";
import { OrderComponent } from "../orders.component";
import { Table } from "../../tables/shared/table.model";
import { CurrentTableProcessingOrderService } from "../shared/current-table-processing-order.service";

@Component({
  selector: "order-item-component",
  templateUrl: "order-item.component.html"
})

export class OrderItemComponent {
  dish: Dish;
  quantity = 0;
  total = 0;
  description = '';
  table: Table;
  search: "";

  constructor(public params: NavParams,
              public navCrtl: NavController,
              public alertCtrl: AlertController,
              public currentTableProcessingOrderSerive: CurrentTableProcessingOrderService) {
    this.dish = this.params.get('dish');
    this.table = this.params.get('table');
    this.description = '';
  }

  isViewDidLoad() {
    console.log('order-item');
  }

  addQuantity() {
    this.quantity += 1;
  }

  removeQuantity() {
    if (this.quantity <= 0) {
      this.quantity = 0;
    } else {
      this.quantity -= 1;
    }
  }

  save() {
    if (this.quantity > 0) {
      this.currentTableProcessingOrderSerive.addOrderItem(this.dish, this.description, this.quantity);
      this.navCrtl.push(OrderComponent, {
        table: this.table
      });
    } else {
      this.showAlert();
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Bạn phải chọn số lượng để đặt món!',
      buttons: ['OK']
    });
    alert.present();
  }
}
