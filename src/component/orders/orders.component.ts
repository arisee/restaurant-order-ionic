import { Component, ViewChild } from "@angular/core";
import { AlertController, Navbar, NavController, NavParams, Platform } from "ionic-angular";
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
  phone: string = "";
  processingOrderItem = [];
  @ViewChild('backButton') navBar: Navbar;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public currentTableProcessingOrderSerive: CurrentTableProcessingOrderService,
              public tableProcessingOrdersService: TableProcessingOrdersServive,
              public tableService: TableService,
              public alertCtrl: AlertController,
              public platform: Platform) {
    this.pushTablePage = TablesComponent;
    this.table = this.navParams.get('table');
    this.getOrder();
  }

  getOrder() {
    this.tableProcessingOrdersService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        this.tableProcessingOrder = res;
        this.customerName = this.tableProcessingOrder.customerName;
        this.phone = this.tableProcessingOrder.phone;
      }, error2 => {
        let order: TableProcessingOrder = new TableProcessingOrder();
        order.tableId = this.table.id;
        order.customerName = "";
        order.phone = "";
        this.currentTableProcessingOrderSerive.setCurrenOrder(order);
        this.tableProcessingOrder = this.currentTableProcessingOrderSerive.getCurrenOrder();
      })
  }

  ionViewDidEnter() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(TablesComponent);
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  takeMeBack() {
    this.navCtrl.push(TablesComponent);
  }

  pushMenuPage() {
    this.navCtrl.push(OrderFormComponent, {
      table: this.table,
      tableProcessingOrder: this.tableProcessingOrder
    });
  }

  pushTablesPage() {
    this.navCtrl.push(TablesComponent);
  }

  deleteItem(id: number) {
    this.tableProcessingOrdersService.deteleItem(this.table.id, id)
      .subscribe(res => {
        this.tableProcessingOrdersService.getPsOrderByTableId(this.table.id)
          .subscribe(res => {
            this.tableProcessingOrder = res;
            if (res.items.length == 0) {
              this.tableProcessingOrdersService.delete(this.table.id)
                .subscribe(res => {
                  this.tableService.setStatus(this.table.id, 1)
                    .subscribe(res => {
                      this.tableProcessingOrdersService.getPsOrderByTableId(this.table.id)
                        .subscribe(res => {
                          console.log('load order success');
                        }, error2 => {
                          console.log('not found order');
                        })
                    }, error2 => {
                      console.log('update status table fail');
                    });
                }, error2 => {
                  console.log('delete order fail');
                })
            }
          }, error2 => {
            console.log('load order fail!');
          })
      }, error2 => {
        console.log('delete item fail!');
      });
  }

  setInformationCustomer() {
    this.tableProcessingOrdersService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        if (this.customerName == "" || this.phone == "") {
          let alert = this.alertCtrl.create({
            title: 'Thông tin khách hàng',
            inputs: [
              {
                value: this.customerName,
                name: 'customerName',
                placeholder: 'Nhập tên khách hàng'
              },
              {
                value: this.phone,
                name: 'phone',
                placeholder: 'Nhập số điện thoại'
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
                  this.phone = data.phone;
                  let body = {
                    tableId : this.tableProcessingOrder.tableId,
                    customerName: data.customerName,
                    phone: data.phone,
                    status: this.tableProcessingOrder.status,
                    items: this.tableProcessingOrder.items
                  };
                  this.tableProcessingOrdersService.updateOrder(this.table.id, body)
                    .subscribe(res =>{
                      this.customerName = data.customerName;
                      this.phone = data.phone;
                    },error2 => {
                      console.log('update information customer fail');
                    });
                }
              }
            ],
          });
          alert.present();
        } else {
          this.updateInformationCustomer();
        }
      },error2 => {
        this.orderNull();
      })
  }

  updateInformationCustomer() {
    let alert = this.alertCtrl.create({
      title: 'Thông tin khách hàng',
      inputs: [
        {
          value: this.customerName,
          name: 'customerName',
          placeholder: 'Nhập tên khách hàng'
        },
        {
          value: this.phone,
          name: 'phone',
          placeholder: 'Nhập số điện thoại'
        }
      ],
      buttons: [
        {
          value: this.customerName,
          text: 'Hủy',
          role: 'cancel'
        },
        {
          value: this.phone,
          text: 'Sửa',
          handler: data => {
            this.phone = data.phone;
            let body = {
              tableId : this.tableProcessingOrder.tableId,
              customerName: data.customerName,
              phone: data.phone,
              status: this.tableProcessingOrder.status,
              items: this.tableProcessingOrder.items
            };
            this.tableProcessingOrdersService.updateOrder(this.table.id, body)
              .subscribe(res =>{
                this.customerName = data.customerName;
                this.phone = data.phone;
              },error2 => {
                console.log('update information customer fail');
              });
          }
        }
      ],
    });
    alert.present();
  }

  informationCutomerNull() {
    let alert = this.alertCtrl.create({
      subTitle: 'Thông tin khách hàng trống',
      buttons: ['OK']
    });
    alert.present();
  }

  orderNull() {
    let alert = this.alertCtrl.create({
      subTitle: 'Vui lòng chọn món trước',
      buttons: ['OK']
    });
    alert.present();
  }
}
