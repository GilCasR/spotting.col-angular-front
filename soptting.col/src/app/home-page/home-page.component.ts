import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(
    private localStore: LocalService
  ) {};

  ngOnInit () {
    console.log(this.localStore.getData("token"));
  }
}
