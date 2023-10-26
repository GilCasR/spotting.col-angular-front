import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private apiUrl = 'http://localhost:3001'
  constructor(
    private http: HttpClient
  ) {}

  search(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/airport/${code}`)
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/airport`)
  }
}
