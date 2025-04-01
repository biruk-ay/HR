// import { Component, OnInit } from '@angular/core';
// import { DepartmentService, Department } from '../department.service';
// import { CompanyService, Company } from '../company.service';
// import { MatDialog } from '@angular/material/dialog';
// import { DepartmentFormComponent } from '../departments-form/departments-form.component';

// @Component({
//   selector: 'app-departments-list',
//   templateUrl: './departments-list.component.html',
//   styleUrls: ['./departments-list.component.css']
// })
// export class DepartmentListComponent implements OnInit {
//   departments: any[] = [];
//   displayedColumns: string[] = ['name', 'company', 'actions'];
//   companies: any[] = [];

//   constructor(private departmentService: DepartmentService,
//               private companyService: CompanyService,
//               private dialog: MatDialog) {}

//   ngOnInit(): void {
//     this.loadDepartments();
//   }

//   loadDepartments(): void {
//     this.companyService.getCompany().subscribe(companies => {
//       this.companies = companies;
//       this.departmentService.getDepartments().subscribe(([departments]) => {
//         this.departments = departments.map(dept => ({
//           const companyName: dept.find(c => c.id === dept.companyId)
//         }));
//       });
//     });
//   }

//   openDialog(department?: Department): void {
//     const dialogRef = this.dialog.open(DepartmentFormComponent, {
//       data: { department, companies: this.companies }
//     });
//     dialogRef.afterClosed().subscribe(() => this.loadDepartments());
//   }

//   deleteDepartment(id: number): void {
//     this.departmentService.deleteDepartment(id).subscribe(() => this.loadDepartments());
//   }
// }
