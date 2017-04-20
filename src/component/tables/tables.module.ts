import {NgModule} from "@angular/core";
import {TableDirective} from "./component/table.directive";
import {TableService} from "./shared/table.service";
import {IonicModule} from "ionic-angular";
import {TablesComponent} from "./tables.component";
import {TablesStatusPipe} from "./component/status.pipe";
import {TablesSearchNamePipe} from "./component/search.pipe";
import {TableSearchLocationPipe} from "./component/search.location.pipe";
import {MoveTableComponent} from "./component/move-table.component";

@NgModule({
  declarations: [
    TableDirective,
    TablesComponent,
    TablesStatusPipe,
    TablesSearchNamePipe,
    TableSearchLocationPipe,
    MoveTableComponent
  ],
  imports:[
    IonicModule.forRoot(TablesComponent)
  ],
  entryComponents: [
    TableDirective,
    TablesComponent,
    MoveTableComponent
  ],
  providers:[
    TableService
  ]
})

export class TableModule {
}
