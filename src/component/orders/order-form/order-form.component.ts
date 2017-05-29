import {Component} from "@angular/core";
import {Dish} from "../../dishes/shared/dish.model";
import {OrderItemService} from "../shared/order-item.service";
import {NavController, NavParams} from "ionic-angular";
import {OrderItemComponent} from "../order-item/order-item.component";
import {Table} from "../../tables/shared/table.model";
import {TableProcessingOrder} from "../shared/table-processing-order.model";
import { DishesService } from "../../dishes/shared/dishes.service";
@Component({
  selector:"order-form",
  templateUrl:"order-form.component.html"
})
export class OrderFormComponent{
  dishs: Dish[] = [];
  table: Table;
  filter = {
    search:""
  };
  tableProcessingOrder: TableProcessingOrder;
  constructor(public orderItemService: OrderItemService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public dishesSevice : DishesService) {
    this.table = this.navParams.get('table');
    this.tableProcessingOrder = this.navParams.get('tableProcessingOrders');
  }

  ionViewWillEnter(){
    this.dishesSevice.getDish()
      .subscribe(dishes => {
        this.dishs = dishes;
      });
  }

  pushOrderItemPage(dish:Dish){
    this.navCtrl.push(OrderItemComponent,{
      dish:dish,
      table:this.table
    });
  }
}
