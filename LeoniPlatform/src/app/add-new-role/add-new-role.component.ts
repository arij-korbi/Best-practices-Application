import { RoleService } from '../services/role.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../classes/Role';
@Component({
  selector: 'app-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.sass']
})
export class AddNewRoleComponent implements OnInit {
  role=new Role();
msg='';
  constructor(private _roleService:RoleService,private _router:Router) { }

  ngOnInit(): void {
   }
  radioChangeHandlerRole(event:any){
    this.role.roleManagement=event.target.value;
  }
  radioChangeHandlerUser(event:any){
    this.role.userManagement=event.target.value;
  } radioChangeHandlerOrder(event:any){
    this.role.orderManagement=event.target.value;
  }
  addProfile(form:NgForm){this._roleService.addRole(this.role).subscribe(
    data=>{console.log("response received");
    console.log(data);
    this.msg="you have successfully added a role";
    this.goToProfilesList();
   },
    error=>{
      this.msg="this role already exists";
      console.log("exception occured");
    }
    )}
    goToProfilesList(){
      this._router.navigate(['/allroles']);
    }
}
