import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlineService } from '../services/aline.service';
import { AirportService } from '../services/airport.service';

interface AirlineAttributes {
  id: string;
	name: string; 
	foundation: number;
	skyTrax_rating: number;
	iata_code: string;
	main_office: string;
	country: string;
	country_code: string;
	logo: string
}

@Component({
  selector: 'app-airline-dashboard',
  templateUrl: './airline-dashboard.component.html',
  styleUrls: ['./airline-dashboard.component.css']
})
export class AirlineDashboardComponent {
  airlines: Array<AirlineAttributes> = []
  airports: Array<any> = []
  displayForm: boolean = false 
  selectedAirportId: Array<string> = []


  constructor(
    private airlineServices: AlineService,
    private airportServices: AirportService
  ) {}

  ngOnInit(): void {
    this.airlineServices
      .getAll()
      .subscribe(
        (response) => {
          this.airlines = response
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

  onSubmit(airline: any): void {
    console.log("form submited", airline);
    
  }

  hideForm(): void {
    this.displayForm = !this.displayForm
  }

  selectAirport(e: Event) {
    const selectElement = e.target as HTMLSelectElement;
    const airport = selectElement.value;
    if (!this.selectedAirportId.includes(airport)) {
      this.selectedAirportId.push(airport);
    }  
  }
  
  deleteAirport(code: string) {
    const index = this.selectedAirportId.indexOf(code);

    if (index !== -1) {
      this.selectedAirportId.splice(index, 1);
    }
  }
}
