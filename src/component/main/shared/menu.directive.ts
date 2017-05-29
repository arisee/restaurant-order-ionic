import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TablesComponent } from "../../tables/tables.component";
import { DishesComponent } from "../../dishes/dishes.component";
import { ReservesComponent } from "../../reserves/reserves.component";
import { User } from "./user.model";
import { LoginService } from "./login.service";
@Component({
  selector: "menu-directive",
  templateUrl: "menu.directive.html"
})

export class MenuDirective {
  pushReservesPage: any;
  user: User;

  constructor(public navCtrl: NavController,
              public loginSevice: LoginService) {
    this.pushReservesPage = ReservesComponent;
    this.user = this.loginSevice.getUser(null);
  }

  pushTablePage() {
    this.navCtrl.push(TablesComponent);
  }

  pushListDish() {
    this.navCtrl.push(DishesComponent);
  }
}
