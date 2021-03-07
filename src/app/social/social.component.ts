import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  SocialLinks = new Array<SocialLink>();

  ngOnInit() {
    this.SocialLinks.push(
      new SocialLink("fa fa-github", "GitHub", "https://github.com/Whitcome"),
      new SocialLink("fa fa-linkedin", "LinkedIn", "https://www.linkedin.com/in/dave-whitcome"),
      new SocialLink("fa fa-instagram", "Instagram", "https://www.instagram.com/davidwhitcome25")
    );
  }
}

class SocialLink {
  private iconClass: String;
  private text: String;
  private link: String;
  
  constructor(iconClass: String, text: String, link: String) {
    this.iconClass = iconClass;
    this.text = text;
    this.link = link;
  }
}