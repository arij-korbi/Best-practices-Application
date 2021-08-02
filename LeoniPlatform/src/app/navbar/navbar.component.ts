import { Router } from '@angular/router';
import { TokenStorageService } from './../services/tokenStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorageService:TokenStorageService,private _router:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();

  }
}
