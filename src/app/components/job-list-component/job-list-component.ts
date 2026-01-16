import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
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
export class JobListComponent implements OnInit {
  private jobFeed = inject(JobFeedsService);
  route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  selectedDate: string | null = null;
  currentPage = signal<number>(1);
  readonly PAGE_SIZE = 10;
  jobs = signal<FeedItem[] | null>([]);
  filterValue: string | null = null;
  error = signal<string | null>('');
  isLoading = signal<boolean>(true);
  feedUrl = signal<string>('/api/v1/feed');
  totalPages = computed(() =>
    Math.ceil(this.jobs()!.length / this.PAGE_SIZE || 1)
  );

  paginatedJobs = computed(() => {
    const start = (this.currentPage() - 1) * this.PAGE_SIZE;
    return this.jobs()!.slice(start, start + this.PAGE_SIZE);
  });

  constructor() {}

  fetchJobs(url: string, modifiedSince?: string) {
    const subscription = this.jobFeed.fetchJobs(url).subscribe({
      next: (data) => {
        this.isLoading.set(false);

        this.route.queryParamMap.subscribe((params) => {
          const filterValue = params.get('filter');
          if (filterValue) {
            const newData = data.items.filter(
              (item) =>
                item._feed_entry.title.includes(filterValue) ||
                item._feed_entry.businessName.includes(filterValue) ||
                item._feed_entry.municipal.includes(filterValue)
            );
            this.jobs.set(newData);
          } else {
            this.jobs.set(data.items);
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
    this.fetchJobs(this.feedUrl());
  }

  onDateChange() {
    if (!this.selectedDate) return;

    const formattedDate = new Date(this.selectedDate).toUTCString();
    const url = `/api/v1/feed?modifiedSince=${encodeURIComponent(
      formattedDate
    )}`;
    this.error.set('');
    this.isLoading.set(true);
    this.fetchJobs(url, formattedDate);
  }
}
