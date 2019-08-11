import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  Skills: Array<Skill> = new Array();
  SkillsHtml: String = "";

  constructor() {
    this.createSkills();
    this.convertSkillsToHtml(this.Skills);
  }

  createSkills() {
    this.Skills.push(
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

  convertSkillsToHtml(skills: Array<Skill>) {
    skills.forEach(skill => { this.SkillsHtml += `<li><i class="${skill.IconClass}" aria-hidden="true"></i><span>${skill.Text}</span></li>` });
  }
}

class Skill {
  IconClass: String;
  Text: String;
  
  constructor(iconClass: String, text: String) {
    this.IconClass = iconClass;
    this.Text = text;
  }
}