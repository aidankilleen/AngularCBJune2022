import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
      <div *ngIf="show">
        <h1>Welcome {{ name }}</h1>
        <button (click)="onClick()">dismiss</button>
      </div>
    `,
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  @Input() name = "";
  show = true;
  constructor() { }
  ngOnInit(): void {
  }

  onClick() {
    this.show = false;
  }
}
