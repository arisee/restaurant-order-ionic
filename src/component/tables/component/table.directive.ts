import {Component, Input} from "@angular/core";
import {Table} from "../shared/table.model";
@Component({
  selector: 'table-directive',
  templateUrl: 'table.directive.html'
})
export class TableDirective {
  @Input('item') table: Table;

  constructor() {

  }
}

