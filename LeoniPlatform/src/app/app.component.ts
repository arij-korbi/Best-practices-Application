import { RoleService } from './services/role.service';
import { TokenStorageService } from './services/tokenStorage.service';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { Role } from './classes/Role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  title = 'LeoniPlatform';
  private roles: String[] = [];
  private role:any;
  isLoggedIn = false;
 
  username?: string;
  constructor(private tokenStorageService: TokenStorageService,private _roleService:RoleService){}
  ngOnInit(){ this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
this.username = user.username;
    }}
  
}
