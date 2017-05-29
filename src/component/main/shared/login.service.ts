import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user.model";
@Injectable()
export class LoginService {
  user: User;

  constructor(private http: Http) {
  }

  login(body: any) {
    return this.http.post('/api/users', body)
      .map(res => res.json());
  }

  getUser(user){
    if(user !== null){
      return this.user = user;
    }else{
      return this.user;
    }
  }
}
