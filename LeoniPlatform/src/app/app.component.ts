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
  showRoleManagement = false;
  showUserManagement = false;
  showOrderManagement = false;
management={showRoleManagement:false,
  showUserManagement:false,
  showOrderManagement:false
};
  username?: string;
  constructor(private tokenStorageService: TokenStorageService,private _roleService:RoleService){}
  ngOnInit(){ this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.role=this.roles[0];
//     this._roleService.findRoleByName(this.roles[0]).subscribe(
//         data=>{console.log("response received");
//         this.role=data;
//         console.log(this.roles);
//         if (this.role.roleManagement=="true"){this.management.showRoleManagement=true;}
// else if(this.role.roleManagement=="false"){this.management.showRoleManagement=false;}
// if (this.role.orderManagement=="true"){this.management.showOrderManagement=true;}
// else if(this.role.orderManagement=="false"){this.showOrderManagement=false;}    
// if (this.role.userManagement=="true"){this.showUserManagement=true;}
// else if(this.role.userManagement=="false"){this.showUserManagement=false;}
//          },
//           error=>{console.log("exception occured");
//           })
      

this.username = user.username;
    }}
  
}
