import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Dish} from "./shared/dish.model";
import {DishesService} from "./shared/dishes.service";

@Component({
  selector: "dishes-component",
  templateUrl: "dishes.component.html"
})
export class DishesComponent {
  counterValue = 0;
  dishes: Dish[] = [];
  filter = {
    status: "",
    category: "",
    search:""
  };

  constructor(public dishesService: DishesService,
              public params: NavParams) {
  }

  ionViewWillEnter() {
    console.log('dishes-component');
    this.dishesService.getDish()
      .subscribe(dishes => {
        this.dishes = dishes;
      })
    // this.dishesService.getDish()
    //   .then(dishes => this.dishes = dishes);

  }
}
