import { Component, OnInit } from '@angular/core';
import{FormBuilder, ValidationErrors, FormControl} from '@angular/forms'
import{FormGroup} from '@angular/forms'
import{Validators} from '@angular/forms'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Router } from '@angular/router';
import { UsersignserveService } from '../usersignserve.service';
import { Usersignclass } from '../usersignclass';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  loginForm: FormGroup; 
    loading = false;
    submitted = false;
    returnUrl: string;
    
   
   
  
  constructor(
    private formBuilder:FormBuilder,
    private router: ActivatedRoute,
    private route:Router,
    private userservice:UsersignserveService
  ) {
    
  
    // this.signupForm = this.formBuilder.group({
    //   name:'',
    //   email:'',
    //   password:'',
    //   password2:''
    // });
    
  //  LoginUser(data){
  //    document.getElementById("loginbtn").click();
  //   this.route.navigate(['/userlandpage']);
  //  }
  
    
 
  //   SignupUser(data){
  //     document.getElementById("signupbtn").click();
  //    this.route.navigate(['/aftersignup']);
  //   }
  }
  user1:Usersignclass;
  user:Usersignclass=new Usersignclass();
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });

  
  // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


  

  LoginUser(data) {
    this.submitted = true;
    this.user.userEmail = this.loginForm.get('username').value;
    this.user.userPassword = this.loginForm.get('password').value;
    this.userservice.signin(this.user.userEmail).subscribe(data => {this.user1=data;
      console.log(data);
      if(this.user.userEmail==this.user1.userEmail&&this.user.userPassword==this.user1.userPassword) {
        this.route.navigate(['/userlandpage']);
      }
    });

    
    // stop here if form is invalid
    if (this.loginForm.valid) {
      document.getElementById("loginbtn").click();
      
    }
    else
    {
        return;
    }
   
}


}
