import {Injectable} from "@angular/core";
import {Order} from "./order.model";
import {ORDERS} from "./mock-orders";
import {OrderItem} from "./order-item.model";
import {Table} from "../../tables/shared/table.model";
import {OrderStatus} from "./order-status.enum";
@Injectable()
export class OrderService{
  ORDERS: Array<Order>;

  constructor(){
    this.ORDERS = ORDERS;
  }

  getOrders(tableID:Number){
    let rs = [];

    this.ORDERS.forEach((order) =>{
      let isFilter = false;
      if(tableID != null && order.table.id != tableID){
        isFilter = true;
      }
      if(!isFilter){
        rs.push(order);
      }
    });
    return rs;
  }

  save(ordersItem: OrderItem[],userId:number,table:Table,customerName:string,dateTime:Date){
    let ord : Order  = new Order()
    ord.id = 1;
    ord.id +=1;
    ord.customerName = customerName;
    ord.userId = userId;
    ord.orderItem = ordersItem;
    ord.table = table;
    ord.dateTime = dateTime;
    ord.status = OrderStatus.NOT_AVAILABLE
    this.ORDERS.push(ord);
    return this.ORDERS;
  }
}
