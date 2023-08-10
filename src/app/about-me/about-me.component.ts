import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit{
  constructor(private _loader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this._loader.start()
    setTimeout(()=>{
      this._loader.stop()
    }, 1000)
  }

  image1 = 'assets/images/naksh/img-logo.png'
  intro= 'My objective is to be a part of a fast growing MNC in a position that offers opportunites to work in Full Stack Web Development environment where I can use my knowledge and experience in Frontend Web Development.'
  email: any={
    name:'nakshatrajain246@gmail.com',
    link:'mailto:nakshatrajain246@gmail.com',
  }
  phone: any={
    name:'+91-9971139934',
    link:'tel:+919971139934',
  }
  skillDescription='Here’s the most useful writing skills guide this side of Nakshatra Jain.'

  skillInfo1: any[] = [
    {
      id: 'html',
      name: 'HTML',
      value: '85%',
      imageLink:'assets/images/skills/html5-logo.png',
    },
    {
      id: 'css',
      name: 'CSS',
      value: '90%',
      imageLink:'assets/images/skills/css3-logo.png',
    },
    {
      id: 'javascript',
      name: 'Javascript',
      value: '95%',
      imageLink:'assets/images/skills/javascript-logo.png',
    },
    {
      id: 'node',
      name: 'NodeJs',
      value: '80%',
      imageLink:'assets/images/skills/node-logo.png',
    },
  ];

  skillInfo2: any[] = [
    {
      id: 'cpp',
      name: 'C++',
      value: '75%',
      imageLink:'assets/images/skills/cpp-logo.png',
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      value: '75%',
      imageLink:'assets/images/skills/bootstrap-logo.png',
    },
    {
      id: 'jquery',
      name: 'jQuery',
      value: '90%',
      imageLink:'assets/images/skills/jquery-logo.png',
    },
    {
      id: 'angular',
      name: 'Angular',
      value: '75%',
      imageLink:'assets/images/skills/angular-logo.png',
    },
  ];
}
