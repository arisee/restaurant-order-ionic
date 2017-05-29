import { Component } from "@angular/core";
import { MenuController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {
  user: any;

  constructor(public menuCrl: MenuController,
              public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  openMenu() {
    this.menuCrl.toggle();
  }
}
