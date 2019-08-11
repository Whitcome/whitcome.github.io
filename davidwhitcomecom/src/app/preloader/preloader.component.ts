import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    document.getElementById("flex-loading").style.opacity = "0";
    setTimeout(this.stopLoadingAnimation, 400);
  }

  stopLoadingAnimation() {
      document.getElementById("preloader").style.cssText = "animation: none;";
      document.getElementById("flex-loading").style.cssText = "display: none;";
  };
}
