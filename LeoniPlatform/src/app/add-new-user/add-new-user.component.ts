import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.sass']
})
export class AddNewUserComponent implements OnInit {
  passwordc="";
  user=new User();
msg='';
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
  }
  addUser(form:NgForm){this._userService.addUser(this.user).subscribe(
    data=>{console.log("response received");
    this.msg="you have successfully added a user";
    this._router.navigate(['/success']);
   },
    error=>{console.log("exception occured");
    this.msg=error.error;
    }
    )}
}
