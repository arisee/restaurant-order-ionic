import {Component} from "@angular/core";
import {NavController, NavParams, AlertController} from "ionic-angular";
import {OrderFormComponent} from "./order-form/order-form.component";
import {Table} from "../tables/shared/table.model";
import {TablesComponent} from "../tables/tables.component";
import {TableProcessingOrder} from "./shared/table-processing-order.model";
import {CurrentTableProcessingOrderService} from "./shared/current-table-processing-order.service";
import {TableProcessingOrdersServive} from "./shared/table-processing-order.service";
import {TableService} from "../tables/shared/table.service";

@Component({
  selector: 'page-order',
  templateUrl: 'orders.component.html'
})

export class OrderComponent {
  table: Table;
  tableProcessingOrder: TableProcessingOrder;
  isDisplay = false;
  pushTablePage : any;
  customerName: string = "";
  processingOrderItem = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public currentTableProcessingOrderSerive: CurrentTableProcessingOrderService,
              public tableProcessingOrdersService: TableProcessingOrdersServive,
              public alertCtrl: AlertController,
              public tableService:TableService) {
    this.pushTablePage = TablesComponent;
    this.table = this.navParams.get('table');
    this.tableProcessingOrder = this.currentTableProcessingOrderSerive.get(this.table);
    if (this.tableProcessingOrder != null) {
      this.processingOrderItem = this.tableProcessingOrder.processingOrderItem
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');

  }

  pushMenuPage() {
    this.navCtrl.push(OrderFormComponent, {
      table: this.table
    });
  }

  pushTablesPage() {
    this.navCtrl.push(TablesComponent);
  }

  save() {
    if (this.tableProcessingOrder != null) {
      this.tableProcessingOrdersService.save(this.tableProcessingOrder,this.table);
    } else {
      console.log('tableProcessingOrder is null')
    }
    this.navCtrl.push(TablesComponent);
  }

  deleteItem(index: number) {
    this.currentTableProcessingOrderSerive.delete(index, this.table.id);
  }

  setCustomerName() {
    let alert = this.alertCtrl.create({
      title: 'Tên khách hàng',
      inputs: [
        {
          name: 'customerName',
          placeholder: 'Nhập tên khách hàng'
        }
      ],
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel'
        },
        {
          text:'Thêm',
          handler:data =>{
            this.currentTableProcessingOrderSerive.addCustomerName(data.customerName);
          }
        }
      ],
    });
    alert.present();
  }

}
