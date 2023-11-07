import { Component } from '@angular/core';
import { AircraftService } from '../services/aircraft.service';
import { AirportService } from '../services/airport.service';
import { UploadService } from '../services/upload.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-dashboard',
  templateUrl: './photo-dashboard.component.html',
  styleUrls: ['./photo-dashboard.component.css']
})
export class PhotoDashboardComponent {
  displayForm: boolean = false;

  aircrafts: Array<any> = [];
  airports: Array<any> = [];
  photos: Array<any> = [];

  url: string = "";

  constructor(
    private aircraftServices: AircraftService,
    private airportServices: AirportService,
    private photoServices: PhotoService,
    private uploadServices: UploadService
  ) {};

  ngOnInit():void {
     this.aircraftServices
      .getAll()
      .subscribe(
        (response) => {
          this.aircrafts = response      
        }
      )

      this.airportServices
        .getAll()
        .subscribe(
          (response) => {
            this.airports = response
          }
        )
      
      this.photoServices
          .getAll()
          .subscribe(
            (response) => {
              this.photos = response
            }
          )
  };

  onSubmit(photo: any): void {
    if(photo.form.status === "INVALID") return
    if(!this.url) return    
    this.photoServices
      .postPhoto(photo.form.value, this.url)    
      .subscribe(
        (response) => {
          console.log(response);
          
        }
      )
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

  hideForm(): void {
    this.displayForm = !this.displayForm
  };
}
