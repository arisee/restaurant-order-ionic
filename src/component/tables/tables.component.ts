import { Component } from "@angular/core";
import { TableService } from "./shared/table.service";
import "rxjs/add/operator/map";
import { MenuController, NavController } from "ionic-angular";
import { Table } from "./shared/table.model";
import { HomePage } from "../main/home/home.component";
import { TableProcessingOrdersServive } from "../orders/shared/table-processing-order.service";
import { TableProcessingOrder } from "../orders/shared/table-processing-order.model";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.component.html'
})

export class TablesComponent {
  tables: Table[] = [];
  filter = {
    status: "",
    searchName: "",
    searchLocation: ""
  };
  // @ViewChild('backButton') navBar: Navbar;


  constructor(public menuCrl: MenuController,
              public navCtrl: NavController,
              public tableService: TableService,
              public tableProcessingOrderSerive : TableProcessingOrdersServive) {
  }

  ionViewWillEnter() {
    console.log('Table Component Page');
    // this.navBar.backButtonClick = () => {
    //   this.navCtrl.push(HomePage);
    // };
    this.deleteOrderHaveItemsNull();
    this.tableService.getTables()
      .subscribe(tables => {
        this.tables = tables;
      });
  }

  deleteOrderHaveItemsNull(){
    this.tableProcessingOrderSerive.findAllOrder()
      .subscribe(res =>{
        res.forEach(order =>{
          if(order.items.length == 0){
            this.tableProcessingOrderSerive.delete(order.tableId)
              .subscribe(res => {
                console.log('delete finish');
              });
          }
        })
      },error2 => {
        console.log('findAll error');
      })
  }

  takeMeBack() {
    this.navCtrl.push(HomePage);
  }

  openMenu() {
    this.menuCrl.toggle();
  }
}
