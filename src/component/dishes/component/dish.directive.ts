import {Component, Input} from "@angular/core";
import {Dish} from "../shared/dish.model";
@Component({
  selector: "dish-directive",
  templateUrl: "dish.directive.html"
})

export class DishDirective {
  @Input('item') dish: Dish;

  constructor() {
  }
}
