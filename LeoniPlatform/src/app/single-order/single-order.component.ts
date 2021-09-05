import { ValidatorService } from './../services/validator.service';
import { OrderService } from './../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.sass']
})
export class SingleOrderComponent implements OnInit {
  id:number;
msg:String="";
order=new Order();
fileInfos?: any;
fileB:any;
fileA:any;
fileDoc:any;
retrievedImageB:any;
retrievedImageA:any;
validators:any;


  constructor(private _orderService:OrderService,private _validatorService:ValidatorService, private router:Router, private route:ActivatedRoute) {
    this.id=0; 
  }

  ngOnInit(): void { this.id=this.route.snapshot.params['id'];

  this._orderService.findOrderById(this.id).subscribe(
    data=>{
      this.order=data;
      this.fileInfos=data.files[0];
  for (let i in data.files){
    console.log(data.files[i].descrimination);
    if (data.files[i].descrimination==="DescriptionA")
    {this.fileA=data.files[i];console.log("a");}
    else if(data.files[i].descrimination==="DescriptionB")
   {this.fileB=data.files[i];console.log("bbbb");} 
    else if(data.files[i].descrimination==="Documentation")
   {this.fileDoc=data.files[i];console.log("doccc");} 
}
  this.retrievedImageB = 'data:image/jpeg;base64,' + this.fileB.data;
  this.retrievedImageA = 'data:image/jpeg;base64,' + this.fileA.data;
          },
     error=>console.log(error));

    this._validatorService.findValidatorByIdOrder(this.id).subscribe(
      data=>{
         this.validators=data;
         console.log(this.validators);
      },
      error=>{
        console.log(error);
      })
  }
  updateOrder(id:number){    this.router.navigate(['/updateorder',id]);}

}
