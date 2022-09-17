import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/servies/cart.service';
import { ProductsService } from '../../servies/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  item:any ={}
  amount : any = "1"
  cartProducts:any[]=[]

  constructor( private serviesProduct:ProductsService , private route:ActivatedRoute , private cartServies:CartService ) { }

  id:string = this.route.snapshot.params['id']

  getOneProduct(){
    this.serviesProduct.getProductById(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.item =res
      }, error:(err:any)=>{
        console.log(err)
      }
    })
  }

  addToCart(product:any){
    this.cartServies.addProductToCart(product).subscribe({
      next:()=>{
        console.log(product)
        alert("success your product in cart now")
      },error:(err:any)=>{
        console.log(err)
      }
  })
}

    /*addToCart(item :any){
      if("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
        let exist = this.cartProducts.find(items => items.item.id == item.id)
        if(exist){
          alert("product is already in cart")
        }else{
          this.cartProducts.push({item,quantity:this.amount})
          localStorage.setItem("cart", JSON.stringify(this.cartProducts))
          alert("success your product in cart now")
        }
        
      }else{
        this.cartProducts.push({item,quantity:this.amount})
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    }*/

  ngOnInit(): void {
     this.getOneProduct()
  }

}
