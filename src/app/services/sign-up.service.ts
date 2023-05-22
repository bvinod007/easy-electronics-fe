import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServices {
  private baseUrl = 'http://localhost:8000'; // Django server's URL

  constructor(private http: HttpClient) {}

  // Example: GET request
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/users/`);
  }

  // Example: POST request
  createUser(user: any): Observable<any> {
    console.log(user)
    return this.http.post<any>(`${this.baseUrl}/api/user/register`, user);
  }

  // Other methods for PUT, DELETE requests, etc.
  loginUser(user: any): Observable<any> {
    console.log(user)
    return this.http.post<any>(`${this.baseUrl}/api/user/login/`, user)
  }
}
