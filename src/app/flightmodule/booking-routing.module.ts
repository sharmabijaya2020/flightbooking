import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BookflightComponent } from './bookflight/bookflight.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
    { path: "bookflight", component: BookflightComponent },
    { path: "viewdetails", component: ViewdetailsComponent }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FlightBookingRoutingModule {

}