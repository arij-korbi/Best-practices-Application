import { User } from './../classes/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../classes/profile';
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
profiles:Profile[];
constructor(private _userService:UserService,private _router:Router,private _profileService:ProfileService,private route:ActivatedRoute) {this.profiles=[]; this.id=0;}

  ngOnInit(): void {
    this.findAllProfiles();
    this.id=this.route.snapshot.params['id'];
    this._userService.findUserById(this.id).subscribe(data=>{this.user=data; 
      console.log(this.user);
   }
      , error=>console.log(error));

  }
  findAllProfiles(){this._profileService.findAllProfiles().subscribe(
    data=>{console.log("response received");
    this.profiles=data;
    console.log(this.profiles);
     },
      error=>{console.log("exception occured");
      })}
      onSubmit(form: NgForm){this._userService.updateUser(this.id,this.user).subscribe(
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
