import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDBService } from './in-memory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { DepartmentFormComponent } from './departments-form/departments-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DepartmentListComponent } from './departments-list/departments-list.component';

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
    DepartmentListComponent
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
    ReactiveFormsModule,
  ],
  entryComponents: [EmployeeFormComponent, CandidateFormComponent, CompanyFormComponent, DepartmentFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
