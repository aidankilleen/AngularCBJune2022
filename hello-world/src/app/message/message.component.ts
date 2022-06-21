import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() title = "The Title";
  @Input() text = "This is the message";
  @Input() important = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    //alert("you clicked a message");
    this.important = !this.important;
  }

}
