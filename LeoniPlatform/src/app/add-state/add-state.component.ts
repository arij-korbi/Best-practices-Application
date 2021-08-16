import { State } from './../classes/State';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from './../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.sass']
})
export class AddStateComponent implements OnInit {
  state=new State();
  msg='';
    constructor(private _roleService:StateService,private _router:Router) { }
  
    ngOnInit(): void {
     }
   
    addState(form:NgForm){this._roleService.addState(this.state).subscribe(
      data=>{console.log("response received");
      console.log(data);
      this.msg="you have successfully added a state";
      this.goToStatesList();
     },
      error=>{
        this.msg="this state already exists";
        console.log("exception occured");
      }
      )}
      goToStatesList(){
        this._router.navigate(['/allstates']);
      }
  

}
