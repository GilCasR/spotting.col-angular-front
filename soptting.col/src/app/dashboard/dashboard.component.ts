import { Component } from '@angular/core';
import { LocalService } from '../services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  token: string | null = "";
  showAirports: boolean = false;
  showAirlines: boolean = false;
  showAircraftTypes: boolean = false;
  showAircraft: boolean = false;

  constructor( 
    private localStore: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.localStore.getData("token")
    console.log(this.token);
    
    if(!this.token){
      this.router.navigate(["/landing"])
    }
  };

  displayAirports(): void {
    this.showAirports = !this.showAirports
  };

  displayAirlines(): void {
    this.showAirlines = !this.showAirlines
  };

  displayAircraftTypes(): void {
    this.showAircraftTypes = !this.showAircraftTypes
  }

  displayAircrafts(): void {
    this.showAircraft = !this.showAircraft
  }
}
