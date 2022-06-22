import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <button (click)="onMakeAjaxCall()">Make Ajax Call</button>





    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          *ngFor="let user of users" 
          [ngClass]="{'active':user.active, 'inactive': !user.active}"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td><button (click)="onDeleteUser(user.id)">Delete</button></td>
        </tr>
    </table>

    <hr>

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

  onMakeAjaxCall(){
    //alert("make ajax call");

    this.userService.getUsersFromRestService()
      .subscribe((data) => {
        //alert(JSON.stringify(data));
        this.users = data as User[];
      })
  }



  onDeleteUser(userId:number) {
    if (confirm("delete:" + userId)) {
      this.userService.deleteUser(userId);
    }
  }
  onDeleteClick() {
    if (confirm("delete:" + this.selectedUserId)) {
      this.userService.deleteUser(this.selectedUserId);
    }
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
