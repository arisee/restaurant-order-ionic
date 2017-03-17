import {Component, Input} from "@angular/core";
import {Table} from "../shared/table.model";
import {ReservesComponent} from "../../reserves/reserves.component";
import {OrderComponent} from "../../orders/orders.component";
@Component({
  selector: 'table-directive',
  templateUrl: 'table.directive.html'
})
export class TableDirective {
  pushReservePage : any;
  pushOrderPage : any;
  @Input('item') table: Table;
  constructor() {
    this.pushReservePage = ReservesComponent;
    this.pushOrderPage = OrderComponent;
  }
}

