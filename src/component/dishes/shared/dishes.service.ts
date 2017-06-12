import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AppSettings } from "../../main/shared/AppSettings";

@Injectable()
export class DishesService{
  constructor(public http: Http){
  }

  getDish(){
    return this.http.get(AppSettings.API_URL + '/api/dishes')
      .map(res => res.json());
  }

}
