import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  appointments : Appointment[];

  searchStatus = false ;
  searchText = '';

  constructor( private appointmentService:AppointmentService ) { }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
    console.log(this.appointments);
  }

  searchRecords(){
    // this.searchStatus=true;
    console.log(this.searchText);
  }

  clearSearch(){
    // this.searchStatus=false;
    this.searchText = '';
  }

}
