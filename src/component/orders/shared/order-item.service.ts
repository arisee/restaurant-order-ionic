import {Injectable} from "@angular/core";
import {DISHES} from "../../dishes/shared/mock-dishs";
@Injectable()
export class OrderItemService{
  constructor(){
  }

  getDishs(){
    return Promise.resolve(DISHES);
  }
}
