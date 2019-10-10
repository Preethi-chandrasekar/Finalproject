import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Block } from './block';
import { Technology } from './technology';


@Injectable({
  providedIn: 'root'
})
export class TechnologyserviceService {

  private usersUrl: string;
  private users1Url:string;

 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8761/api/technology/technology';
    this.users1Url="http://localhost:8761/api/technology/technology/";
  }
 
  public findAll(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.usersUrl);
  }
 
  public save(user: Technology) {
    return this.http.post<Technology>(this.usersUrl, user);
  }
  deleteUser(techId: number): Observable<any>{
    console.log(techId);
    return this.http.delete(`${this.users1Url}` + techId, {responseType:'text'});
  }

}
