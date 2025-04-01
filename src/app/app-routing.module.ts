import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
// import { DepartmentListComponent } from './departments-list/departments-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'candidate', component: CandidateListComponent},
  { path: 'company', component: CompanyListComponent },
  // { path: 'departments',  component: DepartmentListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
