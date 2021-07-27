import { NgForm } from '@angular/forms';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { User } from './../classes/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
user=new User();
msg='';
isAuth:boolean=false;

constructor(private _userService:UserService,private _router:Router) { }
  ngOnInit(): void {
  }

  login(form:NgForm){this._userService.login(this.user).subscribe(
    data=>{console.log(data);     
       console.log("response received");
    this.msg="loggedIn";
    this.isAuth=this._userService.isAuth;
    console.log(this.isAuth);

    this.goToSession();
   },
    error=>{console.log("exception occured");
        this.msg="t2akad";

    }
    )}
    goToSession(){
      this._router.navigate(['/allusers']);
    }

}
