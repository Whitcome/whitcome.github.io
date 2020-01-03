import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.pug',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  SocialLinks: Array<SocialLink> = new Array<SocialLink>();

  constructor() {
    this.createSocialLinks();
  }

  private createSocialLinks() {
    this.SocialLinks.push(
      new SocialLink("fa fa-github", "GitHub", "https://github.com/Whitcome"),
      new SocialLink("fa fa-linkedin", "LinkedIn", "https://www.linkedin.com/in/david-whitcome"),
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