import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee, EmployeeService } from '../employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface EmployeeWithSalary extends Employee {
  salaryAmount?: number;
}

interface EmployeeDialogData {
  employee?: EmployeeWithSalary;
  companies: any[];
  departments: any[];
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  companies: any[] = [];
  departments: any[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: EmployeeDialogData
  ) {
    this.companies = data.companies;
    this.departments = data.departments;
    this.employeeForm = this.fb.group({
      id: [data.employee ? data.employee.id : null],
      name: [data.employee ? data.employee.name : '', Validators.required],
      position: [data.employee ? data.employee.position : '', Validators.required],
      companyId: [data.employee ? data.employee.companyId : null, Validators.required],
      departmentId: [data.employee ? data.employee.departmentId : null, Validators.required],
      salaryAmount: [data.employee && data.employee.salaryAmount !== undefined ? data.employee.salaryAmount : null, Validators.required]
    });
  }

  saveEmployee(): void {
    if (this.employeeForm.invalid) { return; }
    const empData = this.employeeForm.value;
    
    if (this.data && this.data.employee && this.data.employee.id) {
      this.employeeService.updateEmployee(empData).subscribe(() => {
        if (this.data.employee.salaryId) {
          this.employeeService.updateSalary({
            id: this.data.employee.salaryId,
            amount: empData.salaryAmount,
            employeeId: empData.id
          }).subscribe(() => this.dialogRef.close());
        } else {
          this.employeeService.addSalary({ amount: empData.salaryAmount, employeeId: empData.id })
            .subscribe(() => this.dialogRef.close());
        }
      });
    } else {
      this.employeeService.createEmployee(empData).subscribe(createdEmp => {
        this.employeeService.addSalary({ amount: empData.salaryAmount, employeeId: createdEmp.id })
          .subscribe(() => this.dialogRef.close());
      });
    }
  }
  
}
