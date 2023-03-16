import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  isMerchant:Subject<boolean>=new Subject<boolean>()
  constructor(private auth:AuthService , private http : HttpClient) {
    this.isMerchant.next(this.auth.getRole()=="marchant")
   }
getMerchant(){
 return this.http.get<any>(`http://localhost:8000/api/SingleMerchant`)
}

GetMerOrders(){
 return this.http.get<any>('http://localhost:8000/api/ordermerchant')
}

Del(id:any){
  return this.http.delete<any>(`http://localhost:8000/api/product/delete/${id}`) 
}

Archive(){
  return this.http.get<any>('http://localhost:8000/api/product/archive')



}



restorePro(id:any){
  return this.http.get<any>(`http://localhost:8000/api/product/restore/${id}`)


}

getAllProduct(){

  return this.http.get<any>(`http://localhost:8000/api/Allproduct`)

 
}
}


