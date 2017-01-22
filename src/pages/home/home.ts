import { Component } from '@angular/core';

import {NavController, MenuController} from 'ionic-angular';

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

}
