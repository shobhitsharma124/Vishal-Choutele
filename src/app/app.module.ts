import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { Appointment } from './appointment.model';
import { AppointmentService } from './appointment.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ViewAppointmentComponent,
    PlaceAppointmentComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
