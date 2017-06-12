import { Component } from "@angular/core";
import { Dish } from "../../dishes/shared/dish.model";
import { AlertController, NavController, NavParams } from "ionic-angular";
import { OrderComponent } from "../orders.component";
import { Table } from "../../tables/shared/table.model";
import { CurrentTableProcessingOrderService } from "../shared/current-table-processing-order.service";
import { TableProcessingOrder } from "../shared/table-processing-order.model";
import { TableProcessingOrdersServive } from "../shared/table-processing-order.service";
import { ProcessingOrderItem } from "../shared/processing-order-item.model";
import { TableService } from "../../tables/shared/table.service";
import { LoginService } from "../../main/shared/login.service";
import { User } from "../../main/shared/user.model";

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
  tableProcessingOrder: TableProcessingOrder;
  user : User;

  constructor(public params: NavParams,
              public navCrtl: NavController,
              public alertCtrl: AlertController,
              public currentTableProcessingOrderSerive: CurrentTableProcessingOrderService,
              public tableProcessingOrderService: TableProcessingOrdersServive,
              public tableService :TableService,
              public loginService : LoginService) {
    this.dish = this.params.get('dish');
    this.table = this.params.get('table');
    this.tableProcessingOrder = this.params.get('tableProcessingOrder');
    this.description = '';
    this.user = this.loginService.getUser(null);
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
      let _items : ProcessingOrderItem = new ProcessingOrderItem();
      _items.dish = this.dish;
      _items.quantity = this.quantity;
      _items.description = this.description;
      _items.status = 0;
      let body = {
        tableId: this.tableProcessingOrder.tableId,
        items: [_items],
        customerName: "",
        phone: "",
        status : 1,
        userId : this.user.id,
      };
      this.tableProcessingOrderService.getPsOrderByTableId(this.table.id)
        .subscribe(res => {
          this.tableProcessingOrderService.addItem(this.table.id,_items)
            .subscribe(res => {
              this.navCrtl.push(OrderComponent, {
                table: this.table
              })
            }, error => {
              console.log('add item error');
            });
        }, error2 => {
          this.tableProcessingOrderService.addOrder(body)
            .subscribe(res => {
              this.tableService.setStatus(this.table.id,0)
                .subscribe(res => {
                  this.navCrtl.push(OrderComponent,{
                    table : this.table
                  });
                },error3 => {
                  console.log('update status table fail');
                })
            }, error => {
              console.log('add processing order error');
            });
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
