export class User{
    id:number;
    email:string;
    username:string;
    password:string;
  role:any[];
  roles:any[]
    constructor(){
        this.id=0;
        this.email="";
        this.username="";
        this.password="";
        this.role=[];
        this.roles=[];
    }
    
    }