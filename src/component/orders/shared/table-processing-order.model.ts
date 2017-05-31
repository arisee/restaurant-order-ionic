import { ProcessingOrderItem } from "./processing-order-item.model";
export class TableProcessingOrder {
  tableId : number;
  items: ProcessingOrderItem[];
  customerName: string;
  status : number;
  createdDate: Date;

  constructor() {
    this.items = [];
    this.customerName = "";
  }
}
