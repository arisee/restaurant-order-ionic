import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TablesComponent} from "../../tables/tables.component";
import {DishesComponent} from "../../dishes/dishes.component";
import {ReservesComponent} from "../../reserves/reserves.component";
@Component({
  selector:"menu-directive",
  templateUrl:"menu.directive.html"
})

export class MenuDirective{
  pushReservesPage : any;
  constructor(public navCtrl: NavController) {
    this.pushReservesPage = ReservesComponent;
  }

  pushTablePage(){
    this.navCtrl.push(TablesComponent);
  }

  pushListDish(){
    this.navCtrl.push(DishesComponent);
  }

}
