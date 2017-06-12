import { Injectable } from "@angular/core";
import { TABLES } from "./mock-table";
import { Table } from "./table.model";
import { TableProcessingOrdersServive } from "../../orders/shared/table-processing-order.service";
import { Http } from "@angular/http";
import { AppSettings } from "../../main/shared/AppSettings";

@Injectable()
export class TableService {
  TABLES: Array<Table>;

  constructor(public proOrderService: TableProcessingOrdersServive,
              public http: Http) {
    this.TABLES = TABLES;
  }

  getTables() {
    return this.http.get(AppSettings.API_URL + '/api/tables')
      .map(res => res.json());
  }

  getById(tableId: number) {
    return this.http.get(AppSettings.API_URL + '/api/tables/' + tableId)
      .map(res => res.json());
  }

  move(srcTableID: number, desTableID: number) {
    this.proOrderService.move(srcTableID, desTableID);
  }

  setStatus(tableId: number, status: number) {
    return this.http.post(AppSettings.API_URL + '/api/tables/' + tableId + '/status/' + status, {})
  }

  getByStatus(status : string){
    return this.http.get(AppSettings.API_URL + '/api/tables/status/' + status)
      .map(res => res.json());
  }
}
