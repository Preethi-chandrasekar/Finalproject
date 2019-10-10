import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainer } from '../trainer';
import { TrainersignServeService } from '../trainersign-serve.service';



@Component({templateUrl: 'trainersignin.component.html'})
export class TrainersigninComponent  implements OnInit {
    trainerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private trainerservice:TrainersignServeService
    ) {}
    trainer1:Trainer= new Trainer();;
    trainer:Trainer=new Trainer();

    ngOnInit() {
        this.trainerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
           
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get g() { return this.trainerForm.controls; }

    TrainerUser() {
        this.submitted = true;
        this.trainer.password = this.trainerForm.get('password').value;
        this.trainer.mentorEmail = this.trainerForm.get('username').value;
        this.trainerservice.signin(this.trainerForm.get('username').value).subscribe(data => {this.trainer1=data;
            console.log(data);
            if(this.trainer.mentorEmail==this.trainer1.mentorEmail&&this.trainer.password==this.trainer1.password) {
                this.router.navigate(['/trainerfirstpage']);
            }
        });
        // stop here if form is invalid
        if (this.trainerForm.invalid) {
            return;
        }
        
        
    }
        }
    