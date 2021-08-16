export class Transition{

id:number;
toTransition:String;
fromTransition:String;
comments:String;
Mfields:String[];

constructor(){

    this.id = 0;
    this.toTransition = "";
    this.fromTransition = "";
    this.Mfields =[];
    this.comments = "";

}
}