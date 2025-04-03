import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DepartmentListComponent } from './departments-list/departments-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
