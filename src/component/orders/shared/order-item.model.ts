import {Dish} from "../../dishes/shared/dish.model";
export class OrderItem{
  id:number;
  dish:Dish;
  description:string;
  quantity:number;
}
