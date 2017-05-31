import { Component } from "@angular/core";
import { AlertController, NavController, NavParams, Platform, Tab } from "ionic-angular";
import { OrderFormComponent } from "./order-form/order-form.component";
import { Table } from "../tables/shared/table.model";
import { TablesComponent } from "../tables/tables.component";
import { TableProcessingOrder } from "./shared/table-processing-order.model";
import { CurrentTableProcessingOrderService } from "./shared/current-table-processing-order.service";
import { TableProcessingOrdersServive } from "./shared/table-processing-order.service";
import { TableService } from "../tables/shared/table.service";

@Component({
  selector: 'page-order',
  templateUrl: 'orders.component.html'
})

export class OrderComponent {
  table: Table;
  tableProcessingOrder: TableProcessingOrder = null;

  isDisplay = false;
  pushTablePage: any;
  customerName: string = "";
  processingOrderItem = [];
  tabBarElement: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public currentTableProcessingOrderSerive: CurrentTableProcessingOrderService,
              public tableProcessingOrdersService: TableProcessingOrdersServive,
              public alertCtrl: AlertController,
              public tableService: TableService,
              public platform: Platform) {
    this.pushTablePage = TablesComponent;
    this.table = this.navParams.get('table');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar')

    if (this.currentTableProcessingOrderSerive.getCurrenOrder() != null &&
      this.currentTableProcessingOrderSerive.getCurrenOrder().tableId == this.table.id) {
      this.tableProcessingOrder = this.currentTableProcessingOrderSerive.getCurrenOrder();
      this.customerName = this.tableProcessingOrder.customerName;
    } else {
      this.tableProcessingOrdersService.getPsOrderByTableId(this.table.id)
        .subscribe(res => {
            this.currentTableProcessingOrderSerive.setCurrenOrder(res);
            this.tableProcessingOrder = this.currentTableProcessingOrderSerive.getCurrenOrder();
            this.customerName = this.tableProcessingOrder.customerName;
          }, error => {
            let order: TableProcessingOrder = new TableProcessingOrder();
            order.tableId = this.table.id;
            order.status = 0;
            order.customerName = "";
            this.currentTableProcessingOrderSerive.setCurrenOrder(order);
            this.tableProcessingOrder = this.currentTableProcessingOrderSerive.getCurrenOrder();
          }
        );
    }

  }

  // customBackButton() {
  //   this.platform.registerBackButtonAction(() => {
  //     let view = this.navCtrl.getActive();
  //     if(view.instance instanceof OrderComponent){
  //       this.navCtrl.push(TablesComponent);
  //     }else{
  //       this.navCtrl.pop();
  //     }
  //   })
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  takeMeBack() {
    this.navCtrl.push(TablesComponent);
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
    if (this.customerName != "") {
      if (this.tableProcessingOrder != null) {
        this.tableProcessingOrdersService.save(this.table.id, this.tableProcessingOrder);
      } else {
        console.log('tableProcessingOrder is null')
      }
      this.navCtrl.push(TablesComponent);
    } else {
      this.cutomerNameNull();
    }
  }

  deleteItem(index: number) {
    this.currentTableProcessingOrderSerive.delete(index, this.table.id);
  }

  setCustomerName() {
    if (this.customerName == "") {
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
            text: 'Thêm',
            handler: data => {
              this.customerName = data.customerName;
              this.currentTableProcessingOrderSerive.addCustomerName(data.customerName);
            }
          }
        ],
      });
      alert.present();
    } else {
      this.updateCustomerName();
    }
  }

  updateCustomerName() {
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
          text: 'Sửa',
          handler: data => {
            this.customerName = data.customerName;
            this.currentTableProcessingOrderSerive.addCustomerName(data.customerName);
          }
        }
      ],
    });
    alert.present();
  }

  cutomerNameNull() {
    let alert = this.alertCtrl.create({
      subTitle: 'Vui lòng nhập tên khách hàng',
      buttons: ['OK']
    });
    alert.present();
  }


}
