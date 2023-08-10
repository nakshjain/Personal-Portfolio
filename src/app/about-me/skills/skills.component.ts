import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillDescription='Proficiently showcasing a range of technical tools to demonstrate my experience'

  skillInfo1: any[] = [
    {
      id: 'cpp',
      name: 'C++',
      value: '75%',
      imageLink:'assets/images/skills/cpp-logo.png',
    },
    {
      id: 'html',
      name: 'HTML',
      value: '85%',
      imageLink:'assets/images/skills/html5-logo.png',
    },
    {
      id: 'javascript',
      name: 'Javascript',
      value: '95%',
      imageLink:'assets/images/skills/javascript-logo.png',
    },
    {
      id: 'angular',
      name: 'Angular',
      value: '75%',
      imageLink:'assets/images/skills/angular-logo.png',
    },
    {
      id: 'git',
      name: 'Git',
      value: '75%',
      imageLink:'assets/images/skills/git-logo.png',
    },
  ];

  skillInfo2: any[] = [
    {
      id: 'java',
      name: 'Java',
      value: '90%',
      imageLink:'assets/images/skills/java-logo.png',
    },
    {
      id: 'css',
      name: 'CSS',
      value: '90%',
      imageLink:'assets/images/skills/css3-logo.png',
    },
    {
      id: 'node',
      name: 'NodeJs',
      value: '80%',
      imageLink:'assets/images/skills/node-logo.png',
    },
    {
      id: 'springboot',
      name: 'SpringBoot',
      value: '75%',
      imageLink:'assets/images/skills/springboot-logo.png',
    },
    {
      id: 'jira',
      name: 'Jira',
      value: '75%',
      imageLink:'assets/images/skills/jira-logo.png',
    },
  ];
}
