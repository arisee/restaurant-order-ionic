import {IonicModule} from "ionic-angular";
import {ReservesComponent} from "./reserves.component";
import {NgModule} from "@angular/core";
import {ReservesService} from "./shared/reserves.service";
import {ReserveFormComponent} from "./reserve-form/reserve-form.component";
import {ReserveItemDirective} from "./component/reserve-item.directive";
import {ValidatorDirective} from "./component/validator.drirective";

@NgModule({
  declarations: [
    ReservesComponent,
    ReserveFormComponent,
    ReserveItemDirective,
    ValidatorDirective
  ],
  imports: [
    IonicModule.forRoot(ReservesComponent)
  ],
  entryComponents: [
    ReservesComponent,
    ReserveFormComponent,
    ReserveItemDirective,
    ValidatorDirective
  ],
  exports: [],
  providers: [
    ReservesService
  ]
})

export class ReservesModule {
}

