import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/user';

  constructor(private http: HttpClient) { }

  private currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUser.asObservable();

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if(user) {
          this.currentUser.next(user);
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
      tap(user => {
        this.currentUser.next(user);
      }),
      catchError(err => throwError(() => new Error('Register Failed')))
    );
  }

  logout(): void {
    this.currentUser.next(null);
  }
}

