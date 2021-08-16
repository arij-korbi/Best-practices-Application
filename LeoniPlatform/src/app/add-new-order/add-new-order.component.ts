import { UploadFileService } from './../services/upload-file.service';
import { Order } from './../classes/Order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.sass']
})
export class AddNewOrderComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  file?:File;
  progress1=0;
  progress2=0;
  progress3=0;
  message = '';
  fileInfos?: Observable<any>;
  order=new Order();
  msg='';
    constructor(private _orderService:OrderService,private _router:Router,private uploadService:UploadFileService) { }
  category:String="";
    ngOnInit(): void { this.fileInfos = this.uploadService.getFiles();
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
        addOrder(form:NgForm){this._orderService.addOrder(this.order).subscribe(
          data=>{console.log("response received");
          this.msg="you have successfully added an order";
          this._router.navigate(['/allorders']);
         },
          error=>{console.log(error);
          this.msg=error.error;
          }
          )}
}
