import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'NJ Portfolio';
  initials = 'NJ';
  portfolio = 'Portfolio';
  navbarHeader: any[] = [
    {
      id: 'about',
      name: 'About Me',
      link: 'about-me',
    },
    {
      id: 'projects',
      name: 'Projects',
      link: 'projects',
    },
    {
      id: 'resume',
      name: 'Resume',
      link: 'resume',
    },
  ];
}
