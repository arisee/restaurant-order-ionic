import {Component} from "@angular/core";
import {Dish} from "../../dishes/shared/dish.model";
import {OrderItemService} from "../shared/order-item.service";
@Component({
  selector:"order-form",
  templateUrl:"order-form.component.html"
})
export class OrderFormComponent{
  dishs: Dish[] = []
  constructor(public orderItemService: OrderItemService) {
  }

  ionViewWillEnter(){
    this.orderItemService.getDishs()
      .then(dishs => this.dishs = dishs)
  }
}
