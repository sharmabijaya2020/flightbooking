import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightDetails } from '../flight-details.interface';
import { Subscription } from 'rxjs';
import { FlightDetailsService } from '../flight-details.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewdetailsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['passengerName', 'bookingId', 'noOfTickets', 'amount', "delete"]


  localStorageDataSubscription: Subscription;
  localStorageIdSubscription: Subscription;
  localJSONDataSubscription: Subscription;

  localStorageId: string;

  localStorageData //= new MatTableDataSource<any>();
  localJSONData //= new MatTableDataSource<any>();

  constructor(
    private flightDetailsService: FlightDetailsService
  ) { }

  ngOnInit(): void {
    this.localStorageIdSubscription = this.flightDetailsService.localStorageId.subscribe(
      localstorageid => {
        this.localStorageId = localstorageid
      })
    this.localStorageDataSubscription = this.flightDetailsService.localStorageData.subscribe(
      localstoragedata => {
        this.localStorageData = localstoragedata;
      })
    this.flightDetailsService.getLocalstorageId();
    this.flightDetailsService.getLocalStorageData(this.localStorageId);

    this.localJSONDataSubscription = this.flightDetailsService.getLocalJSONData().subscribe(
      localjsondata => {
        this.localJSONData = localjsondata;
      })


    // this.localJSONData = 
    this.flightDetailsService.getLocalJSONData();
    console.log(this.localJSONData);
  }
  deleteLocalStorageData(id) {
    let myJson = [];
    console.log(this.localStorageData);
    this.localStorageData.map(function (element, index) {
      if (element.bookingId !== id) {
        myJson.push(element);
        // this. localStorageData.splice(index, 1);
      }
    })
    this.localStorageData = myJson;
    console.log(this.localStorageData);

  }

  deleteLocalJSONData(id) {
    let myJson = [];
    console.log(this.localJSONData);
    this.localJSONData.map(function (element, index) {
      if (element.bookingId !== id) {
        myJson.push(element);
        // this. localJSONData.splice(index, 1);
      }
    })
    this.localJSONData = myJson;
    console.log(this.localJSONData);

  }
  ngOnDestroy() {
    this.localJSONDataSubscription.unsubscribe();
    this.localStorageIdSubscription.unsubscribe();
    this.localStorageDataSubscription.unsubscribe();
  }

}