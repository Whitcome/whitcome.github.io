import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  private Skills: Array<Skill> = new Array();
  public SkillsHtml: String = "";

  constructor() {
    this.createSkills();
    this.convertSkillsToHtml(this.Skills);
  }

  private createSkills() {
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

  private convertSkillsToHtml(skills: Array<Skill>) {
    skills.forEach(skill => { this.SkillsHtml += skill.convertToHtml() });
  }
}

class Skill {
  private IconClass: String;
  private Text: String;
  
  constructor(iconClass: String, text: String) {
    this.IconClass = iconClass;
    this.Text = text;
  }

  public convertToHtml() {
    return `<li><i class="${this.IconClass}" aria-hidden="true"></i><span>${this.Text}</span></li>`;
  }
}