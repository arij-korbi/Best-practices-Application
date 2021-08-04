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
  progress = 0;
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
    addOrder(form:NgForm){this._orderService.addOrder(this.order).subscribe(
      data=>{console.log("response received");
      this.msg="you have successfully added an order";
      this._router.navigate(['/allorders']);
     },
      error=>{console.log("exception occured");
      this.msg=error.error;
      }
      )}
      selectFile(event: any): void {
        this.selectedFiles = event.target.files;
      }
      upload(): void {
        this.progress = 0;
      
        if (this.selectedFiles) {
          const file: File | null = this.selectedFiles.item(0);
      
          if (file) {
            this.currentFile = file;
      
            this.uploadService.upload(this.currentFile).subscribe(
              (event: any) => {
                if (event.type === HttpEventType.UploadProgress) {

                  this.progress = Math.round(100 * event.loaded / event.total);
                  console.log(event);
                } else if (event instanceof HttpResponse) {
                  this.message = event.body.message;
                  console.log(event.body.message);
                  this.fileInfos = this.uploadService.getFiles();
                }
              },
              (err: any) => {
                console.log(err);
                this.progress = 0;
      
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
}
