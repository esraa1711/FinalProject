import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  Products: any[] = []
  Categories: any[] = []
  Brands: any[] = []
  ProductCart:any[]=[]
  constructor(private service: ProductService) { }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    this.getBrands()

  }



  getProducts() {
    this.service.AllProduct().subscribe((res: any) => {
      this.Products = res


      console.log(this.Products)

    }, err => {

      alert("Error")
    })
  }





  getCategories() {

    this.service.getAllCategories().subscribe((res: any) => {
      this.Categories = res
      // console.log(this.Categories)
      

    }, err => {
  

      alert("Error")
    })
  }





  filtercategory(event: any) {

    let value = event.target.value;
    (value == "All") ? this.getProducts() : this.getProductsBycategory(value)

  }






  getProductsBycategory(keyword: string) {

    this.service.getProductsBycategory(keyword).subscribe((res: any) => {

      this.Products = res

    })
  }



  getBrands() {
    this.service.getAllBrand().subscribe((res: any) => {
      this.Brands = res
      console.log(this.Brands)
    }, err => {

      alert("Error")
    })
  }

  filterbrand(event: any) {
    let value = event.target.value;
    (value == "All") ? this.getProducts() : this.getProductBrand(value)

    console.log(value)



  }

  getProductBrand(keyword: string) {
    this.service.getProductsByBrand(keyword).subscribe((res: any) => {
      this.Products = res
      console.log(res)
    })
  }


  addToCart(event :any){
console.log(event)
 
}

}




