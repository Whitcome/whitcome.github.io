import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div id="footer">© <span id="footerDate"></span> David Whitcome</div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    this.setFooterYear();
  }

  setFooterYear() {
    var footerDate: HTMLElement = document.getElementById("footerDate");
    if (footerDate != null)
        footerDate.innerText = new Date().getFullYear().toString();
  }
}