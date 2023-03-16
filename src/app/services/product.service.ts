import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(){
   return this.http.get<any>('http://localhost:8000/api/product')
  }

  AllProduct(){
    return this.http.get<any>('http://localhost:8000/api/Allproduct')
   }
 

  getAllCategories(){
    return this.http.get<any>('http://localhost:8000/api/categories')
  }

  
  getAllModels(){
    return this.http.get<any>('http://localhost:8000/api/categorymodel')
  }
  getAllBrand(){
    return this.http.get<any>('http://localhost:8000/api/categorybrand')

  }
  getProductsBycategory(keyword:string){
    return this.http.get<any>('http://localhost:8000/api/filter/'+ keyword)

  }

  getProductsByBrand(keyword:string){
    return this.http.get<any>('http://localhost:8000/api/filterbrand/'+ keyword)

  }

  getProductDetails( id: any){
    return this.http.get<any>(`http://localhost:8000/api/product/`+id)

  }

  storeProduct(data : any){
    return this.http.post<any>('http://localhost:8000/api/product/store' , data)
  }
}
