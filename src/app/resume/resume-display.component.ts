import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {PortfolioDataService} from "../api/portfolio.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume-display.component.html',
  styleUrls: ['./resume-display.component.css']
})
export class ResumeDisplayComponent implements OnInit{
  resumeUrl='assets/documents/resume.pdf'
  constructor(private _loader: NgxUiLoaderService, private portfolioDataService: PortfolioDataService) {
  }

  ngOnInit(): void {
    this._loader.start()
    this.getResume()
  }
  public page=1
  public pageLabel!: string

  getResume(){
    this.portfolioDataService.getResume().subscribe(
      (pdfBlob: Blob) => {
        this.resumeUrl = URL.createObjectURL(pdfBlob);
        console.log(this.resumeUrl)
        this._loader.stop()
      },
    )
  }
}
