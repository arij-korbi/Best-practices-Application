import { TokenStorageService } from './../services/tokenStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-add',
  templateUrl: './success-add.component.html',
  styleUrls: ['./success-add.component.sass']
})
export class SuccessAddComponent implements OnInit {
  isLoggedIn = false;
  user:any;
  username:any;

  constructor(private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
       this.user = this.tokenStorageService.getUser();
      this.username=this.user.username;}
  }

}
