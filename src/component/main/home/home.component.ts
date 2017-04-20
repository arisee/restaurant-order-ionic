import {Component} from "@angular/core";
import {MenuController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {
  constructor(public menuCrl: MenuController){}

  openMenu(){
    this.menuCrl.toggle();
  }
}
