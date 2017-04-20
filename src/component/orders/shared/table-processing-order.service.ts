import {Injectable} from "@angular/core";
import {TABLE_PROCESSING_ORDERS} from "./mock-table-processing-order";
import {TableProcessingOrder} from "./table-processing-order.model";
import {TableStatus} from "../../tables/shared/table-status.enum";
import {Table} from "../../tables/shared/table.model";
@Injectable()
export class TableProcessingOrdersServive {
  TABLE_PROCESSING_ORDERS: Array<TableProcessingOrder>;

  constructor() {
    this.TABLE_PROCESSING_ORDERS = TABLE_PROCESSING_ORDERS
  }

  getTableProcessingOrder(tableID: number) {
    let tableProcessingOrder = null;
    let list = this.TABLE_PROCESSING_ORDERS;
    for (let i = 0; i < list.length; i++) {
      if (list[i].table.id != null && list[i].table.id == tableID) {
        tableProcessingOrder = list[i];
        break;
      }
    }
    return tableProcessingOrder;
  }

  save(order: TableProcessingOrder, table: Table) {
    table.status = TableStatus.NOT_AVAILABLE;
    TABLE_PROCESSING_ORDERS.push(order);
  }

  move(srcTable: Table, disTable: Table) {
    let orders = this.TABLE_PROCESSING_ORDERS;
    if (orders != null) {
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].table.id == srcTable.id) {
          orders[i].table = disTable;
        }
      }
    }
  }
}
