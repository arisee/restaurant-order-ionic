import { Component } from "@angular/core";
import { Table } from "../shared/table.model";
import { NavParams, NavController, AlertController } from "ionic-angular";
import { TableService } from "../shared/table.service";
import { TablesComponent } from "../tables.component";
import { TableProcessingOrdersServive } from "../../orders/shared/table-processing-order.service";
@Component({
  selector: 'move-component',
  templateUrl: 'move-table.component.html'
})

export class MoveTableComponent {
  table: Table;
  tables: Table[] = [];
  tBDestination: Table;

  constructor(public navParam: NavParams,
              public tableService: TableService,
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              public proOrderService: TableProcessingOrdersServive) {
    this.table = this.navParam.get('table');
  }

  ionViewWillEnter() {
    this.tableService.getTables().subscribe(res => {
      this.tables = res;
    })
  }

  move() {
    if (this.tBDestination != null) {
      this.proOrderService.move(this.table.id, this.tBDestination.id)
        .subscribe(res => {
          this.tableService.setStatus(this.table.id, 1)
            .subscribe(res => {
              this.tableService.setStatus(this.tBDestination.id, 0)
                .subscribe(res => {
                  this.navCtrl.push(TablesComponent);
                }, error2 => {
                  console.log('update status table fail!');
                })
            }, error2 => {
              console.log('update status table fail!');
            });
        }, error2 => {
          this.showAlert2();
        })
    } else {
      this.showAlert1();
    }
  }

  showAlert1() {
    let alert = this.alertCtrl.create({
      subTitle: 'Chọn bàn muốn chuyển tới!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    let alert = this.alertCtrl.create({
      subTitle: 'Bàn đã có order rồi!!',
      buttons: ['OK']
    });
    alert.present();
  }
}
