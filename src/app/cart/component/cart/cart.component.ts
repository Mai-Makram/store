import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../servies/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:any[]=[]
  totalPrice:number=0
  fullName:string = ""
  constructor(private router:Router , private cartServies:CartService) { }

  getCartList(){
    this.cartServies.getListOfCart().subscribe({
      next:(res:any)=>{
        this.cartList = res
        this.getTotalPrice()
      }
    })
  }

  /*getCartList(){
    if("cart" in localStorage){

      this.cartList = JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartList)
    
    this.getTotalPrice()
  }*/

  getTotalPrice(){
    this.totalPrice =0
    for(let x in this.cartList){
      this.totalPrice += this.cartList[x].item.price * this.cartList[x].quantity
    }
  }

  inputChange(){
    //localStorage.setItem("cart", JSON.stringify(this.cartList))
    this.getTotalPrice()
  }

  saveSubmitData(){
    localStorage.setItem("submitData" , JSON.stringify({name:this.fullName ,totalprice:this.totalPrice}))
  }

  detectChanges(event:any){
    this.fullName =event.target.value
    console.log(this.fullName)
    this.saveSubmitData()
  }

  deleteProductCart(id:any,i:number){
    this.cartServies.deleteProduct(id).subscribe({
      next:()=>{
        this.cartList.splice(i ,1)
        this.getTotalPrice()
      }
    })
    /*this.cartList.splice(i ,1)
    localStorage.setItem("cart", JSON.stringify(this.cartList))
    this.getTotalPrice()*/
  }

  
  submit(){
    this.cartList =[]
    //localStorage.removeItem("cart")
    this.router.navigateByUrl("/submit")
  }

  ngOnInit(): void {
    this.getCartList()
    this.saveSubmitData()
  }

}
