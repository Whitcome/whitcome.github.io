import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	Skills: Array<Skill> = new Array<Skill>();

	ngOnInit() {
		this.Skills.push(
			new Skill('devicon-csharp-plain', 'C#'),
			new Skill('devicon-dotnetcore-plain', '.NET'),
			new Skill('devicon-java-plain', 'Java'),
			new Skill('fa fa-amazon', 'AWS'),
			new Skill('fa fa-database', 'SQL & NoSQL'),
			new Skill('devicon-angularjs-plain', 'Angular'),
			new Skill('devicon-typescript-plain', 'TypeScript'),
			new Skill('devicon-git-plain', 'Git'),
			new Skill('devicon-html5-plain', 'HTML'),
			new Skill('devicon-css3-plain', 'CSS')
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
