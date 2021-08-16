import { OrderService } from './../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';

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
file:any;
retrievedImage:any;
  constructor(private _orderService:OrderService, private router:Router, private route:ActivatedRoute) {this.id=0; }

  ngOnInit(): void { this.id=this.route.snapshot.params['id'];

  this._orderService.findOrderById(this.id).subscribe(data=>{this.order=data;
    console.log(data);
  this.fileInfos=data.files[0];
  this.file=data.files[0].data;
  this.retrievedImage = 'data:image/jpeg;base64,' + this.file;

  console.log(data.files[0].data);}
    , error=>console.log(error));
  }
  updateOrder(id:number){    this.router.navigate(['/updateorder',id]);}

}
