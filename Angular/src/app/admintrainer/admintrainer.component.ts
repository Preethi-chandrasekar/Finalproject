import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainerblockserviceService } from '../trainerblockservice.service';
import { Trainerblock } from '../trainerblock';
// import { SearchserviceService } from '../searchservice.service';
// import { Search } from '../search';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-admintrainer',
  templateUrl: './admintrainer.component.html',
  styleUrls: ['./admintrainer.component.scss']
})
export class AdmintrainerComponent implements OnInit {

    mentors:Observable<[Trainerblock]>;
  constructor(private httpService:HttpClient, private Service:TrainerblockserviceService) { }
  block:Trainerblock[];
  ngOnInit() {
    
    this.Service.findAll().subscribe(data=>{
      this.block=data;
    });
    this.reloadData();
  }

  reloadData(){
    this.Service.findAll().subscribe(data=>{
      this.block=data;
    });
    //  this.mentors=this.Service.findAll();
  }
  deleteMentor(mentorId: number) {
    this.Service.deleteMentor(mentorId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



}
