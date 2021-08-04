import { RoleService } from '../services/role.service';
import { TokenStorageService } from '../services/tokenStorage.service';
import { UserService } from '../services/user.service';
import { Component, OnInit,Input } from '@angular/core';
import { Role } from '../classes/Role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  showRoleManagement = false;
  showUserManagement = false;
  showOrderManagement=false;
  username?: string;
role:any;
  constructor(private  _userService:UserService,private tokenStorageService:TokenStorageService,private _roleService:RoleService ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this._roleService.findRoleByName(user.roles[0]).subscribe(
                data=>{console.log("response received");
                this.role=data;
                if (this.role.roleManagement=="true"){this.showRoleManagement=true;}
        else if(this.role.roleManagement=="false"){this.showRoleManagement=false;}
     if (this.role.orderManagement=="true"){this.showOrderManagement=true;}
         else if(this.role.orderManagement=="false"){this.showOrderManagement=false;}    
        if (this.role.userManagement=="true"){this.showUserManagement=true;}
         else if(this.role.userManagement=="false"){this.showUserManagement=false;}
         console.log(this.showOrderManagement,this.showRoleManagement,this.showUserManagement);

               },
                  error=>{console.log(error);
                  })
    
      this.username = user.username;
    }
    
  }

}
