
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
     documentation:string;
  number:string;
     email:string;
    discriptionB:string;
     discriptionA:string;
     status:string;

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
        this.documentation = "";
        this.number = "";
        this.email = "";
        this.discriptionB = "";
        this.discriptionA = "";
        this.status=status;

    
}

}