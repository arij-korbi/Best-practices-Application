import { RoleService } from '../services/role.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-roles',
  templateUrl: './all-roles.component.html',
  styleUrls: ['./all-roles.component.sass']
})
export class AllRolesComponent implements OnInit {
  @Input()roleId:number;

   roles:any[];
  constructor(private  _roleService:RoleService, private router:Router ) {this.roles=[]; this.roleId=0;}


findAllRoles(){this._roleService.findAllRoles().subscribe(
  data=>{console.log("response received");
  this.roles=data;
  console.log(this.roles);
   },
    error=>{console.log("exception occured");
    })}
    ngOnInit(): void {
      this.findAllRoles();
    }
    deleteRole(id:number){
      this._roleService.deleteRole(id).subscribe(
        data=>{console.log(data);
          this.findAllRoles();
        },
        error=>{console.log("exception occured");}

      )
    }
    updateRole(id:number){    this.router.navigate(['/updaterole',id]);}

}