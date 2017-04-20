import {NgModule} from "@angular/core";
import {OrderComponent} from "./orders.component";
import {IonicModule} from "ionic-angular";
import {OrderItemComponent} from "./order-item/order-item.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {OrderItemService} from "./shared/order-item.service";
import {DishesModule} from "../dishes/dishes.module";
import {OrderService} from "./shared/order.service";
import {TableProcessingOrdersServive} from "./shared/table-processing-order.service";
import {CurrentTableProcessingOrderService} from "./shared/current-table-processing-order.service";

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent,
    OrderFormComponent
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
    OrderService,
    OrderItemService,
    TableProcessingOrdersServive,
    CurrentTableProcessingOrderService
  ]
})

export class OrderModule {
}
