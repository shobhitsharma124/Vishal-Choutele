import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm:FormGroup ;


  constructor(private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(){
    let firstName = '' ; 
    let lastName = '' ; 
    let email = '' ; 
    let subject = '' ; 
    let message = '' ; 
    


    this.contactForm = new FormGroup({
      'firstName' : new FormControl(firstName , [Validators.required] ),
      'lastName' : new FormControl(lastName , Validators.required ),
      'email' : new FormControl(email , [Validators.required , Validators.email] ),
      'message' : new FormControl(message , Validators.required ),
      'subject' : new FormControl(subject , Validators.required )

    })


  }

  onSubmit(){
    console.log(this.contactForm.value);
    this.appointmentService.addContact(this.contactForm.value);
    this.contactForm.reset();
  }


}
