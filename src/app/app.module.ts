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
import { CardlistMaintainceComponent } from './components/cardlist-maintaince/cardlist-maintaince.component';
import { SinglecardmaintainceComponent } from './components/singlecardmaintaince/singlecardmaintaince.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsMaintainceComponent } from './components/details-maintaince/details-maintaince.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoaderInterceptor } from './services/loader.interceptor';
import { AuthInterceptor } from './services/auth.interceptor';


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
    CardlistMaintainceComponent,
    SinglecardmaintainceComponent,
    DetailsMaintainceComponent,
    RegistrationComponent,
    MainlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
