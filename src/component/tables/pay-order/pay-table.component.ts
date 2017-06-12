import { Component } from "@angular/core";
import { Table } from "../shared/table.model";
import { AlertController, NavController, NavParams } from "ionic-angular";
import { TableProcessingOrdersServive } from "../../orders/shared/table-processing-order.service";
import { ProcessingOrderItem } from "../../orders/shared/processing-order-item.model";
import { TableProcessingOrder } from "../../orders/shared/table-processing-order.model";
import { OrderService } from "../../orders/shared/order.service";
import { LoginService } from "../../main/shared/login.service";
import { TablesComponent } from "../tables.component";
import { CurrentTableProcessingOrderService } from "../../orders/shared/current-table-processing-order.service";
@Component({
  selector: 'pay-table-component',
  templateUrl: 'pay-table.component.html'
})

export class PayTableComponent {
  table: Table;
  items: ProcessingOrderItem [] = [];
  total = 0;
  processingOrder: TableProcessingOrder;

  constructor(public navParms: NavParams,
              public navCtr: NavController,
              public tbpOrderService: TableProcessingOrdersServive,
              public currentOrderService: CurrentTableProcessingOrderService,
              public loginService: LoginService,
              public alertCtrl: AlertController) {
    this.table = this.navParms.get('table');
    this.getOrderItem();
    this.totalAmountPayable();
  }

  ionViewDidLoad() {
    console.log('pay order component');
  }

  totalAmountPayable() {
    this.tbpOrderService.total(this.table.id)
      .subscribe(res => {
        this.total = res;
      }, error2 => {
        console.log('total amount payable fail!');
      });
  }

  getOrderItem() {
    this.tbpOrderService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        let _item: ProcessingOrderItem [] = res.items;
        this.items = [];
        for (let i = 0; i < _item.length; i++) {
          let isJoin = false;
          for (let j = 0; j < this.items.length; j++) {
            if (this.isJoin(_item[i], this.items[j])) {
              isJoin = true;
              this.items[j].quantity += _item[i].quantity;
            }
          }
          if (!isJoin) {
            this.items.push(_item[i]);
          }
        }
      }, error2 => {
        console.log('get order fail!');
      });
  }

  isJoin(item1: ProcessingOrderItem, item2: ProcessingOrderItem): boolean {
    return item1.dish.id == item2.dish.id;
  }

  pay() {
    this.tbpOrderService.pay(this.table.id, this.loginService.getUser(null).id)
      .subscribe(res => {
        this.currentOrderService.setCurrenOrder(null);
        this.showAlert();
        this.navCtr.push(TablesComponent);
      },error2 => {
        console.log("pay order error");
      });
  }

  // pay() {
  //   this.tbpOrderService.getPsOrderByTableId(this.table.id)
  //     .subscribe(res => {
  //       this.processingOrder = res;
  //       let body = {
  //         customerName: this.processingOrder.customerName,
  //         phone : this.processingOrder.phone,
  //         createdDate: this.processingOrder.createdDate,
  //         items: this.processingOrder.items,
  //         tableId: this.processingOrder.tableId,
  //         userId: this.loginService.getUser(null).id,
  //         total: this.total
  //       };
  //       this.orderService.createOrder(body)
  //         .subscribe(res => {
  //           this.showAlert();
  //           this.tbpOrderService.delete(this.table.id)
  //             .subscribe(res => {
  //               this.tbpOrderService.setStatus(this.table.id, 1)
  //                 .subscribe(res => {
  //                   this.currentOrderService.setCurrenOrder(null);
  //                   this.navCtr.push(TablesComponent);
  //                 }, error2 => {
  //                   console.log('update status of table fail');
  //                 });
  //             }, error2 => {
  //               console.log('delete processing order fail');
  //             });
  //         }, error2 => {
  //           console.log('save order fail!');
  //         });
  //     }, error2 => {
  //       console.log('not found order by tableId');
  //     })
  // }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.table.name + ' đã được thanh toán',
      buttons: ['OK']
    });
    alert.present();
  }
}
