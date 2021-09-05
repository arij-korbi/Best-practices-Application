export class Transition{

id:number;
number:number;
toTransition:String;
fromTransition:String;
comments:String;
mfields:String;
sendMailTo:String;
userValid:String;

constructor(){
    this.id = 0;
    this.number=0;
    this.userValid="";
    this.sendMailTo="";
    this.toTransition = "";
    this.fromTransition = "";
    this.mfields ="";
    this.comments = "";
}
}