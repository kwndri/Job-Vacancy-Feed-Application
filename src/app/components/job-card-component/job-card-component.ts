import { Component, inject, input } from '@angular/core';
import { FeedItem } from '../../model';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-job-card-component',
  imports: [],
  templateUrl: './job-card-component.html',
  styleUrl: './job-card-component.css',
})
export class JobCardComponent {
  router = inject(Router);
  job = input<FeedItem>();

  onClick() {
    if (this.job()?.id) {
      this.router.navigate(['/jobs', this.job()!.id]);
    }
  }
}
