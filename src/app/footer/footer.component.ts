import {Component, OnInit} from '@angular/core';
import {PortfolioDataService} from "../api/portfolio.service";
import {PortfolioData} from "../types/portfolio-data.types";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  contactInfos: PortfolioData[]=[]

  constructor(private imageDataService:PortfolioDataService) {
  }

  ngOnInit() {
    this.getAllContactDetails()
  }

  getAllContactDetails(){
    this.imageDataService.getDataByField('contact').subscribe(
      (data)=>{
        this.contactInfos=data
      }
    )
  }
}
