import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployee().subscribe(data => (this.employee = data));
  }
}
