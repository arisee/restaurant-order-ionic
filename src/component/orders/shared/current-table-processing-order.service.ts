import { Injectable } from "@angular/core";
import { TableProcessingOrder } from "./table-processing-order.model";
import { ProcessingOrderItem } from "./processing-order-item.model";
import { TableProcessingOrdersServive } from "./table-processing-order.service";
import { OrderStatus } from "./order-status.enum";
import { Table } from "../../tables/shared/table.model";
import { Dish } from "../../dishes/shared/dish.model";

@Injectable()
export class CurrentTableProcessingOrderService {
  order: TableProcessingOrder = null;

  constructor(public tableProcessingOrderService: TableProcessingOrdersServive) {
  }

  getCurrenOrder(){
    return this.order;
  }

  setCurrenOrder(order){
    return this.order = order;
  }

  addOrderItem(dish: Dish, description: string, quantiy: number) {
    let pord: ProcessingOrderItem = null;
    let list = this.order.items;
    for (let i = 0; i < list.length; i++) {
      if (list[i].dish.id == dish.id && list[i].status == 0 && list[i].description == description) {
        pord = list[i];
        break;
      }
    }

    if (pord == null) {
      pord = new ProcessingOrderItem();
      pord.quantity = 0;
      pord.status = 0;
      pord.description = "";
      pord.dish = dish;
      this.order.items.push(pord);
    }
    pord.quantity += quantiy;
    pord.description = description;
    console.log(this.order);
    return this.order;
  }

  addCustomerName(customerName: string) {
    this.order.customerName = customerName;
  }

  delete(id: number, tableID: number) {
    this.order.items.splice(id, 1);
  }
}

