import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersignserveService } from '../usersignserve.service';
import { Usersignclass } from '../usersignclass';
import { Role } from '../role';


@Component({templateUrl: 'usersignup.component.html'})
export class UsersignupComponent implements OnInit {
    signupForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userservice:UsersignserveService) {}
    
    user:Usersignclass=new Usersignclass();
    role:Role=new Role();

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            mail: ['', [Validators.required , Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    } 

    // convenience getter for easy access to form fields
    get g() { return this.signupForm.controls; }

    SignupUser() {
        this.submitted = true;
        this.user.userName = this.signupForm.get('username').value;
        this.user.userEmail = this.signupForm.get('mail').value;
        this.user.userPassword = this.signupForm.get('password').value;
        //this.user.conformPass = this.signupForm.get('conformPass').value;
        this.role.roleEmail = this.signupForm.get('mail').value;
        this.role.rolePassword = this.signupForm.get('password').value;
        this.role.roleType = 'user';
        this.role.roleStatus = 'true';
        this.user.role = this.role;
        this.userservice.createUser(this.user).subscribe(() => console.log("added"),error=>console.log(error));

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        this.router.navigateByUrl('/aftersignup');
        
    }
}