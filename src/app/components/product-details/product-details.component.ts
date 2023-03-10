import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id: any;

  data: any = []
  Cart : any=[]
  number :any
  dataproduct = {}
  // Categories:any=[]

  constructor(private route: ActivatedRoute, private service: ProductService , private api : CartService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {

    this.getProudectId()

    // this.service.getAllCategories().subscribe(res =>{
    //   this.Categories=res
    // })
  }
  getProudectId() {

    this.service.getProductDetails(this.id).subscribe(res => {
      this.data = res.Product
      console.log(this.data)
    })

  }

  Add(){
  // if("item" in localStorage){
  //   this.Cart=JSON.parse(localStorage.getItem('item')!);
  //   let exit = this.Cart.find((item : any)=>{
  //     return item.id = this.data.id
  //   }) 
  //   if(exit){
  //     alert('product exsit')
  //   }else{
  //     this.Cart.push(this.data)
  //     localStorage.setItem("item" , JSON.stringify(this.Cart))
  //   }
    
  // }else {
  //     this.Cart.push(this.data)
  //     localStorage.setItem("item" , JSON.stringify(this.Cart))



  //   }
  let product_id= this.data.id
this.dataproduct ={'product_id':   this.data.id , 'price':this.data.price , 'number': this.number }


this.api.cart(this.dataproduct).subscribe(res=>{
  console.log(res)
})


  }
  addnumber(number : any){
this.number = number.target.value
console.log(this.number)
  }
  // console.log(exit)


  
  }

