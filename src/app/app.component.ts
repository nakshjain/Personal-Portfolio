import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  contactInfo: any[] = [
    {
      id: 'e-mail',
      name: 'Email',
      imageLink: 'assets/images/contact/mail.png',
      link: 'mailto:nakshatrajain246@gmail.com',
    },
    {
      id: 'phone',
      name: 'Phone',
      imageLink: 'assets/images/contact/phone.png',
      link: 'tel:+919971139934',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      imageLink: 'assets/images/contact/linkedin.png',
      link: 'https://www.linkedin.com/in/nakshjain',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      imageLink: 'assets/images/contact/twitter.png',
      link: 'https://twitter.com/nakshjain23',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      imageLink: 'assets/images/contact/facebook.png',
      link: 'https://www.facebook.com/nakshjain23/',
    },
  ];
}
