import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    {{ selectedUserId }}
    <select [(ngModel)]="selectedUserId">
      <option [value]="user.id"
        *ngFor="let user of users">
        {{ user.name }}
      </option>
    </select>
    <button (click)="onDeleteClick()">Delete</button>

    <user *ngFor="let user of users"
      [user]="user"
    >
    </user>
    {{ userService.getUsers() | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUserId:number = -1;

  title = 'user manager app';
  users:User[] = [];

  onDeleteClick() {
    alert("delete:" + this.selectedUserId);
  }

  // userService = new UserService();
  constructor(public userService:UserService) {

    this.users = userService.getUsers();
  }

  a:number = 10;
  b:number = 20;

  onChange(txtTitle:string) {
    this.title = txtTitle;
  }




}
