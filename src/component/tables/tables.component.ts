import {Component} from "@angular/core";
import {TableService} from "./shared/table.service";
import "rxjs/add/operator/map";
import {NavController} from "ionic-angular";
import {Table} from "./shared/table.model";
import {TABLE_PROCESSING_ORDERS} from "../orders/shared/mock-table-processing-order";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.component.html'
})

export class TablesComponent {
  tables: Table[] = [];
  filter = {
    status: "",
    searchName: "",
    searchLocation: ""
  }


  constructor(public navCtrl: NavController,
              public tableService: TableService) {
    console.log('tableProcessingOrdersService: ' + TABLE_PROCESSING_ORDERS);
  }

  ionViewWillEnter() {
    this.tables = this.tableService.getTables();
    console.log('ionViewDidLoad TablePage');
  }
}
