import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { LocalService } from './local.service';

interface AcAttributes {
  registration: string;
  special_livery: boolean;
  type: string;
  aircraft_description: string;
  airline: string;
  aircraft_type: string;
}


@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  private apiUrl = 'http://localhost:3001'
  constructor(
    private http: HttpClient,
    private localStore: LocalService
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aircraft/all/`)
  }

  postAircraft(aircraftInfo: any): Observable<any>{
    const attributes: AcAttributes = {
      registration: aircraftInfo.registration,
      special_livery: aircraftInfo.livery,
      type: aircraftInfo.type,
      aircraft_description: aircraftInfo.description,
      airline: aircraftInfo.airline,
      aircraft_type: aircraftInfo.aircraftType
    }
    console.log(attributes);
    
    const token = this.localStore.getData("token")

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(`${this.apiUrl}/aircraft`, attributes, {headers});
    
  }
}
