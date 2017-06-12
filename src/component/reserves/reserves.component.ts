import { Component, ViewChild } from "@angular/core";
import { ReservesService } from "./shared/reserves.service";
import { Reserve } from "./shared/reserve.model";
import { ReserveFormComponent } from "./reserve-form/reserve-form.component";
import { MenuController, Navbar, NavController, NavParams } from "ionic-angular";
import { TablesComponent } from "../tables/tables.component";
@Component({
  selector: "reserves-component",
  templateUrl: "reserves.component.html"
})

export class ReservesComponent {
  reserves: Reserve[] = [];
  reserve = {};
  tableID: any;
  @ViewChild('backButton') navBar: Navbar;

  constructor(public menuCtrl: MenuController,
              public reservesService: ReservesService,
              public navParams: NavParams,
              public navCtrl: NavController) {
    this.reserve = navParams.get('reserve');
    this.tableID = navParams.get('tableID');
  }

  ionViewWillEnter() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(TablesComponent);
    };
    if (this.tableID != null) {
      this.reservesService.findByTableId(this.tableID)
        .subscribe(res => {
          this.reserves = res;
        }, error => {
          console.log('not found by tableId');
        })
    } else {
      this.reservesService.getReserve()
        .subscribe(res => {
          this.reserves = res;
        }, error2 => {
          console.log('error');
        })
    }
  }

  pushPageForm() {
    this.navCtrl.push(ReserveFormComponent, {
      tableID: this.tableID
    })
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

}
