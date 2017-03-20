import {Component, Input} from "@angular/core";
import {Table} from "../shared/table.model";
import {ReservesComponent} from "../../reserves/reserves.component";
import {OrderComponent} from "../../orders/orders.component";
import {NavController} from "ionic-angular";
import {ReservesService} from "../../reserves/shared/reserves.service";
@Component({
  selector: 'table-directive',
  templateUrl: 'table.directive.html'
})
export class TableDirective {
  pushOrderPage : any;
  @Input('item') table: Table;
  constructor(public navCtrl: NavController, public reserveService: ReservesService) {
    this.pushOrderPage = OrderComponent;
  }

  getReserveByTableID(tableID){
    this.navCtrl.push(ReservesComponent,{
      tableID:tableID
    });
  }
}

