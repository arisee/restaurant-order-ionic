import {NgModule} from "@angular/core";
import {TableDirective} from "./component/table.directive";
import {TableService} from "./shared/table.service";
import {IonicModule} from "ionic-angular";
import {TablesComponent} from "./tables.component";
import {TablesStatusPipe} from "./component/status.pipe";
import {TablesSearchNamePipe} from "./component/search.pipe";
import {TableSearchLocationPipe} from "./component/search.location.pipe";
import {MoveTableComponent} from "./move-order/move-table.component";
import { PayTableComponent } from "./pay-order/pay-table.component";

@NgModule({
  declarations: [
    TableDirective,
    TablesComponent,
    TablesStatusPipe,
    TablesSearchNamePipe,
    TableSearchLocationPipe,
    MoveTableComponent,
    PayTableComponent
  ],
  imports:[
    IonicModule.forRoot(TablesComponent)
  ],
  entryComponents: [
    TableDirective,
    TablesComponent,
    MoveTableComponent,
    PayTableComponent
  ],
  providers:[
    TableService
  ]
})

export class TableModule {
}
