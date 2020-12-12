import { from } from 'rxjs';
import {Injectable} from '@angular/core';
import { Appointment } from './appointment.model';

@Injectable()
export class AppointmentService{

    appointments : Appointment[] = [];

    contactArray =[];

    appointmentDetails :Appointment;

    addAppointment(appointment){

        this.appointmentDetails = new Appointment(appointment.fname , 
                                                    appointment.lname , 
                                                    appointment.city , 
                                                    appointment.package ,
                                                    appointment.trainer , 
                                                    appointment.mob,
                                                    appointment.street ,
                                                    appointment.country , 
                                                    appointment.state , 
                                                    appointment.pinCode , 
                                                    appointment.email , 
                                                    appointment.age , 
                                                    appointment.Bfname , 
                                                    appointment.Blname , 
                                                    appointment.therapist , 
                                                    appointment.quote );
        
        this.appointments.push(this.appointmentDetails);

        localStorage.setItem("Appointments" , JSON.stringify(this.appointments));

        console.log(this.appointments);
    }

    getAppointments(){
        this.appointments = JSON.parse(localStorage.getItem("Appointments"));
        console.log(this.appointments)
        return this.appointments;
    }


    addContact(contact){
        this.contactArray.push(contact);
        console.log(this.contactArray);
        localStorage.setItem("ContactUsArray" , JSON.stringify(this.contactArray));
    }

}