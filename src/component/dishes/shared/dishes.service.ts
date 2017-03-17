import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {DISHES} from "./mock-dishs";

@Injectable()
export class DishesService{
  constructor(public http: Http){
  }

  getDish(){
    return Promise.resolve(DISHES);
  }

}
