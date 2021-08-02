import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class UserService{
  isAuth:boolean=false;
    constructor(private _http:HttpClient){}
public addUser(user:User):Observable<any>{console.log(user);return this._http.post<any>("http://localhost:9090/adduser", 
JSON.stringify(user),httpOptions);}

public findAllUsers ():Observable<any>{return this._http.get<any>("http://localhost:9090/allusers");}
public deleteUser(id: number): Observable<any> {
    return this._http.delete(`http://localhost:9090/deleteuser/${id}`, { responseType: 'text' });
  }
  public findUserById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/user/${id}`,httpOptions);}

  public updateUser(id:number,user:User):Observable<any>{return this._http.put<any>(`http://localhost:9090/edituser/${id}`,user,httpOptions)}
  public login(user:User):Observable<any>{return this._http.post<any>("http://localhost:9090/login",JSON.stringify(user),httpOptions)}

}