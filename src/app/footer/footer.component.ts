import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
