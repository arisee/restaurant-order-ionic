import { Injectable } from "@angular/core";
import { TABLES } from "./mock-table";
import { Table } from "./table.model";
import { CurrentTableProcessingOrderService } from "../../orders/shared/current-table-processing-order.service";
import { TableProcessingOrdersServive } from "../../orders/shared/table-processing-order.service";
import { Http } from "@angular/http";

@Injectable()
export class TableService {
  TABLES: Array<Table>;

  constructor(public currenOrder: CurrentTableProcessingOrderService,
              public proOrderService: TableProcessingOrdersServive,
              public http: Http) {
    this.TABLES = TABLES;
  }

  getTables() {
    return this.http.get('/api/tables')
      .map(res => res.json());
  }

  getById(tableId : number){
    return this.http.get('/api/tables/' + tableId)
      .map(res => res.json());
  }

  // getTableById(id: number) {
  //   let tables = TABLES;
  //   let table: Table;
  //   for (let i = 0; i < tables.length; i++) {
  //     if (id == tables[i].id) {
  //       table = new Table();
  //       table = tables[i];
  //       break;
  //     }
  //   }
  //   return table;
  // }

  move(srcTableID: number, desTableID: number) {
    // let srcTable = this.getTableById(srcTableID);
    // let desTable = this.getTableById(desTableID);
    this.proOrderService.move(srcTableID, desTableID);
    // srcTable.status = TableStatus.AVAILABLE;
    // desTable.status = TableStatus.NOT_AVAILABLE;
  }

  setStatus(tableId: number, status: number){
    return this.http.post('api/tables/' + tableId + '/status/' + status,{})
  }
}
