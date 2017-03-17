import {NgModule} from "@angular/core";
import {TableDirective} from "./component/table.directive";
import {TableService} from "./shared/table.service";
import {IonicModule} from "ionic-angular";
import {TablesComponent} from "./tables.component";
import {TablesStatusPipe} from "./component/status.pipe";
import {TablesSearchNamePipe} from "./component/search.pipe";
import {TableSearchLocationPipe} from "./component/search.location.pipe";

@NgModule({
  declarations: [
    TableDirective,
    TablesComponent,
    TablesStatusPipe,
    TablesSearchNamePipe,
    TableSearchLocationPipe
  ],
  imports:[
    IonicModule.forRoot(TablesComponent)
  ],
  entryComponents: [
    TableDirective,
    TablesComponent
  ],
  providers:[
    TableService
  ]
})

export class TableModule {
}
