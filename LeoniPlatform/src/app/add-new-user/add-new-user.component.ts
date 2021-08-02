import { RoleService } from './../services/role.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router'
import { Role } from '../classes/Role';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.sass']
})
export class AddNewUserComponent implements OnInit {
  passwordc="";
  user=new User();
msg='';
roles:any[];
role:String;
constructor(private _userService:UserService,private _router:Router,private _roleService:RoleService) {this.roles=[];this.role=""; }

  ngOnInit(): void {
     this.findAllRoles();
  }
  findAllRoles(){this._roleService.findAllRoles().subscribe(
    data=>{console.log("response received");
    this.roles=data;
    console.log(this.roles);
     },
      error=>{console.log(error);
      })}
  addUser(form:NgForm){
    console.log(this.user.role);
    this.user.role=[this.user.role];
    this._userService.addUser(this.user).subscribe(
    data=>{console.log(data);      console.log("response received");
    this.msg="you have successfully added a user";
    this.goToUsersList();
   },
    error=>{console.log(error);
        this.msg=error;

    }
    )}
    goToUsersList(){
      this._router.navigate(['/allusers']);
    }
}
