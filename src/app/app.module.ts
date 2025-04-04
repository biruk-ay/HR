import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDBService } from './shared/service/in-memory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EmployeeFormComponent } from './employee/component/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CandidateFormComponent } from './candidate/component/candidate-form/candidate-form.component';
import { CompanyFormComponent } from './company/component/company-form/company-form.component';
import { DepartmentFormComponent } from './department/component/departments-form/departments-form.component';
import { CandidateListComponent } from './candidate/component/candidate-list/candidate-list.component';
import { CompanyListComponent } from './company/component/company-list/company-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DepartmentListComponent } from './department/component/departments-list/departments-list.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { AuthService } from './auth/service/auth.service';
import { AuthGuard } from './auth/service/auth.guard';
import { LandingComponent } from './shared/component/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    CandidateFormComponent,
    CompanyFormComponent,
    DepartmentFormComponent,
    CandidateListComponent,
    CompanyListComponent,
    DepartmentListComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDBService, { dataEncapsulation: false }),
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  entryComponents: [EmployeeFormComponent, CandidateFormComponent, CompanyFormComponent, DepartmentFormComponent],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
