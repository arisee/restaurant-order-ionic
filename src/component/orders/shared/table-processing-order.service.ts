import { Injectable } from "@angular/core";
import { TABLE_PROCESSING_ORDERS } from "./mock-table-processing-order";
import { TableProcessingOrder } from "./table-processing-order.model";
import { Http } from "@angular/http";
import { AppSettings } from "../../main/shared/AppSettings";
@Injectable()
export class TableProcessingOrdersServive {
  TABLE_PROCESSING_ORDERS: Array<TableProcessingOrder>;
  processingOrder: TableProcessingOrder = null;

  constructor(public http: Http) {
    this.TABLE_PROCESSING_ORDERS = TABLE_PROCESSING_ORDERS
  }

  findAllOrder() {
    return this.http.get(AppSettings.API_URL + '/api/processingOrders')
      .map(res => res.json());
  }

  setStatus(tableId: number, status: number) {
    return this.http.post(AppSettings.API_URL + '/api/tables/' + tableId + '/status/' + status, {})
  }

  addOrder(body) {
    return this.http.post(AppSettings.API_URL + '/api/processingOrders', body);
  }

  updateOrder(tableId, body) {
    return this.http.post(AppSettings.API_URL + '/api/processingOrders/' + tableId, body);
  }

  addItem(tableId, body) {
    return this.http.post(AppSettings.API_URL + '/api/processingOrders/addItem/' + tableId, body);
  }

  deteleItem(tableId: number, id: number) {
    return this.http.delete(AppSettings.API_URL + '/api/processingOrdersItem/' + tableId + '/id/' + id);
  }

  delete(tableId: number) {
    return this.http.delete(AppSettings.API_URL + '/api/processingOrders/' + tableId);
  }

  addCustomerName(tableId: number, customerName: string) {
    return this.http.post(AppSettings.API_URL + '/api/processingOrders/' + tableId + '/customer/' + customerName, {})
      .map(res => res.json());
  }

  getPsOrderByTableId(tableId: number) {
    return this.http.get(AppSettings.API_URL + '/api/processingOrders/' + tableId)
      .map(res => {
        return res.json()
      });
  }

  createProcessingOrder(tableId: number) {
    let body = {
      tableId: tableId
    };
    return this.http.post(AppSettings.API_URL + '/api/processingOrdes', body)
      .map(res => res.json())
      .subscribe(
        res => alert('successful'),
        error2 => alert('fail')
      );
  }

  move(preTableId: number, disTable: number) {
    return this.http.post(AppSettings.API_URL + '/api/processingOrders/' + preTableId + "/disTable/" + disTable, {});
  }

  total(tableId: number) {
    return this.http.get(AppSettings.API_URL + '/api/processingOrders/total/' + tableId)
      .map(res => res.json());
  }

  pay(tableId: number, userId: number) {
    return this.http.post(AppSettings.API_URL + '/api/processingOrders/' + tableId + "/user/" + userId, {})
      .map(res => res.json());
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
}
