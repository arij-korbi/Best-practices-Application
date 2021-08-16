import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "../classes/Role";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn:'root'})
export class RoleService{
    constructor(private _http:HttpClient){}
    public findAllRoles ():Observable<any>{return this._http.get<any>("http://localhost:9090/allroles",httpOptions);}

  public addRole(role:Role):Observable<any>{return this._http.post<any>("http://localhost:9090/addrole",role,httpOptions)}
public deleteRole(id: number): Observable<any> {
     return this._http.delete(`http://localhost:9090/deleterole/${id}`, { responseType: 'text' });
   }
   public findRoleById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/role/${id}`,httpOptions);}

   public updateRole(id:number,profile:Role):Observable<any>{return this._http.put<any>(`http://localhost:9090/editrole/${id}`,profile,httpOptions)}
   public findRoleByName (name:String):Observable<any>{return this._http.get<any>(`http://localhost:9090/findrole/${name}`,httpOptions);}
}