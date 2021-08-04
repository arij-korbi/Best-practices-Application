import { RoleService } from './role.service';
import { TokenStorageService } from './tokenStorage.service';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router,UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class OrderGuard implements CanActivate{
role:any;
username?: string;
roles: string[] = [];  

 constructor(private router: Router,private tokenStorageService:TokenStorageService,private _roleService:RoleService) { }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
 { 
  
  this.roles = this.tokenStorageService.getUser().roles;
  
  this._roleService.findRoleByName(this.roles[0]).subscribe(
    data=>{
    this.role=data;
    console.log(this.roles);
    
   },
      error=>{console.log(error);
      })
      if  (this.role.orderManagement=="true" ) {
        return true;
      } else
      {
         this.router.navigate(['/allusers']);
          return false;
  
    } }
}