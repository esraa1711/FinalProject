import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartsComponent } from './components/carts/carts.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CardlistMaintainceComponent } from './maintanance/cardlist-maintaince/cardlist-maintaince.component';
import { SinglecardmaintainceComponent } from './maintanance/singlecardmaintaince/singlecardmaintaince.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsMaintainceComponent } from './maintanance/details-maintaince/details-maintaince.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoaderInterceptor } from './services/loader.interceptor';
import { AuthInterceptor } from './services/auth.interceptor';
import { BookingComponent } from './maintanance/booking/booking.component';
import { DashboardmaintainceComponent } from './maintanance/dashboardmaintaince/dashboardmaintaince.component';
import { ProfileComponent } from './maintanance/profile/profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    CartsComponent,
    SpinnerComponent,
    HomeComponent,
    ProductComponent,
    RegistrationComponent,
    MainlayoutComponent,
    DetailsMaintainceComponent,
    CardlistMaintainceComponent,
    SinglecardmaintainceComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-left',
      preventDuplicates: true,
      easing: 'ease-in',
      easeTime: 1000,
    }),


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
