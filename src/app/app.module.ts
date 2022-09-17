import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrderConfirmationComponent } from './views/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
