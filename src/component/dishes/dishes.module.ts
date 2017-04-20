import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {DishDirective} from "./component/dish.directive";
import {DishesComponent} from "./dishes.component";
import {DishesService} from "./shared/dishes.service";
import {DishesStatusPipe} from "./component/status.pipe";
import {DishesCategoryPipe} from "./component/category.pipe";
import {DishesSearchPipe} from "./component/search.pipe";

@NgModule({
  declarations: [
    DishesComponent,
    DishDirective,
    DishesStatusPipe,
    DishesCategoryPipe,
    DishesSearchPipe
  ],
  imports: [
    IonicModule.forRoot(DishesComponent)
  ],
  entryComponents: [
    DishesComponent,
    DishDirective
  ],
  exports: [
    DishDirective,
    DishesSearchPipe
  ],
  providers: [
    DishesService
  ]
})
export class DishesModule {
}
