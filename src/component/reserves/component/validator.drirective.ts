import {Component} from "@angular/core";
@Component({
  selector:'validator-directive',
  templateUrl:'validator.directive.html'
})

export class ValidatorDirective {
  error: string;

  constructor() {
  }

  setValidtor(formGroup: any, name: any): any {
    if (formGroup.controls.name.valid && formGroup.controls.name.dirty != null) {
      return this.error = "Không hợp lệ";
    }
  }
}
