import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Block } from './block';
import { Trainerblock } from './trainerblock';

@Injectable({
  providedIn: 'root'
})
export class TrainerblockserviceService {

  private mentorsUrl:string;
  private mentors1Url:string;

  constructor(private http: HttpClient) {
    this.mentorsUrl="http://localhost:8761/api/authenticate/mentor/mentor-list";
    this.mentorsUrl="http://localhost:8761/api/authenticate/mentor/delete/";
   }

   public findAll(): Observable<Trainerblock[]>{

    return this.http.get<Trainerblock[]>(this.mentorsUrl);
   }
   deleteMentor(mentorId: number): Observable<any>{
     console.log(mentorId);
     return this.http.delete(`${this.mentors1Url}` + mentorId, {responseType:'text'});
   }

}
