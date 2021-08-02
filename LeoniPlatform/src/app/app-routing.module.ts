import { EditUserComponent } from './edit-user/edit-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddNewRoleComponent } from './add-new-role/add-new-role.component';
import { AllRolesComponent } from './all-roles/all-roles.component';

import { SuccessAddComponent } from './success-add/success-add.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AllUsersComponent } from './all-users/all-users.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'ownpractices',component:OwnPracticeComponent},
  // {path:'allpractices',component:BestPracticesComponent},
  // {path:'addpractice',component:AddNewPracticeComponent},
  {path:'allusers',component:AllUsersComponent},
  {path:'addnewuser',component:AddNewUserComponent},
  {path:'success',component:SuccessAddComponent},
  {path:'addrole',component:AddNewRoleComponent},
   {path:'allroles',component:AllRolesComponent},
     // {path:'uploadfile',component:UploadFileComponent},
   {path:'updaterole/:id',component:EditProfileComponent},
   {path:'updateuser/:id',component:EditUserComponent},
  {path:'login',component:LoginComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
