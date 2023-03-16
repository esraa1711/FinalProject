import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglecardmaintainceComponent } from './singlecardmaintaince/singlecardmaintaince.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardmaintainceComponent } from './dashboardmaintaince/dashboardmaintaince.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SidebarsComponent } from './sidebars/sidebars.component';
let routes : Routes=[
  { path: '', component: DashboardmaintainceComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'profile',component:ProfileComponent },
]
@NgModule({
  declarations: [
    BookingComponent,
    DashboardmaintainceComponent,
    ProfileComponent,
    SidebarsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MaintananceModule { }
