import { RoleService } from '../services/role.service';
import { User } from './../classes/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
id:number;
  passwordc="";
  user=new User();
msg='';
 roles:any[];
constructor(private _userService:UserService,private _router:Router,private route:ActivatedRoute,private _roleService:RoleService) { this.id=0;this.roles=[];}

  ngOnInit(): void {
     this.findAllRoles();
    this.id=this.route.snapshot.params['id'];
    this._userService.findUserById(this.id).subscribe(data=>{this.user=data; 
      console.log(this.user);
   }
      , error=>console.log(error));

  }
  findAllRoles(){this._roleService.findAllRoles().subscribe(
    data=>{console.log("response received");
    this.roles=data;
    console.log(this.roles);
     },
      error=>{console.log("exception occured");
      })}
      onSubmit(form: NgForm){    this.user.role=[this.user.role];
        this._userService.updateUser(this.id,this.user).subscribe(
        data=>{
          console.log(data);
          this.goToUsersList();
        }
        ,error=>{console.log(error);
        this.msg="This profile name already exists";}
          );}

          goToUsersList(){
            this._router.navigate(['/allusers']);
          }
}
