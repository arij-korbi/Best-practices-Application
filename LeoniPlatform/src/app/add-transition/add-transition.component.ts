import { UserService } from './../services/user.service';
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
  Mfields:any[];
 mfields:String;
  states:any[];
  users:any[];
  transition=new Transition();
  msg='';
  length=0;
  fields=["title", "plant", "orgUnit","issuedBy","date", "approvedBy","categoryOfImprovement","benefits","area",
     "documentation","number"," email", "discriptionB" ,"discriptionA",]
    constructor(private _transitionService:TransitionService,private _router:Router,private _stateService:StateService,private _userService:UserService) {
      this.states=[]; 
      this.users=[];
      this.Mfields=[];
    this.mfields="";}
  
    ngOnInit(): void {
      this.findAllStates();
      this.findAllUsers();
      this.findAllTransitions();
      this.transition.number=length;
    
     }
     findAllUsers(){this._userService.findAllUsers().subscribe(
      data=>{console.log("response received");
      this.users=data;
       },
        error=>{console.log(error);
        })}
        findAllTransitions(){this._transitionService.findAllTransitions().subscribe(
          data=>{console.log("response received");
          this.length=data.length;
           },
            error=>{console.log(error);
            })}
     findAllStates(){this._stateService.findAllStates().subscribe(
      data=>{console.log("response received");
      this.states=data;
      console.log(this.states);
       },
        error=>{console.log(error);
        })}
   
    addTransition(form:NgForm){
      for(let i in this.Mfields){
        this.mfields=this.mfields+"\n"+this.Mfields[i];
        
      }
      
      this.transition.mfields=this.mfields;
      console.log(this.transition);
      this._transitionService.addTransition(this.transition).subscribe(
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
{this.Mfields.push(ch)}
else{this.Mfields=this.Mfields.filter(m=>m!=ch)}

console.log(this.transition.mfields);
      }
      

}
