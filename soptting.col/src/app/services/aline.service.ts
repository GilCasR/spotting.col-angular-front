import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { LocalService } from './local.service';

interface AirlineAttributtes {
  name: string;
  foundation: number;
  skyTrax_rating: number;
  iata_code: string;
  main_office: string;
  country: string;
  country_code: string;
  logo: string;
  airports: Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class AlineService {
  private apiUrl = 'http://localhost:3001'

  constructor(
    private http: HttpClient,
    private localStore: LocalService
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/airline`)
  }

  postAirline(airline: any, airportIds: Array<string>, url: string): Observable<any> {
    const requestInfo: AirlineAttributtes = {
      name: airline.name.value,
      foundation: airline.foundation.value,
      skyTrax_rating: airline.rating.value,
      iata_code: airline.code.value,
      main_office: airline.office.value,
      country: airline.country.value,
      country_code: airline.c_code.value,
      logo: url,
      airports: airportIds,
    };
    const token = this.localStore.getData("token")

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    
    return this.http.post(`${this.apiUrl}/airline`, requestInfo, {headers});
  }
  
}
