import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/user';

  constructor(private http: HttpClient) { }

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if(user) {
          this.loggedIn.next(true);
          return user;
        } else {
          throw new Error('Invalid Credentials');
        }
      }),
      catchError(err => throwError(() => new Error('Login Failed')))
    );
  }
  
  register(newUser: Partial<User>): Observable<User> {
    return this.http.post<User>(this.apiUrl, newUser).pipe(
      catchError(err => throwError(() => new Error('Register Failed')))
    );
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}

