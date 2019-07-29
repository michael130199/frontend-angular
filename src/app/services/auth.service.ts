import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json"
  });


  /**Registro de Usuario version Api */
  registerUser(name: string, lastname:string, email: string, password: string){
    const url_api = "http://localhost:3000/api/users";
    return this.http.post<UserInterface>(
      
      url_api, 
      { name, lastname, email, password },/*{ name: name, email: email, password: password}*/
      { headers: this.headers }

    ).pipe(map(data => data ));
    
  }

  loginuser(email:string, password: string): Observable<any>{
    const url_api = "http://localhost:3000/api/users/login?include=user";
    
    return this.http.post<UserInterface>(
    
      url_api, 
      {email , password}, 
      {headers: this.headers}
    
    ).pipe(map(data => data));
  }


  setUser(user: UserInterface){
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string)
    return "token";
  }

  setToken(token){
    localStorage.setItem("accessToken", token);
  }

  getToken(){
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface{
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user: UserInterface = JSON.parse(user_string);
      return user;
    }else{
      return null
    }
  }


  logoutUser(){
    let accessToken = localStorage.getItem('accessToken');
    const url_api = `http://localhost:3000/api/users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<UserInterface>(url_api, {headers: this.headers});
  }
}
