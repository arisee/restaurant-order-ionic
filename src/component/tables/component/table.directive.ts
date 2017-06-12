import { Component, Input } from "@angular/core";
import { Table } from "../shared/table.model";
import { ReservesComponent } from "../../reserves/reserves.component";
import { OrderComponent } from "../../orders/orders.component";
import { AlertController, NavController } from "ionic-angular";
import { MoveTableComponent } from "../move-order/move-table.component";
import { PayTableComponent } from "../pay-order/pay-table.component";
import { TableProcessingOrdersServive } from "../../orders/shared/table-processing-order.service";
import { User } from "../../main/shared/user.model";
import { LoginService } from "../../main/shared/login.service";
import { TableProcessingOrder } from "../../orders/shared/table-processing-order.model";
@Component({
  selector: 'table-directive',
  templateUrl: 'table.directive.html'
})
export class TableDirective {
  @Input('item') table: Table;
  user : User;
  order : TableProcessingOrder;

  constructor(public navCtrl: NavController,
              public tableProcessingOrderService : TableProcessingOrdersServive,
              public alertCtrl : AlertController,
              public loginService : LoginService) {
    this.user = this.loginService.getUser(null);
    console.log(this.user.id);
    console.log(this.table);
  }

  ionViewDidLoad(){
    this.getOrder();
  }

  getReserveByTableID(tableID) {
    this.navCtrl.push(ReservesComponent, {
      tableID: tableID
    });
  }

  getOrder(){
    this.tableProcessingOrderService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        this.order = res;
      },error2 => {
        console.log('not found order by id');
      });
  }

  pushOrderPage() {
    this.tableProcessingOrderService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        if(res.userId == this.user.id){
          this.navCtrl.push(OrderComponent, {
            table: this.table
          });
        }else{
          this.alertError();
        }
      },error2 => {
        this.navCtrl.push(OrderComponent, {
          table: this.table
        });
      })
  }

  move() {
    this.navCtrl.push(MoveTableComponent, {
      table: this.table
    });
  }

  pay() {
    this.navCtrl.push(PayTableComponent,{
      table: this.table
    });
  }

  alertError() {
    let alert = this.alertCtrl.create({
      subTitle: 'Bàn đã có người đặt',
      buttons: ['OK']
    });
    alert.present();
  }
}

