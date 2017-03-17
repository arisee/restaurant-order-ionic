import {Table} from "../../tables/shared/table.model";
export class Reserve {
  id: number;
  customerName: string;
  quantity:number;
  phone:string;
  dateTime: Date;
  table: Table;
}
