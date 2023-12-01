import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  
  images = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400'
  ];
  activeSlideIndex = 0;

  next() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.images.length;
  }

  prev() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.images.length) % this.images.length;
  }

}
