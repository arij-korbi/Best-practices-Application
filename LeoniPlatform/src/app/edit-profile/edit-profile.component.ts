import { RoleService } from './../services/role.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Role } from'../classes/Role'
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {
id:number;
msg:String="";
role=new Role();
  constructor(private _roleService:RoleService, private router:Router, private route:ActivatedRoute) { this.id=0;}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this._roleService.findRoleById(this.id).subscribe(data=>{this.role.name=data.name;  this.role.orderManagement="true";
  this.role.roleManagement="true";
  this.role.userManagement="true";}
    , error=>console.log(error));
  
  }
  onSubmit(form:NgForm){this._roleService.updateRole(this.id,this.role).subscribe(
data=>{
  console.log(data);
  this.goToProfilesList();
}
,error=>{console.log(error);
this.msg="This role name already exists";}
  );}
  goToProfilesList(){
    this.router.navigate(['/allroles']);
  }

}
