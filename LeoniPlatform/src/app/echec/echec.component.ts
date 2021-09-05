import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/tokenStorage.service';

@Component({
  selector: 'app-echec',
  templateUrl: './echec.component.html',
  styleUrls: ['./echec.component.sass']
})
export class EchecComponent implements OnInit {
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
