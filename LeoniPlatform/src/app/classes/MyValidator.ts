import { transition } from '@angular/animations';
import { Order } from './Order';

export class MyValidator{
     idTransition:number;
    fromTransition:string;
     toTransition:string;;
   userValid:string;;
    sendMailTo:string;;
   comments:string;;
    mfields:string;;
     groupTransition:string;
     order:any;
   idOrder:number;
  status:string;;
     dateOfSent: Date;
  dateOfValidation: Date;
  transitionNumber:number;
    constructor(){
        this.idTransition=0;
        this.transitionNumber=0;
        this.fromTransition="";
        this.toTransition="";
        this.userValid="";
        this.sendMailTo="";
        this.comments="";
        this.mfields="";
        this.groupTransition="";
        this.idOrder=0;
        this.status="";
        this.dateOfSent=new Date();
        this.dateOfValidation=new Date();
    }
    
    }