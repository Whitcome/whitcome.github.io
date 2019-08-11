import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  SocialLinks: Array<SocialLink> = new Array();
  SocialLinksHtml: String = "";

  constructor() {
    this.createSocialLinks();
    this.convertSocialLinksToHtml(this.SocialLinks);
  }

  createSocialLinks() {
    this.SocialLinks.push(
      new SocialLink("fa fa-github", "GitHub", "https://github.com/Whitcome"),
      new SocialLink("fa fa-linkedin", "LinkedIn", "https://www.linkedin.com/in/david-whitcome"),
      new SocialLink("fa fa-instagram", "Instagram", "https://www.instagram.com/davidwhitcome25"),
      new SocialLink("fa fa-soundcloud", "SoundCloud", "https://soundcloud.com/david-whitcome")
    );
  }

  convertSocialLinksToHtml(skills: Array<SocialLink>) {
    skills.forEach(socialLink => { this.SocialLinksHtml += socialLink.convertToHtml() });
  }
}

class SocialLink {
  IconClass: String;
  Text: String;
  Link: String;
  
  constructor(iconClass: String, text: String, link: String) {
    this.IconClass = iconClass;
    this.Text = text;
    this.Link = link;
  }

  convertToHtml() {
    return `<li><a href="${this.Link}" class="github"><i class="${this.IconClass}" aria-hidden="true"></i><span>${this.Text}</span></a></li>`;
  }
}