import { Component } from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {TableComponent} from "../../tables/tables.component";
import {DishsComponent} from "../../dishs/dishs.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public menuCrl: MenuController) {
  }

  openMenu(){
    this.menuCrl.toggle();
  }

  pushTablePage(){
    this.navCtrl.push(TableComponent);
  }

  pushDishPage(){
    this.navCtrl.push(DishsComponent);
  }

}
