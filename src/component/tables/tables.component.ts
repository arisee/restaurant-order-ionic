import {Component} from "@angular/core";
import {TableService} from "./shared/table.service";
import "rxjs/add/operator/map";
import {NavController} from "ionic-angular";
import {Table} from "./shared/table.model";
import {SearchComponent} from "../main/search/search.component";
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
    this.tableService.getTables()
      .then(tables => this.tables = tables);
    console.log('ionViewDidLoad TablePage');
  }

  pushSearch() {
    this.navCtrl.push(SearchComponent);
  }
}
