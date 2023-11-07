import { Component } from '@angular/core';
import { AircraftService } from '../services/aircraft.service';
import { AircraftTypesService } from '../services/aircraft-types.service';
import { AlineService } from '../services/aline.service';

@Component({
  selector: 'app-aircraft-dashboard',
  templateUrl: './aircraft-dashboard.component.html',
  styleUrls: ['./aircraft-dashboard.component.css']
})
export class AircraftDashboardComponent {
  aircrafts: Array<any> = [];
  types: Array<any> = [];
  airlines: Array<any> = [];

  displayForm: boolean = false;
  livery: boolean = false;

  constructor (
    private aircraftServices: AircraftService,
    private typeServices: AircraftTypesService,
    private airlineServices: AlineService
  ) {

  }

  ngOnInit(): void {
    this.aircraftServices
      .getAll()
      .subscribe(
        (response) => {
          this.aircrafts = response
        }
      )

    this.typeServices
        .getAll()
        .subscribe(
          (response) => {
            this.types = response
          }
        )

    this.airlineServices
          .getAll()
          .subscribe(
            (response) => {
              this.airlines = response
            }
          )
  }

  hideForm(): void {
    this.displayForm = !this.displayForm
  }

  onSubmit(aircraft: any) {
    console.log(aircraft.form.status);
    if(aircraft.form.status === "INVALID") return
    this.aircraftServices
      .postAircraft(aircraft.form.value)
      .subscribe(
        response => {
          console.log(response);
          
        }
      )
    
  }
}
