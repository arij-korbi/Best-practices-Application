import { Router } from '@angular/router';
import { State } from './../classes/State';
import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.sass']
})
export class EditStateComponent implements OnInit {

  id:number;
  msg:String="";
  state=new State();
    constructor(private _stateService:StateService, private router:Router, private route:ActivatedRoute) { this.id=0;}
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
    this._stateService.findStateById(this.id).subscribe(data=>{
      this.state=data;
   }
      , error=>console.log(error));
    
    }
    onSubmit(form:NgForm){this._stateService.updateState(this.id,this.state).subscribe(
  data=>{
    console.log(data);
    this.goToStatesList();
  }
  ,error=>{console.log(error);
  this.msg="This role name already exists";}
    );}
    goToStatesList(){
      this.router.navigate(['/allstates']);
    }

}
