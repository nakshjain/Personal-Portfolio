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
      id:'img-0',
      link:'assets/images/naksh/naksh_img0.jpg'
    },
    {
      id:'img-1',
      link:'assets/images/naksh/naksh_img1.png'
    },
  ]
}
