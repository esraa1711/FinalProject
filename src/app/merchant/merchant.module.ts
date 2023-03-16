import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchiveComponent } from './archive/archive.component';


const routes: Routes = [
  {path:"",redirectTo:"/merchant/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"orders",component:OrdersComponent},
  {path:"archive",component:ArchiveComponent}
]


@NgModule({
  declarations: [
    OrdersComponent,
    AddProductComponent,
    HomeComponent,
    SidebarComponent,
    ArchiveComponent,

  ],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,


  ]
})
export class MerchantModule { }
