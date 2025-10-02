import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordsValidators {
  static notMatchPasswords(group: AbstractControl): ValidationErrors | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!(newPassword === confirmPassword)) {
      return { notMatchPasswords: true };
    }
    return null;
  }

  static emptyConfirmPassword(
    control: AbstractControl
  ): ValidationErrors | null {
    if (control.value === '') {
      return { emptyConfirmPassword: true };
    }

    return null;
  }

  static matchOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({ matchOldPassword: true });
        }

        resolve(null);
      }, 2000);
    });
  }
}
