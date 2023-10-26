import { Component } from '@angular/core';
import { AirportService } from '../services/airport.service';


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
