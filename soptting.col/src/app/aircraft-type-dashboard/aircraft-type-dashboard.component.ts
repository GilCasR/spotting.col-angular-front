import { Component } from '@angular/core';

import { AircraftTypesService } from '../services/aircraft-types.service';

@Component({
  selector: 'app-aircraft-type-dashboard',
  templateUrl: './aircraft-type-dashboard.component.html',
  styleUrls: ['./aircraft-type-dashboard.component.css']
})
export class AircraftTypeDashboardComponent {
  aircraftTypes: Array<any> = []
  type: string = ""
  manufacturer: string = ""

  constructor (
    private aircraftServices: AircraftTypesService
  ) {}

  ngOnInit ():void {
    this.aircraftServices
      .getAll()
      .subscribe(
        (response) => {
          console.log(response);
          this.aircraftTypes = response
        }
      )
  }

  onSearch(): void {
    this.aircraftServices
      .searchType(this.manufacturer, this.type)
      .subscribe(
        (response) => {
          console.log(response);
          
        }
      )
    
  }
}
