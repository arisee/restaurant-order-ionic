import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TableService } from "../../tables/shared/table.service";
import { Table } from "../../tables/shared/table.model";
import { ReservesService } from "../shared/reserves.service";
import { ReservesComponent } from "../reserves.component";
import { FormBuilder, Validators } from "@angular/forms";
import { Reserve } from "../shared/reserve.model";
@Component({
  selector: 'reserve-form-component',
  templateUrl: 'reserve-form.component.html',
})

export class ReserveFormComponent {
  tables: Table[] = [];
  reserveForm: any;
  tableID: number;
  table =  new Table();

  constructor(public navCrtl: NavController,
              public tableService: TableService,
              public reserveService: ReservesService,
              public formBuilder: FormBuilder,
              public navParam: NavParams) {
    this.reserveForm = formBuilder.group({
      table: ['', Validators.required],
      scheduleOn: ['', Validators.required],
      customerName: ['', Validators.required],
      phone: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      quantity: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])]
    });
    this.tableID = this.navParam.get("tableID");
    this.tableService.getById(this.tableID)
      .subscribe(res => {
        this.table = res;
      }, error2 => {
        console.log('not found table by tableID');
      })
  }

  ionViewWillEnter() {
    this.tableService.getTables().subscribe(res => {
      this.tables = res;
    });
  }

  getFormData() {
    let _reserve : Reserve =  new Reserve();
    _reserve.scheduleOn = Date.parse(this.reserveForm.value.scheduleOn);
    _reserve.table = this.reserveForm.value.table;
    _reserve.customerName = this.reserveForm.value.customerName;
    _reserve.quantity = this.reserveForm.value.quantity;
    _reserve.phone = this.reserveForm.value.phone;
    this.reserveService.create(_reserve).subscribe(res => {
      this.navCrtl.push(ReservesComponent, {
        tableID: this.reserveForm.value.table.id
      });
    }, error2 => {
      console.log('create form reserves error!');
    });

  }
}
