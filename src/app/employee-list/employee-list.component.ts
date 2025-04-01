import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: any[] = [];
  displayedColumns: string[] = ['name', 'position', 'company', 'department', 'salary', 'actions'];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadEmployees();
  }


  loadEmployees(): void {
    combineLatest([
      this.employeeService.getEmployee(),
      this.employeeService.getCompanies(),
      this.employeeService.getDepartments(),
      this.employeeService.getSalaries()
    ]).subscribe(([employees, companies, departments, salaries]) => {

      this.employee = employees.map(emp => {
        const company = companies.find(c => c.id === emp.companyId);
        const department = departments.find(d => d.id === emp.departmentId);
        const salary = salaries.find(s => s.employeeId === emp.id);
  
        return {
          ...emp,
          companyName: company ? company.name : 'N/A',
          departmentName: department ? department.name : 'N/A',
          salaryAmount: salary ? salary.amount : 'N/A'
        };
      });
  
    });
  }
  
  

  openDialog(employee?: Employee): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, { data: employee });
    dialogRef.afterClosed().subscribe(() => this.loadEmployees());
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
