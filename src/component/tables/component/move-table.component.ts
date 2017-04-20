import {Component} from "@angular/core";
import {Table} from "../shared/table.model";
import {NavParams, NavController, AlertController} from "ionic-angular";
import {TableService} from "../shared/table.service";
import {TablesComponent} from "../tables.component";
import {TableProcessingOrdersServive} from "../../orders/shared/table-processing-order.service";
@Component({
  selector: 'move-component',
  templateUrl:'move-table.component.html'
})

export class MoveTableComponent{
  table: Table;
  tables: Table[]= [];
  tBDestination: Table;
  constructor(public navParam: NavParams,
              public tableService: TableService,
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              public proOrderService: TableProcessingOrdersServive){
    this.table = this.navParam.get('table');
  }

  ionViewWillEnter(){
    this.tables = this.tableService.getTables();
  }

  move(){
    if(this.tBDestination != null){
      let desOrder = this.proOrderService.getTableProcessingOrder(this.tBDestination.id);
      if(desOrder != null){
        this.showAlert2();
      }else{
        this.tableService.move(this.table.id,this.tBDestination.id);
        this.navCtrl.push(TablesComponent);
      }
    }else{
      this.showAlert1();
    }
  }

  showAlert1() {
    let alert = this.alertCtrl.create({
      title: 'Lỗi!',
      subTitle: 'Chọn bàn muốn chuyển tới!',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Lỗi!',
      subTitle: 'Bàn đã có order rồi!!',
      buttons: ['OK']
    });
    alert.present();
  }
}
