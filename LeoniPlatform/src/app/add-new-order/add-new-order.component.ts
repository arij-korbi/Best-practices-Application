import { MyValidator } from '../classes/MyValidator';
import { UploadFileService } from './../services/upload-file.service';
import { Order } from './../classes/Order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ValidatorService } from '../services/validator.service';
import { TransitionService } from '../services/transition.service';
import { UserService } from '../services/user.service';
import { MailService } from '../services/Mail.service';

@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.sass']
})
export class AddNewOrderComponent implements OnInit {
  coord={email:"",
lien:""};
  idOrder:any;
  selectedFiles?: FileList;
  currentFile?: File;
  file?:File;
  progress1=0;
  progress2=0;
  progress3=0;
  message = '';
  fileInfos?: Observable<any>;
  order=new Order();
  category:String="";
  transitions:any[];
  orderTransitions:any[];
  startWorkflow:String="no";
  validators:MyValidator[];
  orderReturned=new Order();
  length=0;
  users:any;
  validator=new MyValidator();
  msg=''; 
  userValid:any;
  constructor(private _mailService:MailService,private _userService:UserService,private _orderService:OrderService,private _validatorService:ValidatorService,private _transitionService:TransitionService,
    private _router:Router,private uploadService:UploadFileService) {
      this.transitions=[];
      this.validators=[];
      this.orderTransitions=[];
      this.order.status="not validated";
     }
ngOnInit(): void {
   this.fileInfos = this.uploadService.getFiles();
  this.findAllTransitions();
  this.findAllUsers();
  console.log(this.order);
  this._orderService.findAllOrders().subscribe(
    data=>{console.log("response received");
    this.length=data.length;
    console.log(data.length);

     },
      error=>{console.log(error);
      })
    }
radioChangeHandler(event:any){
      this.order.categoryOfImprovement=event.target.value;
    }
radioChangeHandlerr(event:any){
      this.startWorkflow=event.target.value;
      console.log(this.startWorkflow);
    }
selectFile(event: any): void {
        this.selectedFiles = event.target.files;
      }
    
upload(ch:String): void {
        if(ch=="idDocumentation"){
          this.progress1 = 0;}
          else if(ch=="discriptionB"){    this.progress2 = 0;}
          else if(ch=="discriptionA"){    this.progress3= 0;}
     
    
        if (this.selectedFiles) {
          const file: File | null = this.selectedFiles.item(0);
      
          if (file) {
           
            this.currentFile = file;
      
            this.uploadService.upload(this.currentFile).subscribe(
              (event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                  if(ch=="idDocumentation"){
                  this.progress1 = Math.round(100 * event.loaded / event.total);}
                  else if(ch=="discriptionB"){ this.progress2 = Math.round(100 * event.loaded / event.total);}
                  else if(ch=="discriptionA"){ this.progress3= Math.round(100 * event.loaded / event.total);}

                  console.log(event);
                } else if (event instanceof HttpResponse) {
                  this.message = event.body.message;
                  console.log(event.body.message);
                  this.uploadService.getFiles().subscribe(
                    (data)=>{
                      console.log(data);
                      this.fileInfos=data;    
                                this.file=data[data.length-1];  
                                if(ch=="idDocumentation"){
                                this.order.idDocumentation=data[data.length-1].id;
                                this.order.documentationUrl=data[data.length-1].url;}
                                else if(ch=="discriptionB"){
                                  this.order.discriptionB=data[data.length-1].id;
                                }
                                else if(ch=="discriptionA"){
                                  this.order.discriptionA=data[data.length-1].id;
                                }
                                console.log(this.order);  
                                
                    },
                    (error)=>{console.log(error);}
                  );
                }
              },
              (err: any) => {
                console.log(err);
                this.progress1 = 0;
                this.progress2 = 0;
                this.progress3 = 0;

                if (err.error && err.error.message) {
                  this.message = err.error.message;
                } else {
                  this.message = 'Could not upload the file!';
                }
      
                this.currentFile = undefined;
              });
          }
      
          this.selectedFiles = undefined;
        }}
       addOrder(form:NgForm){
         console.log(this.startWorkflow);
         if(this.startWorkflow==="yes"){
         for (let i in this.transitions){
            console.log(i);
          this.validator.idTransition=this.transitions[i].id;
           this.validator.fromTransition=this.transitions[i].fromTransition;
           this.validator.toTransition=this.transitions[i].toTransition;
          this.validator.mfields=this.transitions[i].mfields;
          this.validator.userValid=this.transitions[i].userValid;
          this.validator.comments=this.transitions[i].comments;
          this.validator.sendMailTo=this.transitions[i].sendMailTo;
          this.validator.transitionNumber=this.transitions[i].number;
             console.log(this.validator);
             this.validators.push(this.validator);
             this.validator=new MyValidator();
             console.log(this.validators);

          }
             
this.order.validators=this.validators;}

           this._orderService.addOrder(this.order).subscribe(
          data=>{this.orderReturned=data;
            this.idOrder=this.orderReturned.id;
           console.log(this.orderReturned);
          this.msg="you have successfully added an order";
          if(this.startWorkflow==="yes"){ this.coord.email=this.transitions[0].userValid;
            this.coord.lien=`http://localhost:4200/validation/${data.id}/${this.transitions[0].id}`
                        this._mailService.sendEMail(this.coord).subscribe(data=>{console.log("it works")},error=>{console.log(error)});console.log("fin")
          localStorage.setItem('url',`/validation/${data.id}/${this.transitions[0].id}`);
          console.log(data.id);
          console.log(this.transitions[0].id)
                      }
          
          this._router.navigate(['/order',data.id]);
        },
          error=>{console.log(error);
          this.msg=error.error;
           })

         }
findAllTransitions(){

        this._transitionService.findAllTransitions().subscribe(
          data=>{console.log("response received");
          this.transitions=data;  
         
          console.log(this.transitions);     },
            error=>{console.log(error); })
}
findAllUsers(){this._userService.findAllUsers().subscribe(
  data=>{console.log("response received");
  console.log(data);
  this.users=data;
  console.log(this.users);
   },
    error=>{console.log("exception occured");
    })}
  }