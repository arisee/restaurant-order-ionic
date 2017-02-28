import {NgModule} from "@angular/core";
import {TableDirective} from "./component/table.directive";
import {TableService} from "./shared/table.service";
import {TableComponent} from "./tables.component";
import {IonicModule} from "ionic-angular";
@NgModule({
  declarations: [
    TableDirective,
    TableComponent
  ],
  imports:[
    IonicModule.forRoot(TableComponent)
  ],
  entryComponents: [
    TableDirective,
    TableComponent
  ],
  providers:[
    TableService
  ]
})

export class TableModule {
}
