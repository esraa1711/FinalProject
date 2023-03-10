import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CardlistMaintainceComponent } from './components/cardlist-maintaince/cardlist-maintaince.component';
import { DetailsMaintainceComponent } from './components/details-maintaince/details-maintaince.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
 {path:"",component:MainlayoutComponent,children:[
  {path:"",redirectTo:"home",pathMatch:'full'},
  {
    path:"store",
    component: AllProductsComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"details/:id",
    component: ProductDetailsComponent
  },

  {
    path:"maintance",
    component: CardlistMaintainceComponent,
    canActivate:[AuthGuard]
  },
  { path: 'maintainceDetalis/:id',
  component:DetailsMaintainceComponent },
 ]},
  { path: 'account',
  component:RegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
