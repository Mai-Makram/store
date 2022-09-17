import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/products/"

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.url)
  }

  getProductById(id:any){
    return this.http.get(this.url + id)
  }
}
