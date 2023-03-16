import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  cartCount:Subject<number> =new Subject<number>()

  getCount():number{
    return Number(localStorage.getItem("cart"))??0
  }
  setCount(count:number){
    this.cartCount.next(count)
    localStorage.setItem("cart",String(count))
  }
  cart(data : any){
    // const header=new HttpHeaders().set('Authoriza' , localStorage.getItem('token')!)
    console.log('hi')
  return  this.http.post<any>('http://localhost:8000/api/card/store' , data ,)
  }

  
  getUserCart(){
    return this.http.get<any>('http://localhost:8000/api/card')
  }







  updateCart(id:any , num:any){
    console.log(id)
    return this.http.post<any>(`http://localhost:8000/api/cardUp/`+id+'/'+num , "")

  }




  delProduct(id : any){
    return this.http.delete<any>(`http://localhost:8000/api/card/delete/${id}`)
  }







  delProductAll(){
    return this.http.delete<any>('http://localhost:8000/api/card/deleteall')
  }


  SetOrderDetails(data:any){
   return this.http.post<any>('http://localhost:8000/api/web/store' , data)
  }
}
