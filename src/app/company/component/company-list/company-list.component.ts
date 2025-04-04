import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyFormComponent } from '../company-form/company-form.component';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  displayedColumns: string[] = ['name', 'industry', 'location', 'actions'];

  constructor(private companyService: CompanyService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompany().subscribe(data => {
      this.companies = data;
    });
  }

  openDialog(company?: Company): void {
    const dialogRef = this.dialog.open(CompanyFormComponent, { data: company });
    dialogRef.afterClosed().subscribe(() => this.loadCompanies());
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(() => this.loadCompanies());
  }
}
