import { Component } from "@angular/core";
import { Table } from "../shared/table.model";
import { NavParams } from "ionic-angular";
import { TableProcessingOrdersServive } from "../../orders/shared/table-processing-order.service";
import { ProcessingOrderItem } from "../../orders/shared/processing-order-item.model";
@Component({
  selector: 'pay-table-component',
  templateUrl: 'pay-table.component.html'
})

export class PayTableComponent {
  table: Table;
  items: ProcessingOrderItem [] = [];
  total = 0;

  constructor(public navParms: NavParams,
              public tbpOrderService: TableProcessingOrdersServive) {
    this.table = this.navParms.get('table');
    this.getOrderItem();
    this.totalAmountPayable();
  }

  ionViewDidLoad() {
    console.log('pay order component');
  }

  totalAmountPayable() {
    this.tbpOrderService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        let _item : ProcessingOrderItem [] = res.items;
        for (let i = 0; i < _item.length; i++) {
          this.total += (_item[i].quantity * parseInt(_item[i].dish.price));
        }
      }, error2 => {
        console.log('error findAll Order');
      })
  }

  getOrderItem() {
    this.tbpOrderService.getPsOrderByTableId(this.table.id)
      .subscribe(res => {
        let _item: ProcessingOrderItem [] = res.items;
        this.items = [];
        for (let i = 0; i < _item.length; i++) {
          let isJoin = false;
          for (let j = 0; j < this.items.length; j++) {
            if (this.isJoin(_item[i], this.items[j])) {
              isJoin = true;
              this.items[j].quantity += _item[i].quantity;
            }
          }
          if (!isJoin) {
            this.items.push(_item[i]);
          }
        }
      }, error2 => {
        console.log('get order fail!');
      });
  }

  isJoin(item1: ProcessingOrderItem, item2: ProcessingOrderItem): boolean {
    return item1.dish.id == item2.dish.id;
  }
}
