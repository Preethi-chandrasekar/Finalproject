import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usersignclass } from './usersignclass';
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UsersignserveService {
  private baseUrl = 'http://localhost:8761/api/authenticate/user/signup';
  private baseUrl1 = 'http://localhost:8761/api/authenticate/user/details/'
  constructor(private http: HttpClient) { }

  createUser(user:Usersignclass):Observable<Usersignclass>{
    console.log(user.userEmail);
    return this.http.post<Usersignclass>(`${this.baseUrl}` ,user);
  }

  signin(userEmail:String):Observable<Usersignclass> {
    return this.http.get<Usersignclass>(`${this.baseUrl1}` + userEmail);
  }
  // blockUser(username=String):Observable<object>{
  //   return this.http.get('http://localhost:8761/api/authenticate/user/userBlock/'+`$(userId)`);
  // }

  // unblockUser(username=String):Observable<object>{
  //   return this.http.get('http://localhost:8761/api/authenticate/user/userUnBlock/'+`$(userId)`);  
  // }
}
