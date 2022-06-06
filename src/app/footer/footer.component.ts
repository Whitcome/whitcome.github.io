import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div id="footer">© {{year}} David Whitcome</div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: string = new Date().getFullYear().toString();
}