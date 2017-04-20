import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TableService} from "../../tables/shared/table.service";
import {Table} from "../../tables/shared/table.model";
import {ReservesService} from "../shared/reserves.service";
import {ReservesComponent} from "../reserves.component";
import {FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'reserve-form-component',
  templateUrl: 'reserve-form.component.html'
})

export class ReserveFormComponent {
  tables: Table[] = [];
  reserveForm: any;

  constructor(public navCrtl: NavController,
              public tableService: TableService,
              public reserveService: ReservesService,
              public formBuilder: FormBuilder) {
    this.reserveForm = formBuilder.group({
      table: ['',Validators.required],
      dateTime: ['',Validators.required],
      customerName: ['',Validators.required],
      phone: ['',Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
      quantity: ['',Validators.required]
    });
  }

  ionViewWillEnter() {
    this.tables = this.tableService.getTables();
    console.log('reserve-form:' + this.reserveForm);
  }

  getFormData() {
    console.log(this.reserveForm.value);
    this.reserveService.save(this.reserveForm.value);
    this.navCrtl.push(ReservesComponent);
  }
}
