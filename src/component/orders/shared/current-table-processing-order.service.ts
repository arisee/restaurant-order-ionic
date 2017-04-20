import {Injectable} from "@angular/core";
import {TableProcessingOrder} from "./table-processing-order.model";
import {ProcessingOrderItem} from "./processing-order-item.model";
import {TableProcessingOrdersServive} from "./table-processing-order.service";
import {OrderStatus} from "./order-status.enum";
import {Table} from "../../tables/shared/table.model";
import {Dish} from "../../dishes/shared/dish.model";

@Injectable()
export class CurrentTableProcessingOrderService {
  order: TableProcessingOrder = null;
  constructor(public tableProcessingOrderService: TableProcessingOrdersServive) {
  }

  get(table: Table) {
    if (this.order == null || this.order.table.id != table.id) {
      this.order = this.tableProcessingOrderService.getTableProcessingOrder(table.id);

      if (this.order == null) {
        this.order = new TableProcessingOrder();
        this.order.userId = 1;
        this.order.table = table;
      }
    }
    return this.order;
  }

  addOrderItem(dish: Dish, table: Table, description: string, quantiy: number) {
    let pord: ProcessingOrderItem = null;
    let list = this.order.processingOrderItem;
    for(let i = 0;i<list.length;i++){
      if(list[i].dish.id == dish.id && list[i].status == 3){
        pord = list[i];
        break;
      }
    }

    if (pord == null) {
      pord = new ProcessingOrderItem();
      pord.quantity = 0;
      pord.status = OrderStatus.NOT_DOING;
      pord.description = "";
      pord.dish = dish;
      this.order.processingOrderItem.push(pord);
    }
    pord.quantity += quantiy;
    pord.description = description;
  }

  addCustomerName(customerName: string) {
    this.order.customerName = customerName;
  }

  delete(id: number, tableID: number) {
    this.order.processingOrderItem.splice(id, 1);
  }
}

