import {NgModule} from "@angular/core";
import {HomePage} from "./home/home.component";
import {LoginPage} from "./login/login.component";
import {MenuDirective} from "./shared/menu.directive";
import {IonicModule} from "ionic-angular";
import {HomeService} from "./shared/home.service";
import {LoginService} from "./shared/login.service";
@NgModule({
  declarations:[
    HomePage,
    LoginPage,
    MenuDirective
  ],
  imports:[
    IonicModule.forRoot(HomePage)
  ],
  entryComponents:[
    HomePage,
    LoginPage,
    MenuDirective
  ],
  exports:[
    MenuDirective
  ],
  providers:[
    HomeService,
    LoginService
  ]
})

export class MainModule{
}
