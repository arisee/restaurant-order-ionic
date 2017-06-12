import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user.model";
import { AppSettings } from "./AppSettings";
@Injectable()
export class LoginService {
  user: User;

  constructor(private http: Http) {
  }

  login(body: any) {
    return this.http.post(AppSettings.API_URL + '/api/users', body)
      .map(res => res.json());
  }

  getUser(user) : User{
    if(user !== null){
      return this.user = user;
    }else{
      return this.user;
    }
  }
}
