import { Component, EventEmitter, Input , Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()data:any=[]
@Output() item = new EventEmitter()
Categories: any[] = []
loading: boolean = false
addButton :boolean =false
number :number=1
islogged:boolean
ProductData:any[] =[]
constructor(private service : ProductService ,private auth:AuthService , private serviceCart: CartService){
  this.islogged = this.auth.isLogged()
  this.auth.getLoggedUser().subscribe(
    (data)=>{
      this.islogged = data
      console.log("change" , data)
    }
  )
}

ngOnInit(): void {
  this.getCategories()
}


getCategories() {
  this.loading = true

  this.service.getAllCategories().subscribe((res: any) => {
    this.Categories = res
    this.loading = false

  }, err => {
    this.loading = false

    alert("Error")
  })
}

ADD(event:any){
let Product = {'product_id' : this.data.id , 'number' : this.number , 'totalPrice' : this.number * this.data.price , 'price' : this.data.price}
  let value = event.target.value
console.log(Product)
this.serviceCart.cart(Product).subscribe(res=>{
  alert("success")
  console.log(res)
  let x = this.serviceCart.getCount()
  this.serviceCart.setCount(++x)
})
}

numberItem(event: any){
  this.number=event.target.value
  
}


 
}
 


