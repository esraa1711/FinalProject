import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CardlistMaintainceComponent } from './maintanance/cardlist-maintaince/cardlist-maintaince.component';
import { DetailsMaintainceComponent } from './maintanance/details-maintaince/details-maintaince.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { AuthGuard } from './services/auth.guard';
import { CartsComponent } from './components/carts/carts.component';
import { IsMerchantGuard } from './merchant/services/is-merchant.guard';
import { DashboardmaintainceComponent } from './maintanance/dashboardmaintaince/dashboardmaintaince.component';
import { BookingComponent } from './maintanance/booking/booking.component';
import { ProfileComponent } from './maintanance/profile/profile.component';

const routes: Routes = [
  {
    path: "", component: MainlayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: 'full' },
      {
        path: "store",
        component: AllProductsComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "cart",
        component: CartsComponent,
        canActivate: [AuthGuard]

      },
      {
        path: "details/:id",
        component: ProductDetailsComponent
      },
      {
        path: "cart/:id",
        component: CartsComponent,
      },

      {
        path: 'maintanceDetalis/:id',
        component: DetailsMaintainceComponent
      },{
        path: "maintance",
        component: CardlistMaintainceComponent,
        // canActivate:[AuthGuard]
      },
    ]
  },
  {
    path: 'account',
    component: RegistrationComponent
  },
  {
    path: 'dbmaintance', 
    loadChildren: () => import('./maintanance/maintanance.module').then(m => m.MaintananceModule)
  },
  {
    path: 'merchant',
    canActivate:[IsMerchantGuard],
    loadChildren: () => import('./merchant/merchant.module').then(m => m.MerchantModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
