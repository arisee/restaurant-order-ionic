import { Component } from "@angular/core";
import { TableService } from "./shared/table.service";
import "rxjs/add/operator/map";
import { NavController } from "ionic-angular";
import { Table } from "./shared/table.model";

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
  }

  ionViewWillEnter() {
    console.log('Table Component Page');
    this.tableService.getTables()
      .subscribe(tables => {
        this.tables = tables;
      });
  }
}
