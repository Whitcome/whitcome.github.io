import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent implements OnInit {
  public Name: String = "Dave";
  constructor() { }

  ngOnInit() {
  }

}
