import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlineService {
  private apiUrl = 'http://localhost:3001'
  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/airline`)
  }
}
