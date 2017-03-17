import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TableService} from "../../tables/shared/table.service";
import {Table} from "../../tables/shared/table.model";
import {ReservesService} from "../shared/reserves.service";
import {ReservesComponent} from "../reserves.component";
import {FormBuilder, Validators} from "@angular/forms";
import {NameValidator} from "../component/name.validator";
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
      customerName: ['',Validators.compose([Validators.required,NameValidator.checkName])],
      phone: ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.pattern('[0-9]*')])],
      quantity: ['',Validators.required]
    });
  }

  ionViewWillEnter() {
    this.tableService.getTables()
      .then(tables => {
        this.tables = tables;
        console.log(this.tables);
      });
  }

  getFormData() {
    console.log(this.reserveForm.value);
    this.reserveService.save(this.reserveForm.value);
    this.navCrtl.push(ReservesComponent);
  }
}
