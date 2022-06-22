import { Component, Input, OnInit } from '@angular/core';
import { UnsubscriptionError } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
    <div 
      [ngClass]="{'active': user.active, 'inactive': !user.active }"
    >
      <div *ngIf="!editing">
        <h2>{{ user.name }} </h2>
        <a href="mailto:{{ user.email }}">
          {{ user.email }}
        </a>
      </div>
      <div *ngIf="editing">
        <h2>Edit User</h2>
        <input [(ngModel)]="userToEdit.name"> <br>
        <input [(ngModel)]="userToEdit.email"><br>
        <input type="checkbox" [(ngModel)]="userToEdit.active"><br>

      </div>
      <button (click)="onEditClick()" *ngIf="!editing">Edit</button>
      <button (click)="onSaveClick()" *ngIf="editing">Save</button>
      <button (click)="onCancelClick()" *ngIf="editing">Cancel</button>

    </div>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  editing:boolean = false;
  @Input() user:User = new User(-1,"","",false);
  userToEdit:User = new User(-1, "", "", false);

  onEditClick() {
    this.userToEdit = new User (this.user.id,
                                this.user.name,
                                this.user.email, 
                                this.user.active);
    this.editing = !this.editing;
  }
  onCancelClick() {
    this.editing = false;
  }
  onSaveClick() {
    // update the user with the new values
    this.user.name = this.userToEdit.name;
    this.user.email = this.userToEdit.email;
    this.user.active = this.userToEdit.active;

    //this.user = this.userToEdit;
    this.editing = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
