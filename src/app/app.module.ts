import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";
import { TableModule } from "../component/tables/tables.module";
import { DishesModule } from "../component/dishes/dishes.module";
import { ReservesModule } from "../component/reserves/reserves.module";
import { MainModule } from "../component/main/main.module";
import { OrderModule } from "../component/orders/orders.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TableModule,
    MainModule,
    DishesModule,
    ReservesModule,
    OrderModule
  ],
  bootstrap: [IonicApp],
  exports:[],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
