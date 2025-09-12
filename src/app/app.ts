import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ContactTeamComponent } from './components/contact-team-component/contact-team-component';
import { JobApplyComponent } from './components/job-apply-component/job-apply-component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ContactTeamComponent,
    JobApplyComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'job-feed';
}
