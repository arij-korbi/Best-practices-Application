import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';
import { Input } from '@angular/core';

@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.component.html',
  styleUrls: ['./best-practices.component.sass']
})
export class BestPracticesComponent implements OnInit {
  @Input()orderId:number;

  orders:Order [];
  constructor(private  _orderService:OrderService) {this.orders=[]; this.orderId=0; }
  ngOnInit(): void {
    this.findAllOrders();
  }
 
findAllOrders(){this._orderService.findAllOrders().subscribe(
  data=>{console.log("response received");
  this.orders=data;
  console.log(this.orders);
   },
    error=>{console.log("exception occured");
    })}
   
}
