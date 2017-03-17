import {Component, Input} from "@angular/core";
import {Dish} from "../../dishes/shared/dish.model";

@Component({
  selector: "order-item-component",
  templateUrl: "order-item.component.html"
})

export class OrderItemComponent {
  @Input('item') dish: Dish;
  quantity = 0;
  constructor(){

  }

  addQuantity() {
    this.quantity+=1;
  }

  removeQuantity(){
    if (this.quantity <= 0){
      this.quantity ==0;
    }else{
      this.quantity-=1;
    }
  }


}
