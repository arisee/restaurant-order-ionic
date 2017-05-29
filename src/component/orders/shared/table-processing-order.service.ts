import { Injectable } from "@angular/core";
import { TABLE_PROCESSING_ORDERS } from "./mock-table-processing-order";
import { TableProcessingOrder } from "./table-processing-order.model";
import { Http } from "@angular/http";
@Injectable()
export class TableProcessingOrdersServive {
  TABLE_PROCESSING_ORDERS: Array<TableProcessingOrder>;
  processingOrder: TableProcessingOrder = null;

  constructor(public http: Http) {
    this.TABLE_PROCESSING_ORDERS = TABLE_PROCESSING_ORDERS
  }

  findAllOrder() {
    return this.http.get('/api/processingOrders')
      .map(res => res.json());
  }

  setStatus(tableId: number, status: number) {
    return this.http.post('api/tables/' + tableId + '/status/' + status, {})
  }

  addOrder(body) {
    this.http.post('api/processingOrders', body)
      .subscribe(res => {
        console.log('add order successful!');
      }, error2 => {
        console.log('add order fail!');
      })
  }

  updateOrder(tableId, body) {
    this.http.post('api/processingOrders/' + tableId, body)
      .subscribe(res => {
        console.log('update order successful!');
      }, error2 => {
        console.log('update order fail!');
      })
  }

  addCustomerName(tableId: number, customerName: string) {
    return this.http.post('api/processingOrders/' + tableId + '/customer/' + customerName, {})
      .map(res => res.json());
  }

  getPsOrderByTableId(tableId: number) {
    return this.http.get('/api/processingOrders/' + tableId)
      .map(res => {
        return res.json()
      });
  }

  createProcessingOrder(tableId: number) {
    let body = {
      tableId: tableId
    };
    return this.http.post('/api/processingOrdes', body)
      .map(res => res.json())
      .subscribe(
        res => alert('successful'),
        error2 => alert('fail')
      );
  }

  move(preTableId: number, disTable: number) {
    return this.http.post('/api/processingOrders/' + preTableId + "/disTable/" + disTable, {});
  }

  save(tableId: number, body: any) {
    this.getPsOrderByTableId(tableId)
      .subscribe(res => {
        this.updateOrder(tableId, body);
      }, error => {
        this.addOrder(body);
        this.setStatus(tableId, 0)
          .subscribe(res => {
          }, error2 => {
          });
      });
  }

  getTableProcessingOrder(tableID: number) {
    let tableProcessingOrder = null;
    let list = this.TABLE_PROCESSING_ORDERS;
    for (let i = 0; i < list.length; i++) {
      if (list[i].tableId != null && list[i].tableId == tableID) {
        tableProcessingOrder = list[i];
        break;
      }
    }
    return tableProcessingOrder;
  }

  // getOrder(): TableProcessingOrder {
  //   return this.processingOrder;
  // }

  // save(order: TableProcessingOrder, table: Table) {
  //   table.status = TableStatus.NOT_AVAILABLE;
  //   TABLE_PROCESSING_ORDERS.push(order);
  // }


}
