import { Transition } from './../classes/Transition';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransitionService } from '../services/transition.service';

@Component({
  selector: 'app-all-transitions',
  templateUrl: './all-transitions.component.html',
  styleUrls: ['./all-transitions.component.sass']
})
export class AllTransitionsComponent implements OnInit {

  @Input()transitionId:number;
  transitions:Transition[];
  Mfields:any[];
    constructor(private  _transitionService:TransitionService, private router:Router ) {
      this.transitions=[]; 
      this.transitionId=0;
    this.Mfields=[];}
  
    ngOnInit(): void {
      this.findAllTransitions();
    }
       
  findAllTransitions(){this._transitionService.findAllTransitions().subscribe(
    data=>{console.log("response received");
    this.transitions=data;

     },
      error=>{console.log(error);
      })}
      
      deleteTransition(id:number){
        this._transitionService.deleteTransition(id).subscribe(
          data=>{console.log(data);
            this.findAllTransitions();
          },
          error=>{console.log("exception occured");}
  
        )
      }
      updateTransition(id:number){    this.router.navigate(['/updatetransition',id]);}
}
