import {Pipe, PipeTransform} from "@angular/core";
import {Dish} from "../shared/dish.model";
@Pipe({
  name: 'statusPipe'
})
export class DishesStatusPipe implements PipeTransform {
  transform(dishes: Array<Dish>, args) {
    let rs = [];
    let status = args[0];
    if (dishes != null) {
      dishes.forEach((dish, index) => {
        if (status == null || dish.status == status) {
          rs.push(dish);
        }
      });
    } else {
      console.log('dishes null');
    }
    return rs;
  }
}
