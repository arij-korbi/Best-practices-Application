import { Profile } from './../classes/profile';
import {ProfileService} from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.sass']
})
export class AddNewProfileComponent implements OnInit {
  profile=new Profile();
msg='';
  constructor(private _profileService:ProfileService,private _router:Router) { }

  ngOnInit(): void {
  }
  radioChangeHandlerProfile(event:any){
    this.profile.profileManagement=event.target.value;
  }
  radioChangeHandlerUser(event:any){
    this.profile.userManagement=event.target.value;
  } radioChangeHandlerOrder(event:any){
    this.profile.orderManagement=event.target.value;
  }
  addProfile(form:NgForm){this._profileService.addProfile(this.profile).subscribe(
    data=>{console.log("response received");
    console.log(data);
    this.msg="you have successfully added a profile";
    this.goToProfilesList();
   },
    error=>{
      this.msg="this profile already exists";
      console.log("exception occured");
    }
    )}
    goToProfilesList(){
      this._router.navigate(['/allprofiles']);
    }
}
