import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TokenStorageService } from '../services/tokenStorage.service';

import { UserService } from '../services/user.service';
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
isLoggedIn = false;
isLoginFailed = false;
roles: string[] = [];
url:any;
constructor(private tokenStorage: TokenStorageService,private _authService:AuthService,private _router:Router) {
  this.url="";
 }
  ngOnInit(): void {
    this.url=localStorage.getItem('url');

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
  }}

  signIn(form:NgForm){this._authService.login(this.user).subscribe(
    data=>{console.log(data);     
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
      console.log(this.url);
      //  this._router.navigate(['/updateorder',0]);
      
   },
    error=>{console.log("exception occured");
    this.msg= error.error.message;
    this.isLoginFailed = true;

    }
    )}
    reloadPage(): void {
      window.location.reload();
      window.location.href=this.url;
    }
}
