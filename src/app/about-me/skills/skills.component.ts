import {Component, OnInit} from '@angular/core';
import {PortfolioDataService} from "../../api/portfolio.service";
import {PortfolioData} from "../../types/portfolio-data.types";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillDescription='Proficiently showcasing a range of technical tools to demonstrate my experience'
  skillsInfo: PortfolioData[]=[]
  skillInfo1: PortfolioData[] = []
  skillInfo2: PortfolioData[] = []

  constructor(private portfolioDataService:PortfolioDataService) {
  }

  ngOnInit() {
    this.getAllSkillsInfo()
  }

  getAllSkillsInfo(){
    this.portfolioDataService.getDataByField('skill').subscribe(
      (data)=>{
        this.skillsInfo=data
        const middleIndex=Math.floor((data.length+1)/2)
        this.skillInfo1=data.slice(0, middleIndex)
        this.skillInfo2=data.slice(middleIndex)
      }
    )
  }
}
