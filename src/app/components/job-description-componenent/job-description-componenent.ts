import {
  Component,
  DestroyRef,
  inject,
  input,
  signal,
  SimpleChanges,
} from '@angular/core';
import { AdContent } from '../../model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobFeedsService } from '../../job-feeds-service';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';
import { ContactTeamComponent } from '../contact-team-component/contact-team-component';

@Component({
  standalone: true,
  selector: 'app-job-description-componenent',
  imports: [HeaderComponent, FooterComponent, ContactTeamComponent],
  templateUrl: './job-description-componenent.html',
  styleUrl: './job-description-componenent.css',
})
export class JobDescriptionComponenent {
  job = signal<AdContent | null>(null);
  private route = inject(ActivatedRoute);
  private jobService = inject(JobFeedsService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  isLoading = signal<boolean>(true);
  id!: string;

  ngOnInit() {
    const sub = this.route.paramMap.subscribe((params) => {
      const id = params.get('jobId');
      if (id) {
        this.jobService.fetchJobsDetails('/api/v1/feedentry/', id).subscribe({
          next: (data) => {
            this.job.set(data);
            this.isLoading.set(false);
            console.log(data);
          },
          error: (err) => console.error('Failed to load job', err),
        });
      }
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  onClick() {
    this.router.navigate([`/jobs/${this.id}/apply`]);
  }
}
