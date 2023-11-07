import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AircraftTypesService {

  private apiUrl = 'http://localhost:3001'
  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aircraft/allTypes`)
  }

  searchType(manufacturer: string, type: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/aircraft/${manufacturer}/${type}`)
  }

}
