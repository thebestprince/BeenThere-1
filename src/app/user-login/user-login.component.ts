import { Component, Input, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();

  constructor(private loginuserservice: LoginuserService, private modalService: NgbModal) {}

  ngOnInit(): void {      
  }

  userLogin(){
    this.loginuserservice.loginUser(this.user).subscribe({
      next: (data) => {
      alert("Login successful!");
      this.modalService.dismissAll();
    },
      error: (error) => {
        alert("Username and/or password not correct.");
      }
    })
  }
}