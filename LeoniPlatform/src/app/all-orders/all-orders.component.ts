import { Router } from '@angular/router';
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

  orders:any [];
  constructor(private  _orderService:OrderService, private router:Router) {this.orders=[]; this.orderId=0; }
  ngOnInit(): void {
    this.findAllOrders();
  }
 
findAllOrders(){this._orderService.findAllOrders().subscribe(
  data=>{console.log("response received");
  this.orders=data;
  console.log(this.orders);
   },
    error=>{console.log(error);
    })}
    deleteOrder(id:number){
      this._orderService.deleteOrder(id).subscribe(
        data=>{console.log(data);
          this.findAllOrders();
        },
        error=>{console.log("exception occured");}

      )
    }
    updateOrder(id:number){    this.router.navigate(['/updateorder',id]);}
    viewOrder(id:number){    this.router.navigate(['/order',id]);}

}
