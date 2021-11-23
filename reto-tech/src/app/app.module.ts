import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { AllProductsComponent } from './components/all-products/all-products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShoppingCartComponent,
    FooterComponent,
    SearchProductsComponent,
    FilterProductsComponent,
    AllProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
