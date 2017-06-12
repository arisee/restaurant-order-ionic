import { Component } from "@angular/core";
import { MenuController, NavController, NavParams } from "ionic-angular";
import { OutstandingDishComponent } from "../outstanding-dish/outstanding-dish.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {
  user: any;

  constructor(public menuCrl: MenuController,
              public navParams: NavParams,
              public navCtrl : NavController) {
    this.user = navParams.get('user');
  }

  openMenu() {
    this.menuCrl.toggle();
  }

  pushPage(categoryId : number){
    this.navCtrl.push(OutstandingDishComponent,{
      categoryId : categoryId
    });
  }
}
