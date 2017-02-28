import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {DishsComponent} from "./dishs.component";
import {DishDirective} from "./component/dish.directive";
@NgModule({
  declarations: [
    DishsComponent,
    DishDirective
  ],
  imports:[
    IonicModule.forRoot(DishsComponent)
  ],
  entryComponents:[
    DishsComponent,
    DishDirective
  ],
  providers:[]
})
export class DishsModule{

}
