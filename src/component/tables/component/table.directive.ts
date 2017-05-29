import { Component, Input } from "@angular/core";
import { Table } from "../shared/table.model";
import { ReservesComponent } from "../../reserves/reserves.component";
import { OrderComponent } from "../../orders/orders.component";
import { NavController } from "ionic-angular";
import { MoveTableComponent } from "../move-order/move-table.component";
import { PayTableComponent } from "../pay-order/pay-table.component";
@Component({
  selector: 'table-directive',
  templateUrl: 'table.directive.html'
})
export class TableDirective {
  @Input('item') table: Table;

  constructor(public navCtrl: NavController) {
  }

  getReserveByTableID(tableID) {
    this.navCtrl.push(ReservesComponent, {
      tableID: tableID
    });
  }

  pushOrderPage() {
    this.navCtrl.push(OrderComponent, {
      table: this.table
    });
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
}

