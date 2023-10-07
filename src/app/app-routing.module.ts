import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SpecificCategoryComponent } from './components/specific-category/specific-category.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [


  {
    path: '', component: BlankLayoutComponent, children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', canActivate: [authGuard], component: HomeComponent, title: 'Home' },
      { path: 'Cart', canActivate: [authGuard], component: CartComponent, title: 'Cart' },
      { path: 'payment/:id', canActivate: [authGuard], component: PaymentComponent, title: 'payment' },
      { path: 'allorders', canActivate: [authGuard], component: HomeComponent, title: 'Home' },
      { path: 'WishList', canActivate: [authGuard], component:WishListComponent, title: 'WishList' },
      { path: 'Details/:id', canActivate:[authGuard], component:ProductDetailsComponent, title:'Details'},
      { path: 'Products', canActivate: [authGuard], component: ProductsComponent, title: 'Products' },
      { path: 'Categories', canActivate: [authGuard], component: CategoriesComponent, title: 'Categories' },
      { path: 'Category/:id', canActivate: [authGuard], component: SpecificCategoryComponent, title: 'Category' },
      { path: 'Brands', canActivate: [authGuard], component: BrandsComponent, title: 'Brands' }
    ]
  },

  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'Login', component: LoginComponent, title: 'Login' },
      { path: 'Register', component: RegisterComponent, title: 'Register' }
    ]
  },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
