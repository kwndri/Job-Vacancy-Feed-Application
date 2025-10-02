import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list-component/job-list-component';
import { JobDescriptionComponenent } from './components/job-description-componenent/job-description-componenent';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { JobApplyComponent } from './components/job-apply-component/job-apply-component';
import { LoginPageComponent } from './components/login-page-component/login-page-component';
import { SignUpPageComponent } from './components/sign-up-page-component/sign-up-page-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/jobs',
    pathMatch: 'full',
  },
  {
    path: 'jobs',
    component: JobListComponent,
  },
  {
    path: 'jobs/:jobId',
    component: JobDescriptionComponenent,
  },
  {
    path: 'jobs/:jobId/apply',
    component: JobApplyComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignUpPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
