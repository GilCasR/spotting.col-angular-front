import { Component } from '@angular/core';

import { AirportService } from '../services/airport.service';

import { Map, tileLayer } from 'leaflet';


interface AirportAttributes {
  id: string;
  name: string;
  code: string;
  country: string;
  runways: number;
  city: string

}

@Component({
  selector: 'app-airports-dashboard',
  templateUrl: './airports-dashboard.component.html',
  styleUrls: ['./airports-dashboard.component.css']
})

export class AirportsDashboardComponent {
  iataCode: string = ""
  errorMsg: string = ""
  airports: Array<AirportAttributes> = []
  constructor(
    private airportServices: AirportService
  ) {

  };

  ngOnInit(): void {
    this.airportServices
          .getAll()
          .subscribe(
            (response) => {
              this.airports = response
            }
          )
  }

  ngAfterViewInit(): void {
    const map =  new Map('map').setView([-33.393001556396484, -70.78579711914062], 13);

    tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

  }

  onSearch(): void {
    if(this.iataCode.length !== 4){
      this.errorMsg = "please provide a valid code"
    }else {
      this.errorMsg = ""
      this.airportServices
        .search(this.iataCode)
        .subscribe(
          (response) => {
            console.log(response);
          }
        )
      this.airportServices
          .getAll()
          .subscribe(
            (response) => {
              this.airports = response
            }
          )
    }
  }
}
