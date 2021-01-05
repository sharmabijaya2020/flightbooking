import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BookflightComponent } from './book-flight/book-flight.component';
import { ViewdetailsComponent } from './view-details/view-details.component';
import { AngularmaterialmoduleModule } from '../angular-material-module/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightDetailsService } from './flight-details.service';
import { CustomHttpInterceptor } from '../http-interceptor';



@NgModule({
  declarations: [
    BookflightComponent,
    ViewdetailsComponent
  ],
  imports: [
    CommonModule,
    AngularmaterialmoduleModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FlightDetailsService,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ]
})
export class FlightmoduleModule { }
