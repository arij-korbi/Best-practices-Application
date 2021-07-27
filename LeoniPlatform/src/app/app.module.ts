import { UserService } from './services/user.service';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
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
import { BestPracticesComponent } from './best-practices/best-practices.component';
import { AddNewPracticeComponent } from './add-new-practice/add-new-practice.component';
import { OwnPracticeComponent } from './own-practice/own-practice.component';
import { HttpEvent } from '@angular/common/http';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AddNewProfileComponent } from './add-new-profile/add-new-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AllUsersComponent,
    AddNewUserComponent,
    SuccessAddComponent,
    SingleUserComponent,
    BestPracticesComponent,
    AddNewPracticeComponent,
    OwnPracticeComponent,
    UploadFileComponent,
    AddNewProfileComponent,
    AllProfilesComponent,
    EditProfileComponent,
    EditUserComponent,
    LoginComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
