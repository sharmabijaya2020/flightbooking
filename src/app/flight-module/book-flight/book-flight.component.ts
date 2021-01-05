import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { FlightDetailsService } from '../flight-details.service';
import { FlightDetails } from '../flight-details.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bookflight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookflightComponent implements OnInit {

  bookingForm: FormGroup;
  id: string;
  constructor(
    private flightDetailService: FlightDetailsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingForm = new FormGroup(
      {
        passengerName: new FormControl("",
          {
            validators: [
              Validators.required,
              Validators.pattern("^[^0-9]+$")
            ]
          }),
        noOfTickets: new FormControl("",
          {
            validators: [
              Validators.required,
              Validators.minLength(1),
              Validators.pattern("^[0-9]*$")
            ]
          }),
        flightId: new FormControl("",
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(8),
              Validators.pattern('^[a-zA-Z]{2}[a-zA-Z0-9]{4,6}$')
            ]
          })
      }
    )


  }

  get passengerName() {
    return this.bookingForm.get("passengerName");
  }

  get noOfTickets() {
    return this.bookingForm.get("noOfTickets");
  }

  get flightId() {
    return this.bookingForm.get("flightId");
  }

  flightIdValidators(c: FormControl) {
    console.log(c);
  }

  submitForm() {
    let randomid = new Date().getMilliseconds();
    this.id = randomid.toString();

    let data: FlightDetails = {
      passengerName: this.passengerName.value,
      bookingId: this.flightId.value,
      noOfTickets: this.noOfTickets.value,
      amount: this.noOfTickets.value * 150 //asuming price 150/ticket
    };
    this.flightDetailService.setLocalstorageId(this.id);
    this.flightDetailService.setLocalStorageData(this.id, data);
    this.router.navigate(['/viewdetails']);

  }

  getData() {
    let local = this.flightDetailService.getLocalStorageData(this.id);
    console.log(local);
  }

  deleteData() {
    localStorage.removeItem(this.id);
    //localStorage.clear();
  }
}
