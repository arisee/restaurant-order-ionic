import {Injectable} from "@angular/core";
import {DISHES} from "../../dishes/shared/mock-dishs";
import {OrderItem} from "./order-item.model";
import {ORDERSITEM} from "./mock-order-item";
import {Dish} from "../../dishes/shared/dish.model";
@Injectable()
export class OrderItemService{
  ORDERITEM : Array<OrderItem>;
  constructor(){
    this.ORDERITEM = ORDERSITEM;
  }

  getDishs(){
    return Promise.resolve(DISHES);
  }

  getOrdersItem(){
    return Promise.resolve(ORDERSITEM);
  }

  save(dish:Dish,description:string,quantity:number){
    let ori : OrderItem = new OrderItem();
    let i = 1;
    ori.id = i;
    i+=1;
    ori.dish = dish;
    ori.description = description;
    ori.quantity = quantity;
    this.ORDERITEM.push(ori);
    return this.ORDERITEM;
  }
}
