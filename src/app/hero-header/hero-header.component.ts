import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.pug',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  Name: string = "David Whitcome";
  Tag: string = "Web Developer & Software Engineer";

  constructor() {
    window.addEventListener('scroll', this.ParallaxAnimation);
  }

  ngOnInit() {
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
  }

  ParallaxAnimation() {
    var headerBackground: HTMLElement = document.getElementById("header-background");
    if (headerBackground != null) {
        var backgroundPosition: number = window.pageYOffset / 4;
        if (backgroundPosition >= 0)
            headerBackground.style.marginTop = backgroundPosition + "px";
        else
            headerBackground.style.marginTop = "0px";
    }
  }
}