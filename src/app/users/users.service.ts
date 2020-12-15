import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  URL = 'http://woobsing-angular.test:8080/api';
  constructor(private _http: HttpClient) {}

  obtenerUsuarios(): Observable<any> {
    return this._http.get(`${this.URL}/usuarios`);
  }

  register(user: any): Observable<any> {
    return this._http.post(`${this.URL}/usuarios`, user); 
  }

  delete(id:string):Observable<any> {
    return this._http.delete(`${this.URL}/usuarios/${id}`)
  }
}