import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order} from "../classes/Order";
import { Observable } from "rxjs";
const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-Requested-With': 'XMLHttpRequest'
  }
  const httpOptions = {
    headers: new HttpHeaders(headerDict)
  };

@Injectable({providedIn:'root'})
export class OrderService{
    constructor(private _http:HttpClient){}
    public findAllOrders ():Observable<any>{return this._http.get<any>("http://localhost:9090/allorders");}
    public addOrder(order:Order):Observable<any>{ 
    return this._http.post<any>("http://localhost:9090/addorder",order)}
    public deleteOrder(id: number): Observable<any> {
      return this._http.delete(`http://localhost:9090/deleteorder/${id}`, { responseType: 'text' });
    }
    public findOrderById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/order/${id}`,httpOptions);}
 
    public updateOrder(id:number,order:Order):Observable<any>{return this._http.put<any>(`http://localhost:9090/editorder/${id}`,order,httpOptions)}
}