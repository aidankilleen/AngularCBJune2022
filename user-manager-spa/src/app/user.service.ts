import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[] = [
    { id:1, name:"Alice", email:"alice@gmail.com", active:true }, 
    { id:2, name:"Bob", email:"bob@gmail.com", active:true }, 
    { id:3, name:"Carol", email:"carol@gmail.com", active:false }, 
    { id:4, name:"Dan", email:"dan@gmail.com", active:true }, 
  ];

  url:string = "http://localhost:3000/users";

  constructor(public httpClient:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get(this.url) as Observable<User[]>;
  }

  getUser(id:number): Observable<User> {
    return this.httpClient.get(`${this.url}/${id}`) as Observable<User>;
  }

  deleteUser(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`) as Observable<Object>;
  }

  addUser(userToAdd:User): Observable<User> {
    userToAdd.id = NaN;
    return this.httpClient.post(this.url, userToAdd) as Observable<User>;
  }
}
