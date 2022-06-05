import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements AfterViewInit {
  Name: string = "David Whitcome";
  Tag: string = "Software Developer";
  
  @ViewChild('headerBackground')
  private headerBackground: ElementRef;

  ngAfterViewInit() {
    this.ParallaxAnimation(); // Set header background to correct position for some browsers.
  }

  @HostListener('window:scroll', ['$event'])
  ParallaxAnimation() {
    if (this.headerBackground) {
      this.headerBackground.nativeElement.style.marginTop = Math.max(0, window.pageYOffset/4) + "px";
    }
  }
}