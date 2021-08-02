// import { Order } from './../classes/Order';
// import { Component, OnInit } from '@angular/core';
// import { OrderService } from '../services/order.service';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-add-new-practice',
//   templateUrl: './add-new-practice.component.html',
//   styleUrls: ['./add-new-practice.component.sass']
// })
// export class AddNewPracticeComponent implements OnInit {

//   order=new Order();
//   msg='';
//     constructor(private _orderService:OrderService,private _router:Router) { }
//   category:String="";
//     ngOnInit(): void {
//     }
//     radioChangeHandler(event:any){
//       this.order.categoryOfImprovement=event.target.value;
//     }
//     addOrder(form:NgForm){this._orderService.addOrder(this.order).subscribe(
//       data=>{console.log("response received");
//       this.msg="you have successfully added an order";
//       this._router.navigate(['/success']);
//      },
//       error=>{console.log("exception occured");
//       this.msg=error.error;
//       }
//       )}

// }
