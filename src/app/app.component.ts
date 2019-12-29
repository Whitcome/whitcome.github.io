import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loading', [
      state('true', style({
        opacity: 0
      })),
      state('false', style({
        opacity: 1
      })),
      transition('true => false', [
        animate(200)
      ])
    ])
  ]
})
export class AppComponent {

}