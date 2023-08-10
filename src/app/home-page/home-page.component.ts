import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit{
  constructor(private _loader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this._loader.start()
    setTimeout(()=>{
      this._loader.stop()
      }, 1000)
  }

}
