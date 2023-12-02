import { Injectable } from '@angular/core';
import { LoginDataInterface, TokenInterface, UserInterface } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = 'http://127.0.0.1:8000/api/v1/'

  users: UserInterface[] = []

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorService: ErrorService
  ) { }

  postUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.api + 'auth/signup/', user)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  loginUser(loginData: LoginDataInterface): Observable<TokenInterface> {
    return this.http.post<TokenInterface>(this.api + 'auth/token/', loginData)
  }

  logout() {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('request_user')
    this.router.navigate(['/logout'])
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error)
    return throwError(() => error.error)
  }

}
