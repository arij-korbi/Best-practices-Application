import { UploadFileService } from './../services/upload-file.service';
import { UploadFileComponent } from './../upload-file/upload-file.component';
import { ActivatedRoute, Router} from '@angular/router';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';
import { NgForm, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { TransitionService } from '../services/transition.service';
import { MyValidator } from '../classes/MyValidator';
import { MailService } from '../services/Mail.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.sass']
})
export class EditOrderComponent implements OnInit {
  coord={email:"",
lien:""};
  selectedFiles?: FileList;
  currentFile?: File;
  file?:File;
  progress1=0;
  progress2=0;
  progress3=0;
  message = '';
  validator=new MyValidator();
  validators:MyValidator[];
  startWorkflow:String="no";
transitions:any[];
  users:any[];
  fileInfos?: Observable<any>;
  id:number;
  msg:String="";
  validating=false;
  order=new Order();
    constructor(private _mailService:MailService,private _transitionService:TransitionService,private _userService:UserService,private _orderService:OrderService, private router:Router, private route:ActivatedRoute,private uploadService:UploadFileService)
     { this.id=0;
    this.users=[];
  this.transitions=[];
this.validators=[];}  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.findAllUsers();
this.findAllTransitions();

    this._orderService.findOrderById(this.id).subscribe(data=>{this.order=data;
      if ( this.order.validators.length===0)
      {this.validating=false;}
      else {this.validating=true;}
      console.log(this.validating);
      console.log(this.order.validators)
  }
      , error=>console.log(error));
     this.fileInfos = this.uploadService.getFiles();
    }
    radioChangeHandler(event:any){
      this.order.categoryOfImprovement=event.target.value;
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
                    (data)=>{this.fileInfos=data;    
                                this.file=data[data.length-1];  
                                if(ch=="idDocumentation"){
                                this.order.idDocumentation=data[data.length-1].id;}
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
    onSubmit(form:NgForm){
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
      this._orderService.updateOrder(this.id,this.order).subscribe(
  data=>{
    console.log(data);
    this.goToOrdersList();
    if(this.startWorkflow==="yes"){   
      this.coord.email=this.transitions[0].userValid;
  this.coord.lien=`http://localhost:4200/validation/${this.id}/${this.transitions[0].id}`         
   this._mailService.sendEMail(this.coord).subscribe(data=>{console.log(data)},error=>{console.log(error)});console.log("fin")
   localStorage.setItem('url',`/validation/${this.id}/${this.transitions[0].id}`);

  }
  }
  ,error=>{console.log(error);
  this.msg="This order name already exists";}
    );
    }
    goToOrdersList(){
      this.router.navigate(['/allorders']);
    }
    findAllUsers(){this._userService.findAllUsers().subscribe(
      data=>{console.log("response received");
      console.log(data);
      this.users=data;
      console.log(this.users);
       },
        error=>{console.log("exception occured");
        })}
        findAllTransitions(){

          this._transitionService.findAllTransitions().subscribe(
            data=>{console.log("response received");
            this.transitions=data;  
           
            console.log(this.transitions);     },
              error=>{console.log(error); })
  }
}
