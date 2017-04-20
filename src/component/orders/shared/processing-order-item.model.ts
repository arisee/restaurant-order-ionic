import {Dish} from "../../dishes/shared/dish.model";
import {OrderStatus} from "./order-status.enum";
export class ProcessingOrderItem{
  id:number;
  dish:Dish;
  description:string;
  quantity:number;
  status:OrderStatus
}
