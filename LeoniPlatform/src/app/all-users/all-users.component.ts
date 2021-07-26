import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.sass']
})
export class AllUsersComponent implements OnInit {
  @Input()userId:number;

  users:User [];
  constructor(private  _userService:UserService,private router:Router ) {this.users=[]; this.userId=0;}


findAllUsers(){this._userService.findAllUsers().subscribe(
  data=>{console.log("response received");
  this.users=data;
  console.log(this.users);
   },
    error=>{console.log("exception occured");
    })}
    ngOnInit(): void {
      this.findAllUsers();
    }
    deleteUser(id:number){
      this._userService.deleteUser(id).subscribe(
        data=>{console.log(data);
          this.findAllUsers();
        },
        error=>{console.log("exception occured");}

      )
    }
    editProfile(id:number){    this.router.navigate(['/editprofile',id]);}
}
