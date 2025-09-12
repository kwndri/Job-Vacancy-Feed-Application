import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';
import { CommonModule } from '@angular/common';
import { AgreeValidators } from '../../form.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-apply-component',
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './job-apply-component.html',
  styleUrl: './job-apply-component.css',
})
export class JobApplyComponent {
  submitted = false;
  showModal = false;
  router = inject(Router);

  form = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    message: new FormControl(''),
    agree: new FormControl(false, {
      validators: [Validators.required, AgreeValidators.notAgreeWithTerms],
      nonNullable: true,
    }),
  });

  get fullName() {
    return this.form.get('fullName') as FormGroup;
  }

  get firstName() {
    return this.form.get('fullName.firstName');
  }

  get lastName() {
    return this.form.get('fullName.lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get message() {
    return this.form.get('message');
  }

  get agree() {
    return this.form.get('agree')!;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Form submitted:', this.form.value);
    this.showModal = true;
    this.form.reset();
  }

  onHomePage() {
    this.router.navigate(['/jobs']);
  }
}
