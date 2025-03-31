import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  position: string;
  companyId: number;
  departmentId: number;
}

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  private apiUrl = "api/employee"
  
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

}
