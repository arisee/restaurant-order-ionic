import {FormControl} from "@angular/forms";
export class NameValidator {
  static checkName(control: FormControl): any {
    const indexInvalid = control.value.indexOf('_');
    if (indexInvalid >= 0) {
      return {
        "weirdCharacter": 'Got invalid character at ' + indexInvalid
      }
    }

    return null;
  }
}
