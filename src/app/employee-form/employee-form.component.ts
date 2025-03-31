import { Component, Inject, Optional } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Employee
) {
    this.employeeForm = this.fb.group({
        id: [data && data.id ? data.id : null],
        name: [data && data.name ? data.name : '', Validators.required],
        position: [data && data.position ? data.position : '', Validators.required],
        companyId: [data && data.companyId ? data.companyId : null, Validators.required],
        departmentId: [data && data.departmentId ? data.departmentId : null, Validators.required],
    });
 }

    saveEmployee(): void {
        if (this.data && this.data.id) {
        this.employeeService.updateEmployee(this.employeeForm.value).subscribe(() => this.dialogRef.close());
        } else {
        this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => this.dialogRef.close());
        }
    }
}
