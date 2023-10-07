import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CuttextPipe } from './services/cuttext.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { SpecificCategoryComponent } from './components/specific-category/specific-category.component';
import { AllordersComponent } from './components/allorders/allorders.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    FooterComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CuttextPipe,
    ProductDetailsComponent,
    WishListComponent,
    PaymentComponent,
    SpecificCategoryComponent,
    AllordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule ,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
