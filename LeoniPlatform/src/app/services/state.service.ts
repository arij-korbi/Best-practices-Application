import { State } from './../classes/State';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class StateService {
    constructor(private _http:HttpClient){}
    public findAllStates ():Observable<any>{return this._http.get<any>("http://localhost:9090/allstates",httpOptions);}
  public addState(state:State):Observable<any>{return this._http.post<any>("http://localhost:9090/addstate",state,httpOptions)}
public deleteState(id: number): Observable<any> {
     return this._http.delete(`http://localhost:9090/deletestate/${id}`, { responseType: 'text' });
   }
   public findStateById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/state/${id}`,httpOptions);}
   public updateState(id:number,state:State):Observable<any>{return this._http.put<any>(`http://localhost:9090/editstate/${id}`,state,httpOptions)}

}