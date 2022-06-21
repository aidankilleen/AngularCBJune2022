import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Component Investigation';

  messages = [
    { title: "Msg One", text: "Msg 1 text", important: true }, 
    { title: "Msg Two", text: "Msg 2 text", important: false },
    { title: "Msg Three", text: "Msg 3 text", important: true }, 
    { title: "Msg Four", text: "Msg 4 text", important: false } 

  ];

  onClick() {
    alert("you clicked the button");
  }

}
