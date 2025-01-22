import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = "https://dummyjson.com/users"

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    return this.httpClient.get(this.apiURL);
  }

  addUser(user: any): Observable<any>{
    const addUserURL = `${this.apiURL}/add`;
    return this.httpClient.post(addUserURL, user);
  }

  loginUser(user:any): Observable<any>{
    const loginURL = 'https://dummyjson.com/auth/login';
    return this.httpClient.post(loginURL, user);
  }
}
