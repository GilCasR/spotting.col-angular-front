import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor() {};

  currentPhotoIndex = 0;
  photos = [
    '../../assets/landingPage.JPG', 
    '../../assets/DSCN0836.JPG', 
    '../../assets/DSCN1058.JPG', 
    '../../assets/landingPage.JPG', 
    '../../assets/DSCN0836.JPG'
  ];

  previousPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    }else{
      this.currentPhotoIndex = this.photos.length - 1
    }
  }

  nextPhoto() {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    }else{
      this.currentPhotoIndex = 0
    }
  }

  redirectToHash() {
    window.location.href = '#';
  }
}
