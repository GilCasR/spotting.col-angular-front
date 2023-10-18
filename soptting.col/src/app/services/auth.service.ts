import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001'; // Update with your API endpoint

  constructor(private http: HttpClient) { }

  login(uname: string, pword: string): Observable<any> {
    const body = { email: uname, password: pword };
    return this.http.post<any>(`${this.apiUrl}/user/login`, body)
  }
}