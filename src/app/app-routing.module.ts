import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const appRoutes:Routes = [
  
  {path : '' , redirectTo :'/home' , pathMatch:"full"},
  {path : 'home' , component: HomeComponent},
  {path : 'placeAppointment' , component:PlaceAppointmentComponent},
  {path : 'viewAppointment' , component: ViewAppointmentComponent } ,
  {path : 'contactUs' ,  component: ContactUsComponent } 
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
