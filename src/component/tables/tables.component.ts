import {Component} from "@angular/core";
import {TableService} from "./shared/table.service";
import 'rxjs/add/operator/map';
import {NavController, ActionSheetController} from "ionic-angular";
import {OrderComponent} from "../orders/order.component";
import {Table} from "./shared/table.model";
import {SearchComponent} from "../main/search/search.component";
@Component({
  selector: 'table-component',
  templateUrl: 'table.html'
})

export class TableComponent {
  tables: Table[] = [];

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public tableService: TableService) {}

  ionViewWillEnter() {
    this.tableService.getTables()
      .then(tables => this.tables = tables);
    console.log('ionViewDidLoad TablePage');
  }

  pushSearch() {
    this.navCtrl.push(SearchComponent);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Tùy chọn',
      buttons: [
        {
          text: 'Order',
          role: 'Order',
          handler: () => {
            this.navCtrl.push(OrderComponent);
          }
        }
      ]
    });
    actionSheet.present();
  }
}
