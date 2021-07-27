import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class UserService{
  isAuth:boolean=false;
    constructor(private _http:HttpClient){}
public addUser(user:User):Observable<any>{return this._http.post<any>("http://localhost:9090/adduser",user)}
public findAllUsers ():Observable<any>{return this._http.get<any>("http://localhost:9090/allusers");}
public deleteUser(id: number): Observable<any> {
    return this._http.delete(`http://localhost:9090/deleteuser/${id}`, { responseType: 'text' });
  }
  public findUserById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/user/${id}`);}

  public updateUser(id:number,user:User):Observable<any>{return this._http.put<any>(`http://localhost:9090/edituser/${id}`,user)}
  public login(user:User):Observable<any>{this.isAuth=true;return this._http.post<any>("http://localhost:9090/login",user)}

}