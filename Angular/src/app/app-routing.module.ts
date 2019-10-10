import { NgModule } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component'; 
import { Routes, RouterModule } from '@angular/router';
import { UserlandpageComponent } from './userlandpage/userlandpage.component';
import { TrainerfirstpageComponent } from './trainerfirstpage/trainerfirstpage.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { TrainernotificationComponent } from './trainernotification/trainernotification.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { UsercurrentComponent } from './usercurrent/usercurrent.component';
import { TrainersearchresultComponent } from './trainersearchresult/trainersearchresult.component';
import { TrainersigninComponent } from './trainersignin/trainersignin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProposeloginComponent } from './proposelogin/proposelogin.component';
import { AftersignupComponent } from './aftersignup/aftersignup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsernotificationComponent } from './usernotification/usernotification.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdmintrainerComponent } from './admintrainer/admintrainer.component';
import { AdminuserComponent } from './adminuser/adminuser.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'userlandpage', component: UserlandpageComponent },
  {path:'trainerlogin',component:TrainersigninComponent},
  {path:'trainerfirstpage',component:TrainerfirstpageComponent },
   { path: 'trainersearch', component: TrainersearchresultComponent},
   {path: 'trainerprofile', component:TrainerprofileComponent},
   {path : 'trainercompleted',component: TrainercompletedComponent },
   {path : 'trainercurrent',component:  TrainercurrentComponent},
   {path : 'trainernotification',component:  TrainernotificationComponent  },
   {path : 'usercompleted',component:  UsercompletedComponent  },
   {path : 'usercurrent',component: UsercurrentComponent} ,
   {path : 'userprofile',component: UserprofileComponent} ,
   {path : 'proposelogin',component: ProposeloginComponent} ,
   {path : 'aftersignup',component: AftersignupComponent} ,
   {path : 'admin',component:AdminComponent } ,
   {path : 'usersignup',component:UsersignupComponent  } ,
   {path : 'usernotification',component:UsernotificationComponent } ,
   {path : 'pay',component: PaymentComponent  } ,
   {path : 'admintechnology' , component: AdmintechnologyComponent     },
   {path : 'adminuser' , component:  AdminuserComponent  },
    {path : 'admintrainer' , component:  AdmintrainerComponent },
    {path : 'trainersignup' , component:  TrainersignupComponent },
  
  


  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
