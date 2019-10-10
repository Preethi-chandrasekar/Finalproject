import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms'
import{FormGroup} from '@angular/forms'
import{Validators} from '@angular/forms'
import { ActivatedRoute, RouterLink } from '@angular/router'

import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  searchBar;
  constructor(
    private formBuilder:FormBuilder,
    private router: ActivatedRoute,
    private route:Router
  ) { 

    this.searchBar = this.formBuilder.group({
     
      search:''
     });
 
    }
 
    Search(data){
    
      this.route.navigate(['/trainersearch']);
    }



  ngOnInit() {
  }
 

}
