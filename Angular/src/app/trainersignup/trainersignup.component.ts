import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainer } from '../trainer';
import { TrainersignServeService } from '../trainersign-serve.service';


@Component({
  selector: 'app-trainersignup',
  templateUrl: './trainersignup.component.html',
  styleUrls: ['./trainersignup.component.scss']
})
export class TrainersignupComponent implements OnInit {
  signupForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private trainerservice:TrainersignServeService) { }
  trainer:Trainer=new Trainer();

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      coursename: ['', Validators.required],
      fees: ['', Validators.required],
      yofexp: ['', Validators.required],
      number: ['', Validators.required],
      url: ['', Validators.required],
     nooftrains: ['', Validators.required],

  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
} 
get g() { return this.signupForm.controls; }

    SignupTrainer() {
        this.submitted = true;
        
        this.trainer.mentorName = this.signupForm.get('username').value;
        this.trainer.password = this.signupForm.get('password').value;
        this.trainer.mentorEmail = this.signupForm.get('email').value;
        this.trainer.mentorYearsExp = this.signupForm.get('yofexp').value;
        this.trainer.mentorLinkdinUrl = this.signupForm.get('url').value;
        this.trainer.mentorPhone = this.signupForm.get('number').value;
        this.trainer.trainings = this.signupForm.get('nooftrains').value;
        this.trainer.mentorYearsExp = this.signupForm.get('yofexp').value;
       this.trainerservice.createTrainer(this.trainer).subscribe(data => console.log(data),error=>console.log(error));

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        this.router.navigateByUrl('/trainerlogin');
        
    }
}

  


