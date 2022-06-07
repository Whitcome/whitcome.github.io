import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements AfterViewInit {
  public Name: string = "David Whitcome";
  public Tag: string = "Software Developer";
  
  @ViewChild('headerBackground')
  private headerBackground: ElementRef;

  ngAfterViewInit() {
    this.parallaxAnimation(); // Set header background to correct position for some browsers.
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    requestAnimationFrame(this.parallaxAnimation);
  }

  parallaxAnimation = () => {
    if (this.headerBackground) {
      this.headerBackground.nativeElement.style.marginTop = Math.max(0, window.pageYOffset/4) + "px";
    }
  }
}