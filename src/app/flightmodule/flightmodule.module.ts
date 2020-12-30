import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BookflightComponent } from './bookflight/bookflight.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { AngularmaterialmoduleModule } from '../angularmaterialmodule/angularmaterialmodule.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightDetailsService } from './flightdetails.service';
import { CustomHttpInterceptor } from '../httpinterceptor';



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
