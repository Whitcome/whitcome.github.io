import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setFooterYear();
  }

  setFooterYear() {
    var footerDate: HTMLElement = document.getElementById("footerDate");
    if (footerDate != null)
        footerDate.innerText = new Date().getFullYear().toString();
  }
}
