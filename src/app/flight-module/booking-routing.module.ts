import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BookflightComponent } from './book-flight/book-flight.component';
import { ViewdetailsComponent } from './view-details/view-details.component';

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