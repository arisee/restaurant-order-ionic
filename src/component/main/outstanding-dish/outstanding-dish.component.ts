import { Component } from "@angular/core";
import { OutstandingDishService } from "../shared/outstanding-dish.service";
import { Dish } from "../../dishes/shared/dish.model";
import { NavParams } from "ionic-angular";
@Component({
  selector: 'outstanding-dish-component',
  templateUrl: 'outstanding-dish.component.html'
})

export class OutstandingDishComponent {
  dishes : Dish[] = [];
  categoryId : number;
  constructor(public outstandingService : OutstandingDishService,
              public navParams: NavParams) {
    this.categoryId = this.navParams.get('categoryId');
    this.get(this.categoryId);
  }

  get(categoryId : number){
    this.outstandingService.get(categoryId)
      .subscribe(res => {
        this.dishes = res;
      },error2 => {
        console.log('not found dish by categoryId');
      });
  }
}
