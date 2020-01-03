import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div id="footer">© {{year}} David Whitcome</div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: string = '';

  ngOnInit() {
    this.year = new Date().getFullYear().toString();
  }
}