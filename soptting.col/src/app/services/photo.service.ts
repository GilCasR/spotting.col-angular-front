import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

import { LocalService } from './local.service';

interface PhAttributes {
  photo_date: Date;
  photo_description: string;
  aircraft_id: string;
  link: string;
  airport: string
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://localhost:3001'

  constructor(
    private http: HttpClient,
    private localStore: LocalService
  ) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/photo`)
  }

  postPhoto(photoInfo: any, url: string): Observable<any> {
    const attributes: PhAttributes = {
      photo_date: photoInfo.date,
      photo_description: photoInfo.description,
      aircraft_id: photoInfo.aircraft,
      link: url,
      airport: photoInfo.airport
    }

    const token = this.localStore.getData("token")

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    }); 
    console.log(attributes);
    

    return this.http.post(`${this.apiUrl}/photo`, attributes, {headers})
  };

}
