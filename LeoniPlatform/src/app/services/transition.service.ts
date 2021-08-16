import { State } from './../classes/State';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transition } from '../classes/Transition';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class TransitionService {
    constructor(private _http:HttpClient){}
    public findAllTransitions ():Observable<any>{return this._http.get<any>("http://localhost:9090/alltransitions",httpOptions);}
  public addTransition(transition:Transition):Observable<any>{return this._http.post<any>("http://localhost:9090/addtransition",transition,httpOptions)}
public deleteTransition(id: number): Observable<any> {
     return this._http.delete(`http://localhost:9090/deletetransition/${id}`, { responseType: 'text' });
   }
   public findTransitionById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/transition/${id}`,httpOptions);}
   public updateTransition(id:number,transition:Transition):Observable<any>{return this._http.put<any>(`http://localhost:9090/edittransition/${id}`,transition,httpOptions)}
}