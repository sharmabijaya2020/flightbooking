import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { FlightDetailsService } from '../flightdetails.service';
import { FlightDetails } from '../flightdetails.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
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
              // Validators.pattern("/^[^a-zA-Z]{2}[a-zA-Z0-9]{6,8}+$/")
              // Validators.pattern("/\b[a-zA-Z]{2}[0-9]{4,6}\b/")
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
