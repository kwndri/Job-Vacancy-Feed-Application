import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { JobFeedsService } from '../../job-feeds-service';
import { FeedItem } from '../../model';
import { ActivatedRoute } from '@angular/router';
import { JobCardComponent } from '../job-card-component/job-card-component';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-job-list-component',
  imports: [CommonModule, JobCardComponent, HeaderComponent, FooterComponent],
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
  constructor(private jobFeed: JobFeedsService) {}

  fetchJobs(url: string) {
    const subscription = this.jobFeed.fetchJobs(url).subscribe({
      next: (data) => {
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
      error: (err) => console.error('Error fetching jobs', err),
    });
  }

  ngOnInit() {
    this.fetchJobs('/api/v1/feed');
  }

  onNextPage() {
    this.prev_url.set(this.current_url());
    this.fetchJobs(this.next_url());
  }
}
