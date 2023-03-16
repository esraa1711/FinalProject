import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  ProductCart: any
  ProductImg: any = ''
  ProductName: any = []
  Count: any[] = []
 id:any
  number = 0
  Total : number = 0

  constructor(private serviceCart: CartService, private service: ProductService) { }
  ngOnInit(): void {
    this.getCart()

  }


  getCart() {
    this.serviceCart.getUserCart().subscribe((res: any) => {
      this.ProductCart = res.Card
      this.Count = res.count
      //to update Cart count i naaaaaaav
      this.serviceCart.setCount(this.ProductCart.length)
      console.log(this.ProductCart)
      this.ProductCart.forEach((item :any) => {
this.Total+=item.number*item.price
      
      });

    })
  }

  Updatedata(id:any , num:any) {
    // this.id  =this.ProductCart.forEach((element :any)=> {
    //   return element.id
    // });

    // console.log(this.id)
    this.serviceCart.updateCart(id, num).subscribe(res => {
      console.log(res)
    })
  }

  min(index: any , id:any) {
    let num= --this.ProductCart[index].number
    this.Updatedata(id , num)
    console.log(num)
  }

  plus(index: any , id:any) {
      let num= ++this.ProductCart[index].number
    // this.Updatedata()
    this.Updatedata(id , num)
    console.log(num)
  }

  change(index :any ,id:any){
    let num= this.ProductCart[index].number
    this.Updatedata(id , num)
    console.log(num)

  }

  Del(id:any){
    this.serviceCart.delProduct(id).subscribe(res=>{
      this.getCart()
    })

  }
  DelAll(){
    this.serviceCart.delProductAll().subscribe(res=>{
      this.getCart()
    })
  }



  SendOrder(){
    this.serviceCart.SetOrderDetails(this.ProductCart).subscribe(res=>{
      console.log(res)
    })
  }
































  //   getproductCart(){
  //     if('cart' in localStorage){
  //       this.ProductCart =JSON.parse(localStorage.getItem('cart')!)
  //       console.log(this.ProductCart )
  //       this.getTotal()

  //   }




  // }







  // mins(index:number){
  //   this.ProductCart[index].number--
  //   this.getTotal()

  //   localStorage.setItem('cart' , JSON.stringify(this.ProductCart))

  // }





  // plus(index:number){
  //   this.ProductCart[index].number++
  //   this.getTotal()

  //       localStorage.setItem('cart' , JSON.stringify(this.ProductCart))
  // console.log(this.ProductCart);
  // }










}
