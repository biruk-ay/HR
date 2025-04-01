import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService, Candidate } from '../candidate.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {
  candidateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    public dialogRef: MatDialogRef<CandidateFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Candidate
  ) {
    this.candidateForm = this.fb.group({
      id: [data ? data.id : null],
      name: [data ? data.name : '', Validators.required],
      email: [data ? data.email : '', [Validators.required, Validators.email]],
      phone: [data ? data.phone : '', Validators.required]
    });
  }

  saveCandidate(): void {
    if (this.data && this.data.id) {
      this.candidateService.updateCandidate(this.candidateForm.value).subscribe(() => this.dialogRef.close());
    } else {
      this.candidateService.addCandidate(this.candidateForm.value).subscribe(() => this.dialogRef.close());
    }
  }
}
