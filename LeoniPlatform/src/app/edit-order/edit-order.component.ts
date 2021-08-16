import { UploadFileService } from './../services/upload-file.service';
import { UploadFileComponent } from './../upload-file/upload-file.component';
import { ActivatedRoute, Router} from '@angular/router';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.sass']
})
export class EditOrderComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  file?:File;
  progress1=0;
  progress2=0;
  progress3=0;
  message = '';
  fileInfos?: Observable<any>;
  id:number;
  msg:String="";
  order=new Order();
    constructor(private _orderService:OrderService, private router:Router, private route:ActivatedRoute,private uploadService:UploadFileService) { this.id=0;}
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

    this._orderService.findOrderById(this.id).subscribe(data=>{this.order=data;
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
    onSubmit(form:NgForm){this._orderService.updateOrder(this.id,this.order).subscribe(
  data=>{
    console.log(data);
    this.goToOrdersList();
  }
  ,error=>{console.log(error);
  this.msg="This order name already exists";}
    );}
    goToOrdersList(){
      this.router.navigate(['/allorders']);
    }

}
