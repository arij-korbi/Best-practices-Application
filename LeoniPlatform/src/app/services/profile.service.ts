import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Profile } from "../classes/profile";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class ProfileService{
    constructor(private _http:HttpClient){}
public addProfile(profile:Profile):Observable<any>{return this._http.post<any>("http://localhost:9090/addprofile",profile)}
public findAllProfiles ():Observable<any>{return this._http.get<any>("http://localhost:9090/allprofiles");}
public deleteProfile(id: number): Observable<any> {
    return this._http.delete(`http://localhost:9090/deleteprofile/${id}`, { responseType: 'text' });
  }
  public findProfileById (id:number):Observable<any>{return this._http.get<any>(`http://localhost:9090/profile/${id}`);}

  public updateProfile(id:number,profile:Profile):Observable<any>{return this._http.put<any>(`http://localhost:9090/editprofile/${id}`,profile)}


}