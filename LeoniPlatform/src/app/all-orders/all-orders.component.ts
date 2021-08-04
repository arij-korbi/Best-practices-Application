import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/Order';
import { Input } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.sass']
})
export class AllOrdersComponent implements OnInit {
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
