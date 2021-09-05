import { TokenStorageService } from './tokenStorage.service';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router,UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate{
    isLoggedIn = false;

    constructor(private router: Router,private tokenStorageService:TokenStorageService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
{    this.isLoggedIn = !!this.tokenStorageService.getToken();

        if(this.isLoggedIn) {

          return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
      }

}