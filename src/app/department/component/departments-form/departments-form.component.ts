import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from '../../service/department.service';
import { Department } from '../../model/department.model';

interface DepartmentDialogData {
  department?: Department;
  companies: any[];
}

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.css']
})
export class DepartmentFormComponent {
  departmentForm: FormGroup;
  companies: any[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    public dialogRef: MatDialogRef<DepartmentFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DepartmentDialogData
  ) {
    this.companies = data.companies;
    this.departmentForm = this.fb.group({
      id: [data.department ? data.department.id : null],
      name: [data.department ? data.department.name : '', Validators.required],
      companyId: [data.department ? data.department.companyId : null, Validators.required]
    });
  }

  saveDepartment(): void {
    if (this.departmentForm.invalid) { return; }
    if (this.data && this.data.department && this.data.department.id) {
      this.departmentService.updateDepartment(this.departmentForm.value)
        .subscribe(() => this.dialogRef.close());
    } else {
      this.departmentService.addDepartment(this.departmentForm.value)
        .subscribe(() => this.dialogRef.close());
    }
  }
}
