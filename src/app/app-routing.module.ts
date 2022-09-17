import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/component/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { OrderConfirmationComponent } from './views/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path:"", component: ProductsListComponent },
  { path:"products/:id", component: ProductsDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "submit", component: OrderConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
