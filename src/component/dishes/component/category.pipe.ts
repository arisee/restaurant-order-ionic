import {Pipe, PipeTransform} from "@angular/core";
import {Dish} from "../shared/dish.model";
@Pipe({
  name: 'categoryPipe'
})
export class DishesCategoryPipe implements PipeTransform{
  transform(dishes: Array<Dish>, args) {
    let rs = [];
    let category = args[0];
    if (dishes != null) {
      dishes.forEach((dish) => {
        if (category == null || dish.categoryId == category) {
          rs.push(dish);
        }
      });
    } else {
      console.log('dishes null');
    }
    return rs;
  }
}
