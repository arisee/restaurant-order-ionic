import {Component} from "@angular/core";
import {ReservesService} from "./shared/reserves.service";
import {Reserve} from "./shared/reserve.model";
import {ReserveFormComponent} from "./reserve-form/reserve-form.component";
import {NavParams} from "ionic-angular";
@Component({
  selector: "reserves-component",
  templateUrl: "reserves.component.html"
})

export class ReservesComponent {
  reserves: Reserve[] = [];
  pushPageForm: any
  reserve = {};

  constructor(public reservesService: ReservesService,
              public navParams: NavParams) {
    this.pushPageForm = ReserveFormComponent;
    this.reserve = navParams.get('reserve');
  }

  ionViewWillEnter() {
    this.reservesService.getReserve()
      .then(reserves => this.reserves = reserves);
  }

}
