import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {ExamineeComponent} from "./home/examinee/examinee.component";
import {ExaminerComponent} from "./home/examiner/examiner.component";
import {AngularQuesComponent} from "./home/questions/angular-ques/angular-ques.component";
import {JavaQuesComponent} from "./home/questions/java-ques/java-ques.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'examinee', component: ExamineeComponent },
  { path: 'examiner', component: ExaminerComponent },
  { path: 'angular', component: AngularQuesComponent },
  { path: 'java', component: JavaQuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
