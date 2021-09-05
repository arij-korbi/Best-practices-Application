import { EchecComponent } from './echec/echec.component';
import { EmailSenderComponent } from './email-sender/email-sender.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EditTransitionComponent } from './edit-transition/edit-transition.component';
import { AllTransitionsComponent } from './all-transitions/all-transitions.component';
import { AddTransitionComponent } from './add-transition/add-transition.component';
import { EditStateComponent } from './edit-state/edit-state.component';
import { AllStatesComponent } from './all-states/all-states.component';
import { AddStateComponent } from './add-state/add-state.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { OrderGuard } from './services/orderManagment-auth.service';
import { AddNewOrderComponent } from './add-new-order/add-new-order.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { UserGuard } from './services/userManagement-guard.service';
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
import { AuthGuard } from './services/auth-guard.service';
import { RoleGuard } from './services/roleManagement-guard.service';
import { ValidateOrderComponent } from './validate-order/validate-order.component';

const routes: Routes = [
  // {path:'ownpractices',component:OwnPracticeComponent},
  {path:'allorders',component:AllOrdersComponent},
  {path:'addorder',component:AddNewOrderComponent},
  {path:'updateorder/:id',canActivate:[AuthGuard,OrderGuard],component:EditOrderComponent},
  {path:'order/:id',component:SingleOrderComponent},
  {path:'allusers',canActivate:[AuthGuard,UserGuard],component:AllUsersComponent},
  {path:'adduser',canActivate:[AuthGuard,UserGuard],component:AddNewUserComponent},
  {path:'success',canActivate:[AuthGuard],component:SuccessAddComponent},
  {path:'echec',canActivate:[AuthGuard],component:EchecComponent},

  {path:'addrole',canActivate:[AuthGuard,RoleGuard],component:AddNewRoleComponent},
   {path:'allroles',canActivate:[AuthGuard,RoleGuard],component:AllRolesComponent},
      {path:'uploadfile',component:UploadFileComponent},
   {path:'updaterole/:id',canActivate:[AuthGuard],component:EditProfileComponent},
   {path:'updateuser/:id',canActivate:[AuthGuard],component:EditUserComponent},
   {path:'addstate',component:AddStateComponent},
   {path:'allstates',component:AllStatesComponent},
   {path:'updatestate/:id',component:EditStateComponent},
   {path:'addtransition',component:AddTransitionComponent},
   {path:'alltransitions',component:AllTransitionsComponent},
   {path:'updatetransition/:id',component:EditTransitionComponent},
  {path:'login/:var',component:LoginComponent},
  {path:'login',component:LoginComponent},

  {path:'sendmail',component:EmailSenderComponent},
  {path:'validation/:idorder/:idtransition',canActivate:[AuthGuard],component:ValidateOrderComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
