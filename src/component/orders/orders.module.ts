import {NgModule} from "@angular/core";
import {OrderComponent} from "./orders.component";
import {IonicModule} from "ionic-angular";
import {OrderItemComponent} from "./order-item/order-item.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {OrderItemService} from "./shared/order-item.service";
import {DishesModule} from "../dishes/dishes.module";

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent,
    OrderFormComponent,
  ],
  imports: [
    IonicModule.forRoot(OrderComponent),
    DishesModule
  ],
  entryComponents: [
    OrderComponent,
    OrderItemComponent,
    OrderFormComponent
  ],
  providers: [
    OrderItemService
  ]
})

export class OrderModule {
}
