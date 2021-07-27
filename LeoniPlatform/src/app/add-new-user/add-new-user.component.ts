import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Profile } from '../classes/profile';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.sass']
})
export class AddNewUserComponent implements OnInit {
  passwordc="";
  user=new User();
msg='';
profiles:Profile[];
constructor(private _userService:UserService,private _router:Router,private _profileService:ProfileService) {this.profiles=[]; }

  ngOnInit(): void {
    this.findAllProfiles();
  }
  findAllProfiles(){this._profileService.findAllProfiles().subscribe(
    data=>{console.log("response received");
    this.profiles=data;
    console.log(this.profiles);
     },
      error=>{console.log("exception occured");
      })}
  addUser(form:NgForm){this._userService.addUser(this.user).subscribe(
    data=>{console.log(data);      console.log("response received");
    this.msg="you have successfully added a user";

    this.goToUsersList();
   },
    error=>{console.log("exception occured");
        this.msg="this profile already exists";

    }
    )}
    goToUsersList(){
      this._router.navigate(['/allusers']);
    }
}
