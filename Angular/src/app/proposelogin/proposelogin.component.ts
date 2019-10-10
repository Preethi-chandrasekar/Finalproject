import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposelogin',
  templateUrl: './proposelogin.component.html',
  styleUrls: ['./proposelogin.component.scss']
})
export class ProposeloginComponent implements OnInit {

  proposeForm
  constructor(
    private formBuilder:FormBuilder,
    private route:Router
  )
  {this.proposeForm = this.formBuilder.group({
    username:'',
    password:''
  });}
  
  ProposeLogin(data){
    
   this.route.navigate(['/trainerfirstpage']);
  }


  ngOnInit() {
  }

}
