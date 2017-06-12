import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { Http } from "@angular/http";
import { AppSettings } from "../../main/shared/AppSettings";
@Injectable()
export class OrderService{
  ORDERS: Array<Order>;

  constructor(public http : Http){
  }

  createOrder(body){
    return this.http.post(AppSettings.API_URL + '/api/orders',body)
      .map(res => res.json());
  }
  // getOrders(tableID:Number){
  //   let rs = [];
  //
  //   this.ORDERS.forEach((order) =>{
  //     let isFilter = false;
  //     if(tableID != null && order.table.id != tableID){
  //       isFilter = true;
  //     }
  //     if(!isFilter){
  //       rs.push(order);
  //     }
  //   });
  //   return rs;
  // }
}
