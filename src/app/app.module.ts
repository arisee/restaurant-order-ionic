import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {HomePage} from "../component/main/home/home.component";
import {TableModule} from "../component/tables/tables.module";
import {LoginPage} from "../component/main/login/login.component";
import {SearchComponent} from "../component/main/search/search.component";
import {OrderModule} from "../component/orders/orders.module";
import {LoginService} from "../component/main/login/login.service";
import {HomeService} from "../component/main/home/home.service";
import {DishesModule} from "../component/dishes/dishes.module";
import {ReservesModule} from "../component/reserves/reserves.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TableModule,
    OrderModule,
    DishesModule,
    ReservesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    HomeService
  ]
})
export class AppModule {
}
