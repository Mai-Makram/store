import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/servies/cart.service';
import { Products } from 'src/app/model/interface';
import { ProductsService } from '../../servies/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Products[] =[]

  cartProducts:any[]=[]

  constructor(private productsServies:ProductsService, private cartServies:CartService) { }

  getProducts(){
    this.productsServies.getProducts().subscribe({
      next : (res:any)=>{
        console.log(res)
        this.products =res
      },error: (err:any)=>{
        console.log(err)
      }
    })
  }

  

  addToCart(product:any){
    this.cartServies.addProductToCart(product).subscribe({
      next:()=>{
        alert("success your product in cart now")
      },error:(err:any)=>{
        console.log(err)
      }
  })
}


  /*addToCart(event :any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist){
        alert("product is already in cart")
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        alert("success your product in cart now")
      }
      
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }*/

  ngOnInit(): void {
    this.getProducts()
  }

}
