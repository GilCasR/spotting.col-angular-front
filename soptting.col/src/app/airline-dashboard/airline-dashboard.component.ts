import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

import { UploadService } from '../services/upload.service';
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
  styleUrls: ['./airline-dashboard.component.css'],
  providers: [UploadService]
})
export class AirlineDashboardComponent {

  airlines: Array<AirlineAttributes> = []
  airports: Array<any> = []
  displayForm: boolean = false 
  selectedAirportId: Array<string> = []
  img!: CloudinaryImage
  url: string = ""


  constructor(
    private airlineServices: AlineService,
    private airportServices: AirportService,
    private uploadServices: UploadService
  ) {}

  ngOnInit(): void {
    this.airlineServices
      .getAll()
      .subscribe(
        (response) => {
          this.airlines = response
        }
      );
    
    this.airportServices
      .getAll()
      .subscribe(
        (response) => {
          this.airports = response
        }
      );
  };

  onSubmit(airline: any): void {
    if(!this.url) {
      console.log("please submit an image")
      return
    }        
    if(this.selectedAirportId.length === 0){
      console.log("please select an airport");
      return
    }
    
    const airportIds = this.selectedAirportId.map(name => {
      const airport = this.airports.find(airport => airport.code === name);
      return airport.id;
    });    
    this.airlineServices
      .postAirline(airline.form.controls, airportIds, this.url)
      .subscribe(
        (response) => {
          console.log(response);
        }
      )    
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
  };

  onSelect(e: any): void {
    if(e.target.files){      
      const file_data = e.target.files[0];
      const data = new FormData();
      data.append("file", file_data);
      data.append("upload_preset", "spotting_angular_front");
      data.append("cloud_name", "dnykt6nal")
      this.uploadServices.
        uploadImage(data)
        .subscribe(response => {
          if(response) {
            this.url = response.url
            console.log(this.url);
            
          }
        })
    }
  };

}
