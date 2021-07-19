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
    UploadFileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
