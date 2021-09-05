import { MyValidator } from "./MyValidator";

export class Order{
     id:number;
    title:string;
    plant:string;
     orgUnit:string;
    issuedBy:string;
    date:Date;
  approvedBy:string;
    categoryOfImprovement:string;
     benefits:string;
    area:string;
     idDocumentation:number;
     documentationUrl:String;

  number:string;
     email:string;
    discriptionB:string;
     discriptionA:string;

     status:string;
files:any[];
validators:MyValidator[];
constructor(){

        this.id = 0;
        this.title = "";
        this.plant = "";
        this.orgUnit ="";
        this.issuedBy = "";
        this.date = new Date();
        this.approvedBy = "";
        this.categoryOfImprovement = "";
        this.benefits = "";
        this.area = "";
        this.idDocumentation =0;
        this.number = "";
        this.email = "";
        this.discriptionB = "";
        this.discriptionA = "";
        this.status=status;
this.files=[];
this.documentationUrl="";
this.validators=[];
    
}

}