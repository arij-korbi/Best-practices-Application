export class Profile{
    id:number;
    profileName:String;
    userManagement:String;
    profileManagement:String;
    orderManagement:String;
    constructor(){
       this.userManagement="true";
       this.orderManagement="true";
       this.profileManagement="true";
       this.profileName="";
       this.id=0;
    }
    
    }