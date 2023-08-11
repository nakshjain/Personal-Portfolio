import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  initials = 'NJ';
  portfolio = 'Portfolio';
  navbarHeader: any[] = [
    {
      id: 'home',
      name: 'Home',
      link: 'home',
    },
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

  constructor(private _loader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this._loader.start()
    setTimeout(()=>{
      this._loader.stop()
    }, 1000)
  }
}
