import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.pug',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent {
  public Name: String = "Dave";
  constructor() { }
}
