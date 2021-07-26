import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class UserService{
    constructor(private _http:HttpClient){}
public addUser(user:User):Observable<any>{return this._http.post<any>("http://localhost:9090/adduser",user)}
public findAllUsers ():Observable<any>{return this._http.get<any>("http://localhost:9090/allusers");}
public deleteUser(id: number): Observable<any> {
    return this._http.delete(`http://localhost:9090/deleteuser/${id}`, { responseType: 'text' });
  }
 
}