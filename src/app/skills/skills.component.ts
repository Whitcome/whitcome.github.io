import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.pug',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Array<Skill> = new Array<Skill>();

  constructor() {
    this.createSkills();
  }

  private createSkills() {
    this.skills.push(
      new Skill("devicon-csharp-plain", "C#"),
      new Skill("devicon-dot-net-plain", ".NET"),
      new Skill("devicon-javascript-plain", "JavaScript"),
      new Skill("devicon-cplusplus-plain", "C++"),
      new Skill("devicon-visualstudio-plain", "Visual Studio"),
      new Skill("devicon-git-plain", "Git"),
      new Skill("devicon-html5-plain", "HTML"),
      new Skill("devicon-css3-plain", "CSS"),
      new Skill("fa fa-database", "SQL"),
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