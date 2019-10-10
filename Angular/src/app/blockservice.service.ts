import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Block } from './block';


@Injectable({
  providedIn: 'root'
})
export class BlockserviceService {

    private usersUrl:string;
  private users1Url:string;

  constructor(private http: HttpClient) {
    this.usersUrl="http://localhost:8761/api/authenticate/user/user-list";
    this.users1Url="http://localhost:8761/api/authenticate/user/delete/";
   }

   public findAll(): Observable<Block[]>{

    return this.http.get<Block[]>(this.usersUrl);
   }
   deleteUser(userId: number): Observable<any>{
     console.log(userId);
     return this.http.delete(`${this.users1Url}` + userId, {responseType:'text'});
   }

 
}
