import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { OwnPracticeComponent } from './own-practice/own-practice.component';
import { AddNewPracticeComponent } from './add-new-practice/add-new-practice.component';
import { SuccessAddComponent } from './success-add/success-add.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestPracticesComponent } from './best-practices/best-practices.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AddNewProfileComponent } from './add-new-profile/add-new-profile.component';

const routes: Routes = [
  {path:'ownpractices',component:OwnPracticeComponent},
  {path:'allpractices',component:BestPracticesComponent},
  {path:'addpractice',component:AddNewPracticeComponent},
  {path:'allusers',component:AllUsersComponent},
  {path:'addnewuser',component:AddNewUserComponent},
  {path:'success',component:SuccessAddComponent},
  {path:'uploadfile',component:UploadFileComponent},
  {path:'addprofile',component:AddNewProfileComponent},
  {path:'allprofiles',component:AllProfilesComponent},
  {path:'updateprofile/:id',component:EditProfileComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
