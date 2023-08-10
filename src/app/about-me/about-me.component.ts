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
  intro1=`Hello there! I'm Nakshatra Jain, a passionate and innovative Full Stack Web Developer with a mission to craft seamless digital experiences that marry form and function. With a strong foundation in both front-end and back-end development, I bring websites and applications to life, making them user-friendly, efficient, and visually striking`
  intro2=`My journey began with a fascination for coding during college, and since then, I've honed my skills in development. My focus has been on creating user-friendly websites that combine functionality with elegant design. From crafting interactive web applications to developing clean and efficient code, I thrive on overcoming challenges and delivering seamless digital solutions.`
  intro3=`Collaboration is key to my process. By understanding user needs and working in diverse teams, I ensure that every project I work on is both efficient and effective. Beyond coding, you might find me travelling, cooking up new recipes, or just listening music.`
  intro4=`Ready to bring your digital vision to life? Let's connect and make it happen!`
  email: any={
    name:'nakshatrajain246@gmail.com',
    link:'mailto:nakshatrajain246@gmail.com',
  }
  phone: any={
    name:'+91-9971139934',
    link:'tel:+919971139934',
  }
}
