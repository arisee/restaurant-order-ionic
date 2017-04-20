import {Table} from "../../tables/shared/table.model";
import {ProcessingOrderItem} from "./processing-order-item.model";
export class TableProcessingOrder {
  table: Table;
  processingOrderItem: ProcessingOrderItem[];
  userId: number;
  customerName: string;
  dateTime: Date;

  constructor() {
    this.processingOrderItem = [];
    this.customerName = "";
  }
}
