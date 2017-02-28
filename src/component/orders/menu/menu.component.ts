import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {MenuService} from "../shared/menu.service";
import {Dish} from "../shared/dish.model";
import {OrderItemComponent} from "../order-item/order-item.component";

@Component({
  selector: "menu-component",
  templateUrl: "menu.html",
})
export class MenuComponent {
  dishs: Dish[] = [];
  pushPage: any;

  constructor(public menuService: MenuService,
              public params: NavParams) {
    this.pushPage = OrderItemComponent;
  }

  ionViewWillEnter() {
    this.menuService.getDish()
      .then(dishs => this.dishs = dishs);
  }
}

