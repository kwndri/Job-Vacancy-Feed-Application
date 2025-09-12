import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AgreeValidators {
  static notAgreeWithTerms(control: AbstractControl): ValidationErrors | null {
    if (control.value === false) {
      return { notAgreeWithTerms: true };
    }

    return null;
  }
}
