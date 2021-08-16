import { StateService } from './services/state.service';
import { UploadFileService } from './services/upload-file.service';
import { OrderService } from './services/order.service';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AddNewOrderComponent } from './add-new-order/add-new-order.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderGuard } from './services/orderManagment-auth.service';
import { UserGuard } from './services/userManagement-guard.service';
import { RoleGuard } from './services/roleManagement-guard.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AllRolesComponent } from './all-roles/all-roles.component';
import { AddNewRoleComponent } from './add-new-role/add-new-role.component';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import {HttpClientModule, HttpEventType} from '@angular/common/http';
import { SuccessAddComponent } from './success-add/success-add.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { OwnPracticeComponent } from './own-order/own-practice.component';
import { HttpEvent } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { AddStateComponent } from './add-state/add-state.component';
import { AllStatesComponent } from './all-states/all-states.component';
import { EditStateComponent } from './edit-state/edit-state.component';
import { AddTransitionComponent } from './add-transition/add-transition.component';
import { AllTransitionsComponent } from './all-transitions/all-transitions.component';
import { EditTransitionComponent } from './edit-transition/edit-transition.component';
import { TransitionService } from './services/transition.service';
import { SingleOrderComponent } from './single-order/single-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AllUsersComponent,
    AddNewUserComponent,
    SuccessAddComponent,
    SingleUserComponent,
    OwnPracticeComponent,
    EditUserComponent,
    LoginComponent,
    AddNewRoleComponent,
    AllRolesComponent,
    EditProfileComponent,
    EditUserComponent,
    AllOrdersComponent,
    AddNewOrderComponent,
    UploadFileComponent,
    LoginComponent,
    AddStateComponent,
    AllStatesComponent,
    EditStateComponent,
    AddTransitionComponent,
    AllTransitionsComponent,
    EditTransitionComponent,
    SingleOrderComponent,
    EditOrderComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [{
    provide: 'canActivateTeam',
    useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
  },
  AuthGuard,RoleGuard,UserService,UserGuard,OrderGuard ,OrderService,UploadFileService,StateService,TransitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
