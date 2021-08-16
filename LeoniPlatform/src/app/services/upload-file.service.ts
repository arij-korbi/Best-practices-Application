import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};
@Injectable({
    providedIn: 'root'
  })
  export class UploadFileService {
  
    private baseUrl = 'http://localhost:9090';
  
    constructor(private http: HttpClient) { }
  
    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
  
      formData.append('file', file);
  
      const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
  
      return this.http.request(req);
    }
  
    getFiles(): Observable<any> {
      return this.http.get(`${this.baseUrl}/files`);
    }
    public findAllFiles ():Observable<any>{return this.http.get<any>("http://localhost:9090/allfiles",httpOptions);}

  }