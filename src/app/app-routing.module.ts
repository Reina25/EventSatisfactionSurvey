import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckInfoComponent } from './check-info/check-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/checkinfo', pathMatch: 'full'},
  { path: '', component: CheckInfoComponent},
  { path: 'checkinfo', component: CheckInfoComponent},
  { path: 'coverpage', component: CoverPageComponent},
  { path: 'studentinfo', component: StudentInfoComponent},
  { path: 'surveyform', component: SurveyFormComponent},
  { path: 'pagenotfound', component: PageNotFoundComponent},
  { path: 'formsubmitted', component: SubmittedFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [
  CoverPageComponent,
  StudentInfoComponent,
  SurveyFormComponent,
  SubmittedFormComponent,
  PageNotFoundComponent,
  CheckInfoComponent


]