import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { JobFeedsService } from '../../job-feeds-service';
import { FeedItem, JobsFeed } from '../../model';
import { ActivatedRoute } from '@angular/router';
import { JobCardComponent } from '../job-card-component/job-card-component';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list-component',
  imports: [
    CommonModule,
    JobCardComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule,
  ],
  templateUrl: './job-list-component.html',
  styleUrl: './job-list-component.css',
})
export class JobListComponent {
  first_ever_url = signal<string>('');
  next_url = signal<string>('');
  prev_url = signal<string>('');
  current_url = signal<string>('');
  jobs = signal<FeedItem[] | null>([]);
  route = inject(ActivatedRoute);
  filterValue: string | null = null;
  private destroRef = inject(DestroyRef);
  selectedDate: string | null = null;
  error = signal<string | null>('');
  isLoading = signal<boolean>(true);

  constructor(private jobFeed: JobFeedsService) {}

  fetchJobs(url: string, modifiedSince?: string) {
    const subscription = this.jobFeed.fetchJobs(url).subscribe({
      next: (data) => {
        this.isLoading.set(false);
        this.next_url.set(data.next_url);
        this.current_url.set(data.feed_url);
        this.first_ever_url.set(data.feed_url);
        const filteredData = data.items.filter(
          (item) => item._feed_entry.status === 'ACTIVE'
        );
        console.log(filteredData);

        this.route.queryParamMap.subscribe((params) => {
          const filterValue = params.get('filter');
          if (filterValue) {
            const newData = filteredData.filter(
              (item) =>
                item._feed_entry.title.includes(filterValue) ||
                item._feed_entry.businessName.includes(filterValue) ||
                item._feed_entry.municipal.includes(filterValue)
            );
            this.jobs.set(newData);
          } else {
            this.jobs.set(filteredData);
          }
        });
      },
      error: (err: Error) => {
        this.isLoading.set(false);
        if (err) {
          this.error.set(err.message);
        } else {
          this.error.set('');
        }
      },
    });
  }

  ngOnInit() {
    this.fetchJobs('/api/v1/feed');
  }

  onNextPage() {
    this.prev_url.set(this.current_url());
    this.fetchJobs(this.next_url());
  }

  onDateChange() {
    if (!this.selectedDate) return;

    const formattedDate = new Date(this.selectedDate).toUTCString();
    const url = `/api/v1/feed?modifiedSince=${encodeURIComponent(
      formattedDate
    )}`;
    this.error.set('');

    this.fetchJobs(url, formattedDate);
  }
}
