import { Component } from "@angular/core";
import { ReservesService } from "./shared/reserves.service";
import { Reserve } from "./shared/reserve.model";
import { ReserveFormComponent } from "./reserve-form/reserve-form.component";
import { NavController, NavParams } from "ionic-angular";
import { TableService } from "../tables/shared/table.service";
@Component({
  selector: "reserves-component",
  templateUrl: "reserves.component.html"
})

export class ReservesComponent {
  reserves: Reserve[] = [];
  reserve = {};
  tableID: any;

  constructor(public reservesService: ReservesService,
              public navParams: NavParams,
              public tableSerive : TableService,
              public navCtrl : NavController) {
    this.reserve = navParams.get('reserve');
    this.tableID = navParams.get('tableID');
  }

  ionViewWillEnter() {
    // this.reserves = this.reservesService.getReserve(this.tableID, "");
    if (this.tableID != null) {
      this.reservesService.findByTableId(this.tableID)
        .subscribe(res => {
          this.reserves = res;
        },error => {
          console.log('not found by tableId');
        })
    } else {
      this.reservesService.getReserve()
        .subscribe(res => {
          this.reserves = res;
        },error2 => {
          console.log('error');
        })
    }
  }

  pushPageForm(){
    this.navCtrl.push(ReserveFormComponent,{
      tableID : this.tableID
    })
  }

}
