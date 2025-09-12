import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header-component',
  imports: [FormsModule, RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  userInput = signal<string>('');
  router = inject(Router);

  onSubmit(form: NgForm) {
    this.userInput.set(form.value.userInput);
    this.router.navigate(['jobs'], {
      queryParams: { filter: this.userInput() },
    });
    console.log(form.value.userInput);
  }
}
