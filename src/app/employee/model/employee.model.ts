export interface Employee {
    id: number;
    name: string;
    position: string;
    companyId: number;
    departmentId: number;
    salaryId: number;
  }
  
export interface Salary {
    id: number;
    amount: number;
    employeeId: number;
  }