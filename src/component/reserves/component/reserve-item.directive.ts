import {Component, Input} from "@angular/core";
import {Reserve} from "../shared/reserve.model";
@Component({
  selector:'reserve-directive',
  templateUrl:'reserve-item.directive.html'
})

export class ReserveItemDirective{
  @Input('item') reserve:Reserve
}
