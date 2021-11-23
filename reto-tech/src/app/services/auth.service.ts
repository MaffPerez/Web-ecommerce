import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pathApi = 'https://fakestoreapi.com/auth/login';
  private AuthObject = {
    "email": "",
    "password": ""
  }

  constructor(private http: HttpClient) {}
  Login(user:any): Observable<any> {
    this.AuthObject["email"]= user.email
    this.AuthObject["password"]= user.password
    return this.http.post(this.pathApi, this.AuthObject)
  }

}
