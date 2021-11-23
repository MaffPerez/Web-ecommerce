import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pathApi = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) {}
  Login(user:any) {
    return this.http.post(this.pathApi,{
      username: user.username,
      password: user.password
    });
  }
}
