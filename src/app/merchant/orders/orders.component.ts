import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
MerOrders:any[]=[]
Product:any []=[]
  constructor(private api: MerchantService , private product : ProductService){}
  ngOnInit(): void {
    this.MerOrder()
    this.getPro()
  }

  MerOrder(){
    this.api.GetMerOrders().subscribe(res=>{
      console.log(res)
      this.MerOrders=res
    })
  }
getPro(){
  this.api.getAllProduct().subscribe(res=>{
    this.Product=res
    console.log(this.Product)
  })
}


}
