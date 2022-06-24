import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <div>
      <h2>User Detail - {{ id }}</h2>
      <table>
        <tr>
          <td>Id</td><td>{{ user.id }}</td>
        </tr>
        <tr>
          <td>Name</td><td>{{ user.name }}</td>
        </tr>
        <tr>
          <td>Email</td><td>{{ user.email }}</td>
        </tr>
        <tr>
          <td>Active</td><td>{{ user.active ? "Active" : "Inactive" }}</td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  id:number;
  user:User;

  constructor(public route:ActivatedRoute, public userService:UserService) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getUser(this.id)
        .subscribe(user => {
          this.user=user
        });
    });
  }
}
