import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CartComponent,
    FormsModule
  ]
})
export class CartModule { }
