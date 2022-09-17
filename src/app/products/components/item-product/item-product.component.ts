import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  @Input() data:any ={}
  @Output() product =new EventEmitter()
  //@Output() selectValue = new EventEmitter()
  amount :any = "1"

  constructor() { }

  add(){
    this.product.emit({item:this.data,quantity:this.amount})
  }

  ngOnInit(): void {
  }

}
