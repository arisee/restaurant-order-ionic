import {Component} from "@angular/core";
import {NavController, MenuController} from "ionic-angular";
import {TablesComponent} from "../../tables/tables.component";
import {DishesComponent} from "../../dishes/dishes.component";
import {ReservesComponent} from "../../reserves/reserves.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {
  pushReservesPage : any;
  constructor(public navCtrl: NavController,public menuCrl: MenuController) {
    this.pushReservesPage = ReservesComponent;
  }

  openMenu(){
    this.menuCrl.toggle();
  }

  pushTablePage(){
    this.navCtrl.push(TablesComponent);
  }

  pushListDish(){
    this.navCtrl.push(DishesComponent);
  }

}
