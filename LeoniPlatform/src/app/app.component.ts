import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  title = 'LeoniPlatform';
  isAuth:boolean;
  constructor(private _userService:UserService){this.isAuth=this._userService.isAuth;}
  ngOnInit(){this.isAuth=this._userService.isAuth;}

}
