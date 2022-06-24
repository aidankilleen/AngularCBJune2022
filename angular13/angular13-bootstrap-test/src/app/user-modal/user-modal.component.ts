import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user.model';

@Component({
  selector: 'user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Input() user:User = new User(-1, "", "", false);
  userToEdit:User = new User(-1, "", "", false);

  @Output() changed = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeResult:string = "";

  open(content:any) {

    this.userToEdit = new User(this.user.id, 
                              this.user.name, 
                              this.user.email, 
                              this.user.active);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // update the user object if you press save in the modal
      this.user = this.userToEdit;

      this.changed.emit(this.user);



    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //this.closeResult = `Dismissed`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
