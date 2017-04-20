import {Injectable} from "@angular/core";
import {TABLES} from "./mock-table";
import {Table} from "./table.model";
import {TableStatus} from "./table-status.enum";
import {CurrentTableProcessingOrderService} from "../../orders/shared/current-table-processing-order.service";
import {TableProcessingOrdersServive} from "../../orders/shared/table-processing-order.service";

@Injectable()
export class TableService {
  TABLES: Array<Table>;

  constructor(public currenOrder: CurrentTableProcessingOrderService,
              public proOrderService: TableProcessingOrdersServive) {
    this.TABLES = TABLES;
  }

  getTables() {
    // return Promise.resolve(TABLES); // Rerurn về promise ( Thành công, Thất bại, Chắp vá )
    return this.TABLES;
  }

  getTableById(id: number) {
    let tables = TABLES;
    let table: Table;
    for (let i = 0; i < tables.length; i++) {
      if (id == tables[i].id) {
        table = new Table();
        table = tables[i];
        break;
      }
    }
    return table;
  }

  move(srcTableID: number, desTableID: number) {
    let srcTable = this.getTableById(srcTableID);
    let desTable = this.getTableById(desTableID);
    this.proOrderService.move(srcTable, desTable);
    srcTable.status = TableStatus.AVAILABLE;
    desTable.status = TableStatus.NOT_AVAILABLE;
  }
}
