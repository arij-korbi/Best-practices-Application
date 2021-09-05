import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyValidator } from '../classes/MyValidator';
import { Order } from '../classes/Order';
import { MailService } from '../services/Mail.service';
import { OrderService } from '../services/order.service';
import { UploadFileService } from '../services/upload-file.service';
import { UserService } from '../services/user.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-validate-order',
  templateUrl: './validate-order.component.html',
  styleUrls: ['./validate-order.component.sass']
})
export class ValidateOrderComponent implements OnInit {

  coord={email:"",
  lien:""};
    selectedFiles?: FileList;
    currentFile?: File;
    file?:File;
    message = '';
    fileInfos?: Observable<any>;
    idorder:number;
    idtransition:number;
    msg:String="";
    order=new Order();
fileB:any;
fileA:any;
fileDoc:any;
retrievedImageB:any;
retrievedImageA:any;
validators:any;


  constructor(private _orderService:OrderService,private _validatorService:ValidatorService, private router:Router, private route:ActivatedRoute) {
    this.idorder=0; 
    this.idtransition=0; 

  }

  ngOnInit(): void { this.idorder=this.route.snapshot.params['idorder'];
  this.idtransition=this.route.snapshot.params['idtransition'];
  this._orderService.findOrderById(this.idorder).subscribe(
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
  }
  updateOrder(id:number){  for (let i in this.order.validators){
    console.log(this.order.validators[i]);

  if(this.order.validators[i].idTransition===this.idtransition){
    this.order.validators[i].status="validated"!
    console.log(this.order.validators[i]);
  }

  }
this._orderService.updateOrder(this.idorder,this.order).subscribe(
data=>{
console.log(data);
// this.goToOrdersList();
}
,error=>{console.log(error);
this.msg="This order name already exists";}
);  this.router.navigate(['/updateorder',id]);}

      validate(id:number){
          for (let i in this.order.validators){
            console.log(this.order.validators[i]);

          if(this.order.validators[i].idTransition===this.idtransition){
            this.order.validators[i].status="validated"!
            console.log(this.order.validators[i]);
          }

          }
        this._orderService.updateOrder(this.idorder,this.order).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['/success']);    }
    ,error=>{console.log(error);
    this.msg="This order name already exists";}
      );
    }
     
    dontValidate(id:number){
      for (let i in this.order.validators){
        console.log(this.order.validators[i]);

      if(this.order.validators[i].idTransition===this.idtransition){
        this.order.validators[i].status=" not validated"!
        console.log(this.order.validators[i]);
      }

      }
      
    this._orderService.updateOrder(this.idorder,this.order).subscribe(
data=>{
  console.log(data);
 // this.goToOrdersList();
}
,error=>{console.log(error);
}
  );
  this.router.navigate(['/echec']);
}
   
}
