import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { user } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor( private http : HttpClient) { }

  getdata(data : FormData){ 
    // const header = new HttpHeaders ()
    return this.http.post('http://localhost:8000/api/Users/store' , data)

  }

  
  StoreMer(data : FormData){ 
    // const header = new HttpHeaders ()
    console.log(data.get("crmback"))
    return this.http.post<any>('http://localhost:8000/api/merchant/store' , data)

  }

    
  StoreMen(data : FormData){ 
    // const header = new HttpHeaders ()
    
    return this.http.post<any>('http://localhost:8000/api/mainCenters/store' , data)

  }


  login(data:any){
    return this.http.post<{access_token:string,user:user}>('http://localhost:8000/api/auth/login' , data)

  }

  registerMer(data :FormData){
    return this.http.post('http://localhost:8000/api/merchant/store' , data)
  }
}

