export class Role{
    id:number;
    name:String;
     userManagement:String;
   roleManagement:String;
    orderManagement:String;
    constructor(){
       this.userManagement="true";
       this.orderManagement="true";
       this.roleManagement="true";
       this.name="";
       this.id=0;
    }
    
    }