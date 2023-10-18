import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "landing", component: LandingPageComponent},
  { path: "home", component: HomePageComponent },
  { path: "login", component: LoginComponent},
  { path: "**", component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
