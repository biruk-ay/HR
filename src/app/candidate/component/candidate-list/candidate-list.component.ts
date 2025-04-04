import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../service/candidate.service';
import { MatDialog } from '@angular/material/dialog';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';
import { Candidate } from '../../model/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  constructor(private candidateService: CandidateService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.candidateService.getCandidates().subscribe(data => {
      this.candidates = data;
    });
  }

  openDialog(candidate?: Candidate): void {
    const dialogRef = this.dialog.open(CandidateFormComponent, { data: candidate });
    dialogRef.afterClosed().subscribe(() => this.loadCandidates());
  }

  deleteCandidate(id: number): void {
    this.candidateService.deleteCandidate(id).subscribe(() => this.loadCandidates());
  }
}
