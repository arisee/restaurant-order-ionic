import {NgModule} from "@angular/core";
import {HomePage} from "./home/home.component";
import {LoginPage} from "./login/login.component";
import {IonicModule} from "ionic-angular";
import {HomeService} from "./shared/home.service";
import {LoginService} from "./shared/login.service";
import { OutstandingDishComponent } from "./outstanding-dish/outstanding-dish.component";
import { OutstandingDishService } from "./shared/outstanding-dish.service";
@NgModule({
  declarations:[
    HomePage,
    LoginPage,
    OutstandingDishComponent
  ],
  imports:[
    IonicModule.forRoot(HomePage)
  ],
  entryComponents:[
    HomePage,
    LoginPage,
    OutstandingDishComponent
  ],
  exports:[
  ],
  providers:[
    HomeService,
    LoginService,
    OutstandingDishService
  ]
})

export class MainModule{
}
