import {IonicModule} from "ionic-angular";
import {ReservesComponent} from "./reserves.component";
import {NgModule} from "@angular/core";
import {ReservesService} from "./shared/reserves.service";
import {ReserveFormComponent} from "./reserve-form/reserve-form.component";
import {ReserveItemDirective} from "./component/reserve-item.directive";

@NgModule({
  declarations: [
    ReservesComponent,
    ReserveFormComponent,
    ReserveItemDirective
  ],
  imports: [
    IonicModule.forRoot(ReservesComponent)
  ],
  entryComponents: [
    ReservesComponent,
    ReserveFormComponent,
    ReserveItemDirective
  ],
  exports: [],
  providers: [
    ReservesService
  ]
})

export class ReservesModule {
}

