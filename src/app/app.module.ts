import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightmoduleModule } from './flight-module/flight-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialmoduleModule } from './angular-material-module/angular-material.module';
import { FlightBookingRoutingModule } from './flight-module/booking-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightmoduleModule,
    BrowserAnimationsModule,
    AngularmaterialmoduleModule,
    FlightBookingRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
