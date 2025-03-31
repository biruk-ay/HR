import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDBService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      candidate: [
        { id: 1, name: "Abebe", email: "abebe@gmail.com", phone: "0901234567" },
        { id: 2, name: "Kebede", email: "kebede@gmail.com", phone: "0901234568" },
        { id: 3, name: "Abel", email: "abel@gmail.com", phone: "0901234569" }
      ],
      company: [
        { id: 1, name: "Google", industry: "Tech", location: "US" },
        { id: 2, name: "Microsoft", industry: "Tech", location: "US" },
        { id: 3, name: "Meta", industry: "Tech", location: "US" },
      ],
      employee: [
        { id: 1, name: "Rediet", position: "Developer", companyId: 1, departmentId: 1, salaryId: 1 },
        { id: 2, name: "Eve", position: "Manager", companyId: 2, departmentId: 2, salaryId: 2 },
        { id: 3, name: "Adam", position: "HR Officer", companyId: 3, departmentId: 3, salaryId: 3 }
      ],
      department: [
        { id: 1, name: "IT", companyId: 1 },
        { id: 2, name: "Managment", companyId: 2 },
        { id: 3, name: "HR", companyId: 3 }
      ],
      salary: [
        { id: 1, amount: 15000, employeeId: 1 },
        { id: 2, amount: 16000, employeeId: 2 },
        { id: 3, amount: 17000, employeeId: 3 },
      ]
    };
  }
}
