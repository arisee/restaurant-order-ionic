import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AppSettings } from "./AppSettings";
@Injectable()
export class OutstandingDishService {
  constructor(public http : Http) {
  }

  get(categoryId : number){
    return this.http.get(AppSettings.API_URL + '/api/dishes/categoryId/' + categoryId)
      .map(res => res.json());
  }
}
