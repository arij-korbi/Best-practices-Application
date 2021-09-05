import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class MailService{
    constructor(private _http:HttpClient){}

  public sendEMail(coord :any):Observable<any>{return this._http.post<any>("http://localhost:9090/sendmail",coord)}


}
