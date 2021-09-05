import { MyValidator } from '../classes/MyValidator';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class ValidatorService {
    constructor(private _http:HttpClient){}
  public addValidator(validator:MyValidator):Observable<any>{return this._http.post<any>("http://localhost:9090/addvalidator",validator,httpOptions)}
   public findValidatorByIdOrder (idOrder:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/validator/${idOrder}`,httpOptions);}
}