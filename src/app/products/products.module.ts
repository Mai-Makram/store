import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    ItemProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ProductsListComponent,
    FormsModule
  ]
})
export class ProductsModule { }
