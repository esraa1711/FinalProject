import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  cart(data : any){
    const header=new HttpHeaders().set('user_id' , localStorage.getItem('token')!)
  return  this.http.post<any>('http://localhost:8000/api/card/store' , data ,{headers:header})
  }
}
