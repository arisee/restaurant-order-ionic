import { Component, ViewChild } from "@angular/core";
import { Events, Nav, Platform } from "ionic-angular";
import { Splashscreen, StatusBar } from "ionic-native";

import { LoginPage } from "../component/main/login/login.component";
import { HomePage } from "../component/main/home/home.component";
import { TablesComponent } from "../component/tables/tables.component";
import { DishesComponent } from "../component/dishes/dishes.component";
import { ReservesComponent } from "../component/reserves/reserves.component";
import { LoginService } from "../component/main/shared/login.service";
import { User } from "../component/main/shared/user.model";


@Component({
  selector : 'app-component',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  pages: Array<{ title: string, component: any, icon: any }>;
  user : User;

  constructor(platform: Platform,
              public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.pages = [
      {title: 'Trang chủ', component: HomePage, icon: 'home'},
      {title: 'Danh sách bàn', component: TablesComponent, icon: 'grid'},
      {title: 'Danh sách món ăn', component: DishesComponent, icon: 'pizza'},
      {title: 'Danh sách đặt trước', component: ReservesComponent, icon: 'list-box'},
      {title: 'Đăng xuất', component: LoginPage, icon:'log-out'}
    ];
    events.subscribe('user:created', user => {
      this.user = user;
      // console.log(this.user.fullName);
      console.log('constructor app component2');
    });
    console.log('constructor app component');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
