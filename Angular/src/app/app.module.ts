import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// import { TrainersearchresultComponent } from './trainersearchresult/trainersearchresult.component';
import { UserlandpageComponent } from './userlandpage/userlandpage.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TrainersearchresultComponent } from './trainersearchresult/trainersearchresult.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainersigninComponent } from './trainersignin/trainersignin.component';
import { TrainerfirstpageComponent } from './trainerfirstpage/trainerfirstpage.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainernotificationComponent } from './trainernotification/trainernotification.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { UsercurrentComponent } from './usercurrent/usercurrent.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProposeloginComponent } from './proposelogin/proposelogin.component';
import { AftersignupComponent } from './aftersignup/aftersignup.component';
import { AdminComponent } from './admin/admin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsernotificationComponent } from './usernotification/usernotification.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdmintrainerComponent } from './admintrainer/admintrainer.component';
import { AdminuserComponent } from './adminuser/adminuser.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
  
    UserlandpageComponent,
    Navbar1Component,
    HomepageComponent,
   TrainersearchresultComponent,
   TrainersigninComponent,
   TrainerfirstpageComponent,
   TrainerprofileComponent,
   TrainercompletedComponent,
   TrainercurrentComponent,
   TrainernotificationComponent,
   UsercompletedComponent,
   UsercurrentComponent,
   UserprofileComponent,
   ProposeloginComponent,
   AftersignupComponent,
   AdminComponent,
   UsersignupComponent,
   UsernotificationComponent,
   PaymentComponent,
   TrainersignupComponent,
   AdmintechnologyComponent,
   AdmintrainerComponent,
   AdminuserComponent,

  
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   // NgMultiSelectDropDownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
