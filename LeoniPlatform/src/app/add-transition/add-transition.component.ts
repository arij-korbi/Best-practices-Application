import { StateService } from './../services/state.service';
import { Transition } from './../classes/Transition';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransitionService } from '../services/transition.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-transition',
  templateUrl: './add-transition.component.html',
  styleUrls: ['./add-transition.component.sass']
})
export class AddTransitionComponent implements OnInit {
  states:any[];
  transition=new Transition();
  msg='';
  fields=["title", "plant", "orgUnit","issuedBy","date", "approvedBy","categoryOfImprovement","benefits","area",
     "documentation","number"," email", "discriptionB" ,"discriptionA",]
    constructor(private _transitionService:TransitionService,private _router:Router,private _stateService:StateService) {this.states=[]; }
  
    ngOnInit(): void {
      this.findAllStates();
     }
     findAllStates(){this._stateService.findAllStates().subscribe(
      data=>{console.log("response received");
      this.states=data;
      console.log(this.states);
       },
        error=>{console.log(error);
        })}
   
    addTransition(form:NgForm){this._transitionService.addTransition(this.transition).subscribe(
      data=>{console.log("response received");
      console.log(data);
      console.log(this.transition);
      this.msg="you have successfully added a transition";
      this.goToTransitionsList();
     },
      error=>{
        this.msg="this transition already exists";
        console.log("exception occured");
      }
      )}
      goToTransitionsList(){
        this._router.navigate(['/alltransitions']);
      }
      saveFields(e:any,ch:String){
if(e.target.checked)
{this.transition.Mfields.push(ch)}
else{this.transition.Mfields=this.transition.Mfields.filter(m=>m!=ch)}
console.log(this.transition.Mfields)
      }

}
