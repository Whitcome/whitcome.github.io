import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
export class AppComponent implements AfterViewInit  {
  IsLoading: Boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.IsLoading = false;
    this.cdr.detectChanges();
  }
}