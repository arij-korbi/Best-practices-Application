import { TransitionService } from './../services/transition.service';
import { Component, OnInit } from '@angular/core';
import { Transition } from '../classes/Transition';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StateService } from '../services/state.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-transition',
  templateUrl: './edit-transition.component.html',
  styleUrls: ['./edit-transition.component.sass']
})
export class EditTransitionComponent implements OnInit {
  states:any[];
  users:any[];
id:number;
msg:String="";
Mfields:any[];

transition=new Transition();
fields=["title", "plant", "orgUnit","issuedBy","date", "approvedBy","categoryOfImprovement","benefits","area",
     "documentation","number"," email", "discriptionB" ,"discriptionA",]
  constructor(private _transitionService:TransitionService,private _userService:UserService,
     private _stateService:StateService,private router:Router, private route:ActivatedRoute) { 
    this.id=0;this.states=[];
    this.users=[];
  this.Mfields=[];}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this._transitionService.findTransitionById(this.id).subscribe(data=>{this.transition=data;
 }
    , error=>console.log(error));
    this.findAllStates();
    this.findAllUsers();

  
  }
  findAllUsers(){
   
    this._userService.findAllUsers().subscribe(
    data=>{console.log("response received");
    this.users=data;
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
  onSubmit(form:NgForm){
    for(let i in this.Mfields){
      this.transition.mfields=this.transition.mfields+"\n"+this.Mfields[i];
    }
    this._transitionService.updateTransition(this.id,this.transition).subscribe(
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
    {this.Mfields.push(ch)}
    else{this.Mfields=this.Mfields.filter(m=>m!=ch)}
    this.transition.mfields="";
  
    console.log(this.transition.mfields);
          }
}
