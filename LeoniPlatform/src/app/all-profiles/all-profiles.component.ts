import { Profile } from './../classes/profile';
import { ProfileService } from './../services/profile.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.sass']
})
export class AllProfilesComponent implements OnInit {
  @Input()profileId:number;

  profiles:Profile [];
  constructor(private  _profileService:ProfileService, private router:Router ) {this.profiles=[]; this.profileId=0;}


findAllProfiles(){this._profileService.findAllProfiles().subscribe(
  data=>{console.log("response received");
  this.profiles=data;
  console.log(this.profiles);
   },
    error=>{console.log("exception occured");
    })}
    ngOnInit(): void {
      this.findAllProfiles();
    }
    deleteProfile(id:number){
      this._profileService.deleteProfile(id).subscribe(
        data=>{console.log(data);
          this.findAllProfiles();
        },
        error=>{console.log("exception occured");}

      )
    }
    updateProfile(id:number){    this.router.navigate(['/updateprofile',id]);}

}