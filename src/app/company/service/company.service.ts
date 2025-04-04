import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../model/company.model';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private apiUrl = 'api/company';

  constructor(private http: HttpClient) {}

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  addCompany(Company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, Company);
  }

  updateCompany(Company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${Company.id}`, Company);
  }

  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
