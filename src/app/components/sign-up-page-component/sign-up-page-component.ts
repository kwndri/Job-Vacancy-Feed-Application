import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordsValidators } from './password.validators';

@Component({
  selector: 'app-sign-up-page-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-page-component.html',
  styleUrl: './sign-up-page-component.css',
})
export class SignUpPageComponent {
  private router = inject(Router);

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    passwords: new FormGroup(
      {
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [
          Validators.required,
          PasswordsValidators.emptyConfirmPassword,
        ]),
      },
      [PasswordsValidators.notMatchPasswords]
    ),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.form.get('email');
  }

  get username() {
    return this.form.get('username');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get passwordsGroup() {
    return this.form.get('passwords') as FormGroup;
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('passwords.newPassword');
  }

  get confirmPassword() {
    return this.form.get('passwords.confirmPassword');
  }

  onSubmit() {
    event?.preventDefault();
    console.log(
      this.form.controls.email.value,
      this.form.controls.passwords.controls.newPassword,
      this.form.controls.passwords.controls.confirmPassword
    );
    this.form.reset();
  }

  onHomePage() {
    this.router.navigate(['/']);
  }
}
