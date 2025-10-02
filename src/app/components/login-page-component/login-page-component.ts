import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page-component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login-page-component.html',
  styleUrl: './login-page-component.css',
})
export class LoginPageComponent {
  private router = inject(Router);
  forgotPassword = signal<boolean>(false);

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    event?.preventDefault();
    console.log(
      this.form.controls.email.value,
      this.form.controls.password.value,
      this.form.controls.remember.value
    );
    this.form.reset();
  }

  onHomePage() {
    this.router.navigate(['/']);
  }

  closeModal() {
    this.forgotPassword.set(false);
  }

  openModal() {
    this.forgotPassword.set(true);
  }
}
