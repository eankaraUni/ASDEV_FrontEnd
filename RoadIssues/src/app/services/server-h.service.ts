import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SignInData} from '../model/beforeLogin'
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/User';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ServerHService {
  server_url = "http://localhost:3000";

  constructor(protected http: HttpClient, protected authS: AuthenticationService) { }
  signin(data: SignInData): Observable<Object> {
    return this.http.post(`${this.server_url}/api/users/login`, data);
  }

  createUser(data: any): Observable<Object> {
      return this.http.post(`${this.server_url}/api/users/signup`, data);
  }
  getAllUsers() : Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });

    return this.http.get(`${this.server_url}/private/admin/Users`,{
      headers: headers,
    });
  }
  getAllIssues() : Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });

    return this.http.get(`${this.server_url}/private/admin/Issues`,{
      headers: headers,
    });
  }
  getAssignedIssues() : Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });

    return this.http.get(`${this.server_url}/private/operator/Issues`,{
      headers: headers,
    });
  }
  getWrittenIssues() : Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });

    return this.http.get(`${this.server_url}/private/reporter/Issues`,{
      headers: headers,
    });
  }

  addIssue(data: any): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });
    return this.http.post(`${this.server_url}/private/reporter/addIssue`, data ,{
      headers: headers,
    });
}
  solveIssue(id: String): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });
    return this.http.post(`${this.server_url}/private/operator/updateStatus/${id}` ,{
      headers: headers,
    });
}
  getIssue(id:String): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authS.getToken()}`,
    });
    return this.http.get(`${this.server_url}/private/reporter/Issue/${id}` ,{
      headers: headers,
    });
}


}
