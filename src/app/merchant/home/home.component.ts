import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MerPro:any[]=[]
  Brand:any[]=[]
  Models:any[]=[]
  Category:any[]=[]
constructor(private api : MerchantService , private productServe : ProductService , private auth : AuthService){}



  ngOnInit(): void {
this.getMerPro() 
this.GetBrands()
this.GetModels()
this.GetCategory()

 }


  getMerPro(){
    this.api.getMerchant().subscribe(res=>{
console.log(res)
this.MerPro=res
    })
  }

  GetModels(){
    this.productServe.getAllModels().subscribe(res=>{
this.Models=res
    })
  }

  GetBrands(){
    this.productServe.getAllBrand().subscribe(res=>{
this.Brand= res
console.log(this.Brand)
    })
  }

  GetCategory(){
    this.productServe.getAllCategories().subscribe(res=>{
this.Category=res
    })
  }
  DeleteProduct(id:any){
    this.api.Del(id).subscribe(res=>{
      this.getMerPro()
    })


  }

 
}
