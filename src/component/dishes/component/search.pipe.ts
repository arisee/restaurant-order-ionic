import {Pipe, PipeTransform} from "@angular/core";
import {Dish} from "../shared/dish.model";
@Pipe({
  name: 'searchPipe'
})

export class DishesSearchPipe implements PipeTransform {
  transform(dishes: Array<Dish>, keySearch: string) {
    let rs = [];
    if (dishes != null) {
      if (keySearch != null && keySearch.trim() != "") {
        rs = dishes.filter((dish) => {
          return dish.name.toLowerCase().indexOf(keySearch.toLowerCase()) > -1;
        })
      } else {
        rs = dishes;
      }
    } else {
      console.log('dishes null');
    }
    return rs;
  }
}
