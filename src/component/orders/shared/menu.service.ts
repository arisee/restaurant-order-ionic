import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {DISHS} from "./mock-dishs";
import {Observable} from "rxjs";

@Injectable()
export class MenuService{
  constructor(public http: Http){
  }

  getDish(){
    return Promise.resolve(DISHS);
  }

  getDishContact(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(DISHS.find((dish) => dish.id == id))
        observer.complete();
      }, 3000);
    });
  }
}
