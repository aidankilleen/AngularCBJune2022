import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  template: `
  
    <div>

      <h2>User List</h2>
      <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Active</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td><a [routerLink]="'' + user.id">{{ user.id}}</a></td>
            <td>{{ user.name}}</td>
            <td>{{ user.email}}</td>
            <td>{{ user.active ? "Active": "Inactive"}}</td>
            <td>
              <button class="btn btn-danger" (click)="onDelete(user.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
    </table>

    <hr>

    <button 
      *ngIf="!adding"
      class="btn btn-success" 
      (click)="onAdd()">
      <i class="fa fa-user-plus"></i>
    </button>
    <div *ngIf="adding">
      Name:<input [(ngModel)]="newUser.name"><br>
      Email:<input [(ngModel)]="newUser.email"><br>
      Active:<input type="checkbox" [(ngModel)]="newUser.active"/><br>
      <button 
        (click)="onSave()"
        class="btn btn-primary"  
      >Save</button>
      <button 
        (click)="adding=false"
        class="btn btn-secondary"
      >Cancel
    </button>
    </div>

    </div>
  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users:User[];
  newUser:User;
  adding:boolean = false;

  onSave() {
    this.userService.addUser(this.newUser)
      .subscribe(addedUser => {
        //alert(JSON.stringify(addedUser));
        this.users.push(addedUser);
      });
    this.adding = false;
  }
  onAdd() {
    this.adding = true;
    this.newUser = new User(-1, "", "", false);
  }
  onDelete(id:number) {
    if (confirm("delete " + id)) {
      this.userService.deleteUser(id)
        .subscribe(()=>{
          let index = this.users.findIndex(user => user.id == id);
          this.users.splice(index, 1);
        })
    }
  }

  constructor(public userService:UserService) { 
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });    
  }
}
