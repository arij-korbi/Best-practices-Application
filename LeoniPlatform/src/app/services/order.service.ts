import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order} from "../classes/Order";
import { Observable } from "rxjs";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({providedIn:'root'})
export class OrderService{
    constructor(private _http:HttpClient){}
    public findAllOrders ():Observable<any>{return this._http.get<any>("http://localhost:9090/allorders");}

public addOrder(order:Order):Observable<any>{ 
    return this._http.post<any>("http://localhost:9090/addorder",order,httpOptions)}



}