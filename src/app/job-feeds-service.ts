import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { JobDetails, JobsFeed } from './model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobFeedsService {
  private httpClient = inject(HttpClient);

  private baseUrl = 'https://pam-stilling-feed.nav.no';

  private getLastWeekUTCString(): string {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 30); //load all the jobs advertisements for the last month
    return lastWeek.toUTCString();
  }

  fetchJobs(url: string, modifiedSince?: string) {
    const ifModifiedSince = modifiedSince || this.getLastWeekUTCString();

    const headers = new HttpHeaders({
      'If-Modified-Since': ifModifiedSince,
    });

    return this.httpClient.get<JobsFeed>(this.baseUrl + url, { headers });
  }

  fetchJobsDetails(url: string, id: string) {
    return this.httpClient
      .get<JobDetails>(this.baseUrl + url + id)
      .pipe(map((res) => res.ad_content));
  }
}
