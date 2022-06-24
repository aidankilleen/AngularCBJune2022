import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccordionItem } from './accordion-item.model';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
    
    <app-navbar></app-navbar>

    <h1>{{ title | titlecase }}</h1>
    <button 
      class="btn btn-primary"
      ngbTooltip="Press the Button"
      placement="right"
      (click)="onClick()"
    >Press Me
    </button>

    <app-accordion [items]="newsItems">
    </app-accordion>

    
    <user-modal [user]="user" (changed)="onChanged($event)">
    </user-modal>

  <hr>
  {{ user | json }}<br>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular bootstrap test';
  isMenuCollapsed = true;

  user:User = new User(1, "Alice", "alice@gmail.com", false);

  constructor() {}

  onChanged(updatedUser:User) {
    this.user = updatedUser;
  }

  onClick() {
    alert("this is a popup");
  }


  newsItems: AccordionItem[] = [
    { title: "Item 1", text: "this is item 1" },
    { title: "Item 2", text: "this is item 2" },

  ]
}
