import { StateService } from './../services/state.service';
import { State } from './../classes/State';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-states',
  templateUrl: './all-states.component.html',
  styleUrls: ['./all-states.component.sass']
})
export class AllStatesComponent implements OnInit {
  @Input()stateId:number;
  states:State[];
    constructor(private  _roleService:StateService, private router:Router ) {this.states=[]; this.stateId=0;}
  
    ngOnInit(): void {
      this.findAllStates();
    }
       
  findAllStates(){this._roleService.findAllStates().subscribe(
    data=>{console.log("response received");
    this.states=data;
    console.log(this.states);
     },
      error=>{console.log("exception occured");
      })}
      
      deleteState(id:number){
        this._roleService.deleteState(id).subscribe(
          data=>{console.log(data);
            this.findAllStates();
          },
          error=>{console.log("exception occured");}
  
        )
      }
      updateState(id:number){    this.router.navigate(['/updatestate',id]);}
  
  }

