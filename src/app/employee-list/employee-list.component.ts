import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[] = [];
  displayedColumns: string[] = ['name', 'position', 'actions'];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployee().subscribe(data => (this.employee = data));
  }

  openDialog(employee?: Employee): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, { data: employee });
    dialogRef.afterClosed().subscribe(() => this.loadEmployees());
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
