import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  image1 = 'assets/images/naksh/img-logo.png';

  skillInfo1: any[] = [
    {
      id: 'html',
      name: 'HTML',
      percentage: '85%',
    },
    {
      id: 'css',
      name: 'CSS',
      percentage: '90%',
    },
    {
      id: 'javascript',
      name: 'Javascript',
      percentage: '95%',
    },
    {
      id: '',
      name: '',
      percentage: '',
    },
  ];

  skillInfo2: any[] = [
    {
      id: 'cpp',
      name: 'C++',
      percentage: '75%',
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      percentage: '75%',
    },
    {
      id: 'jquery',
      name: 'jQuery',
      percentage: '90%',
    },
    {
      id: '',
      name: '',
      percentage: '',
    },
  ];
}
