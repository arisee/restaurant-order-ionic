import {NgModule} from "@angular/core";
import {OrderComponent} from "./order.component";
import {MenuService} from "./shared/menu.service";
import {MenuComponent} from "./menu/menu.component";
import {IonicModule} from "ionic-angular";
import {DishDirective} from "./dish/dish.directive";
import {OrderItemComponent} from "./order-item/order-item.component";
@NgModule({
  declarations: [
    OrderComponent,
    MenuComponent,
    OrderItemComponent,
    DishDirective
  ],
  imports: [
    IonicModule.forRoot(OrderComponent),
  ],
  entryComponents: [
    OrderComponent,
    MenuComponent,
    OrderItemComponent,
    DishDirective
  ],
  providers: [
    MenuService
  ]
})

export class OrderModule {
}
