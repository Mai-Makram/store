import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url=  "http://localhost:3000/cart/"

  constructor( private http:HttpClient ) { }

  addProductToCart(product:any){
    return this.http.post(this.url , product)
  }

  getListOfCart(){
    return this.http.get(this.url)
  }

  deleteProduct(id:any){
    return this.http.delete(this.url + id)
  }
}
