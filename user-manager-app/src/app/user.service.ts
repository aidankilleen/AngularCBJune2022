import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true), 
    new User(2, "Bob", "bob@gmail.com", true), 
    new User(3, "Carol", "carol@gmail.com", false), 
    new User(4, "Dan", "dan@gmail.com", true),
    new User(5, "Eve", "eve@gmail.com", false),
  ];

  url:string = "http://localhost:3000/users";

  constructor(public httpClient: HttpClient) { }

  getUsersFromRestService() {
    return this.httpClient.get(this.url);
  }


  getUsers(): User[] {
    return this.users;
  }
  deleteUser(id: number): void {
    let index = this.users.findIndex(user => user.id == id);
    this.users.splice(index, 1);
  }
}
