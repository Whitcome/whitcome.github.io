import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = new Array<Skill>();

  ngOnInit() {
    this.skills.push(
      new Skill("devicon-java-plain", "Java"),
      new Skill("devicon-csharp-plain", "C#"),
      new Skill("devicon-dot-net-plain", ".NET"),
      new Skill("devicon-angularjs-plain", "Angular"),
      new Skill("devicon-typescript-plain", "TypeScript"),
      new Skill("devicon-visualstudio-plain", "Visual Studio"),
      new Skill("devicon-git-plain", "Git"),
      new Skill("devicon-html5-plain", "HTML"),
      new Skill("devicon-css3-plain", "CSS"),
      new Skill("fa fa-database", "SQL & CQL")
    );
  }
}

class Skill {
  private iconClass: String;
  private text: String;
  
  constructor(iconClass: String, text: String) {
    this.iconClass = iconClass;
    this.text = text;
  }
}