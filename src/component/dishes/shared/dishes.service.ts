import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class DishesService{
  constructor(public http: Http){
  }

  getDish(){
    // return Promise.resolve(DISHES);
    return this.http.get('/api/dishes')
      .map(res => res.json());
  }

}
