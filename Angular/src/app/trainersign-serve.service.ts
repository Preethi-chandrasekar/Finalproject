import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';
@Injectable({
  providedIn: 'root'
})
export class TrainersignServeService {
  private baseUrl = 'http://localhost:8761/api/authenticate/mentor/signup';
  private baseUrl1 = 'http://localhost:8761/api/authenticate/mentor/details/'

  constructor(private http: HttpClient) { }

  createTrainer(trainer:Trainer):Observable<Trainer>{
    return this.http.post<Trainer>(`${this.baseUrl}` ,trainer);
  }

    signin(mentorEmail:String):Observable<Trainer> {
      return this.http.get<Trainer>(`${this.baseUrl1}` + mentorEmail);
    }

    
    
}
