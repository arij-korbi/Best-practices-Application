import { UserService } from './../services/user.service';
import { Component, OnInit,Input } from '@angular/core';
import { Role } from '../classes/Role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  @Input() rolee=String;
 
  constructor(private  _userService:UserService ) {}

  ngOnInit(): void {
    
  }

}
