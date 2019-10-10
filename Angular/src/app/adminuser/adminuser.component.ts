import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { SearchserviceService } from '../searchservice.service';
// import { Search } from '../search';
import { Observable } from 'rxjs';
import { Block } from '../block';
import { BlockserviceService } from '../blockservice.service';



@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.scss']
})
export class AdminuserComponent implements OnInit {
  users:Observable<Block[]>;
  constructor(private httpService:HttpClient, private Service:BlockserviceService) { }
  search1:Block[];

  
  ngOnInit() {
        this.Service.findAll().subscribe(data=>{
      this.search1=data;
    });
    this.reloadData();

   
}
reloadData(){
  this.Service.findAll().subscribe(data=>{
    this.search1=data;
  });
  this.users=this.Service.findAll();
}
deleteUser(userId: number) {
  this.Service.deleteUser(userId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

  }
