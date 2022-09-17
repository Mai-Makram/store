import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor() { }
  dataSubmit:any = {}

  getSubmitData(){
    this.dataSubmit =  JSON.parse(localStorage.getItem("submitData")!)
    console.log(this.dataSubmit)
  }

  ngOnInit(): void {
    this.getSubmitData()
  }

}
