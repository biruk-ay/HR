import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { CandidateListComponent } from './candidate/component/candidate-list/candidate-list.component';
import { CompanyListComponent } from './company/component/company-list/company-list.component';
import { DepartmentListComponent } from './department/component/departments-list/departments-list.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { AuthGuard } from './auth/service/auth.guard';
import { LandingComponent } from './shared/component/landing/landing.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'candidate', component: CandidateListComponent, canActivate: [AuthGuard] },
  { path: 'company', component: CompanyListComponent, canActivate: [AuthGuard] },
  { path: 'departments',  component: DepartmentListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
