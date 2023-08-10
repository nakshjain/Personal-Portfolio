import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed": 900,
    "dots": true,
    "infinite": true
  };

  images = [
    {
      id:'img-1',
      link:'assets/images/naksh/img1.jpg'
    },
    {
      id:'img-2',
      link:'assets/images/naksh/img2.jpg'
    },
    {
      id:'img-3',
      link:'assets/images/naksh/img3.jpg'
    },
    {
      id:'img-4',
      link:'assets/images/naksh/img4.jpg'
    },
    {
      id:'img-5',
      link:'assets/images/naksh/img5.jpg'
    },
    {
      id:'img-6',
      link:'assets/images/naksh/img6.jpg'
    },
    {
      id:'img-7',
      link:'assets/images/naksh/img7.jpg'
    },
    {
      id:'img-8',
      link:'assets/images/naksh/img8.jpg'
    },
  ]
}
