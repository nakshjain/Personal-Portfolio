import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private _loader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this._loader.start()
    setTimeout(()=>{
      this._loader.stop()
    }, 1000)
  }
}
