import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Profile } from './../classes/profile';
import { ProfileService } from './../services/profile.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {
id:number;
msg:String="";
profile: Profile=new Profile();
  constructor(private _profileService:ProfileService, private router:Router, private route:ActivatedRoute) { this.id=0;}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this._profileService.findProfileById(this.id).subscribe(data=>{this.profile.profileName=data.profileName;  this.profile.orderManagement="true";
  this.profile.profileManagement="true";
  this.profile.userManagement="true";}
    , error=>console.log(error));
  
  }
  onSubmit(form:NgForm){this._profileService.updateProfile(this.id,this.profile).subscribe(
data=>{
  console.log(data);
  this.goToProfilesList();
}
,error=>{console.log(error);
this.msg="This profile name already exists";}
  );}
  goToProfilesList(){
    this.router.navigate(['/allprofiles']);
  }

}
