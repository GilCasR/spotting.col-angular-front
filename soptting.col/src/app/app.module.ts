import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AirportsDashboardComponent } from './airports-dashboard/airports-dashboard.component';
import { AirlineDashboardComponent } from './airline-dashboard/airline-dashboard.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { AircraftTypeDashboardComponent } from './aircraft-type-dashboard/aircraft-type-dashboard.component';
import { AircraftDashboardComponent } from './aircraft-dashboard/aircraft-dashboard.component';
import { PhotoDashboardComponent } from './photo-dashboard/photo-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AirportsDashboardComponent,
    AirlineDashboardComponent,
    AircraftTypeDashboardComponent,
    AircraftDashboardComponent,
    PhotoDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
