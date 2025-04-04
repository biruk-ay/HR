import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../company/service/company.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { combineLatest } from 'rxjs';
import { DepartmentService } from 'src/app/department/service/department.service';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  displayedColumns: string[] = ['name', 'position', 'companyName', 'departmentName', 'salaryAmount', 'actions'];
  companies: any[] = [];
  departments: any[] = [];

  constructor(
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private departmentService: DepartmentService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    combineLatest([
      this.employeeService.getEmployee(),
      this.companyService.getCompany(),
      this.departmentService.getDepartments(),
      this.employeeService.getSalaries()
    ]).subscribe(([employees, companies, departments, salaries]) => {
      this.companies = companies;
      this.departments = departments;
  
      this.employees = employees.map(emp => {
        const company = companies.find(c => c.id === emp.companyId);
        const department = departments.find(d => d.id === emp.departmentId);
        const salary = salaries.find(s => s.employeeId === emp.id);
        return {
          ...emp,
          salaryId: salary ? salary.id : null,
          companyName: company ? company.name : 'N/A',
          departmentName: department ? department.name : 'N/A',
          salaryAmount: salary ? salary.amount : 'N/A'
        };
      });
    });
  }
  

  openDialog(employee?: Employee): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      data: { employee, companies: this.companies, departments: this.departments }
    });
    dialogRef.afterClosed().subscribe(() => this.loadEmployees());
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
