import {OrderStatus} from "./order-status.enum";
import {Table} from "../../tables/shared/table.model";
import {OrderItem} from "./order-item.model";
export class Order{
  id: number;
  orderItem:OrderItem[];
  userId: number;
  table:Table;
  customerName:string;
  dateTime: Date;
  status:OrderStatus;
}
