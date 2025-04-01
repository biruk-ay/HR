import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService, Company } from '../company.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    public dialogRef: MatDialogRef<CompanyFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Company
  ) {
    this.companyForm = this.fb.group({
      id: [data ? data.id : null],
      name: [data ? data.name : '', Validators.required],
      industry: [data ? data.industry : '', Validators.required],
      location: [data ? data.location : '', Validators.required]
    });
  }

  saveCompany(): void {
    if (this.data && this.data.id) {
      this.companyService.updateCompany(this.companyForm.value).subscribe(() => this.dialogRef.close());
    } else {
      this.companyService.addCompany(this.companyForm.value).subscribe(() => this.dialogRef.close());
    }
  }
}
