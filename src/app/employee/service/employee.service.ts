import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/company/model/company.model';
import { Department } from 'src/app/department/model/department.model';
import { Salary, Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  private employeeUrl = "api/employee";
  private companyUrl = "api/company"
  private departmentUrl = "api/department"
  private salaryUrl = "api/salary"

  
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentUrl);
  }

  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(this.salaryUrl);
  }
  
  addSalary(salary: { amount: number; employeeId: number }): Observable<any> {
    return this.http.post(this.salaryUrl, salary);
  }
  
  updateSalary(salary: { id: number; amount: number; employeeId: number }): Observable<any> {
    return this.http.put(`${this.salaryUrl}/${salary.id}`, salary);
  }
  
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.employeeUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.employeeUrl}/${id}`);
  }
}
