import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {

  appointmentForm:FormGroup ;

  appointmentArray= [];


  constructor( private appointmentService:AppointmentService ) { }

  ngOnInit(): void {

    this.initForm();

  }

  


  initForm(){
    let fname = '' ; 
    let lname = '' ; 
    let street = '' ; 
    let city = '' ; 
    let country = '' ; 
    let state = '' ; 
    let pinCode = '' ; 
    let email = '' ; 
    let age = '' ; 
    let mob = '' ; 
    let Bfname = '' ; 
    let Blname = '' ; 
    


    this.appointmentForm = new FormGroup({
      'fname' : new FormControl(fname , Validators.required ),
      'lname' : new FormControl(lname , Validators.required ),
      'street' : new FormControl(street , Validators.required ),
      'city' : new FormControl(city , Validators.required ),
      'state' : new FormControl(state , Validators.required ),
      'country' : new FormControl(country , Validators.required ),
      'pinCode' : new FormControl(pinCode , [Validators.required , Validators.maxLength(6) ] ),
      'email' : new FormControl(email ,[ Validators.required , Validators.email , Validators.pattern('')] ),
      'age' : new FormControl(age , [Validators.required , Validators.min(25) , Validators.max(60)] ),
      'mob' : new FormControl(mob , [Validators.required , Validators.pattern('[7-9]{1}[0-9]{9}') ] ),
      'Bfname' : new FormControl(Bfname , Validators.required ),
      'Blname' : new FormControl(Blname , Validators.required ),
      'trainer': new FormControl('male', Validators.required),
      'package' : new FormControl('500' , Validators.required),
      'rupees' : new FormControl('500' , [Validators.required ]),
      'paise' : new FormControl('0' , [Validators.required ]),
      'quote' : new FormControl('' , Validators.required),
      'therapist' : new FormControl('Yes' , Validators.required)

    })


  }


  changePackage(e:any){
    // this.appointmentForm.controls['package'].setValue(e.target.value);
    this.appointmentForm.controls['rupees'].setValue(e.target.value);

  }

  onSubmit(){
    console.log(this.appointmentForm.value);
    const f = this.appointmentForm;
    console.log(f.get("fname").value);
    const appointment = {fname:f.get("fname").value};


    this.appointmentService.addAppointment(this.appointmentForm.value);

    // localStorage.setItem('appointments' , JSON.stringify(f.value));
    this.appointmentForm.reset();

    this.appointmentForm.controls['trainer'].setValue('male');
    this.appointmentForm.controls['package'].setValue('500');
    this.appointmentForm.controls['therapist'].setValue('Yes');
  }

}
