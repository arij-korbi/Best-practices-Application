import { TransitionService } from './../services/transition.service';
import { Component, OnInit } from '@angular/core';
import { Transition } from '../classes/Transition';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-edit-transition',
  templateUrl: './edit-transition.component.html',
  styleUrls: ['./edit-transition.component.sass']
})
export class EditTransitionComponent implements OnInit {
  states:any[];
id:number;
msg:String="";
transition=new Transition();
fields=["title", "plant", "orgUnit","issuedBy","date", "approvedBy","categoryOfImprovement","benefits","area",
     "documentation","number"," email", "discriptionB" ,"discriptionA",]
  constructor(private _transitionService:TransitionService, private _stateService:StateService,private router:Router, private route:ActivatedRoute) { this.id=0;this.states=[]}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this._transitionService.findTransitionById(this.id).subscribe(data=>{this.transition=data;
 }
    , error=>console.log(error));
    this.findAllStates();

  
  }
  findAllStates(){this._stateService.findAllStates().subscribe(
    data=>{console.log("response received");
    this.states=data;
    console.log(this.states);
     },
      error=>{console.log(error);
      })}
  onSubmit(form:NgForm){this._transitionService.updateTransition(this.id,this.transition).subscribe(
data=>{
  console.log(data);
  this.goToTransitionsList();
}
,error=>{console.log(error);
this.msg="This Transition name already exists";}
  );}
  goToTransitionsList(){
    this.router.navigate(['/alltransitions']);
  }

  saveFields(e:any,ch:String){
    if(e.target.checked)
    {this.transition.Mfields.push(ch)}
    else{this.transition.Mfields=this.transition.Mfields.filter(m=>m!=ch)}
    console.log(this.transition.Mfields)
          }
}
