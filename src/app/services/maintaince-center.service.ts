import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MaintainceCenterService {

  constructor(private Http : HttpClient) { }
  getAllmainceCenters() {
    return this.Http.get('http://localhost:8000/api/mainCenters');
  }
  getDetalis(id:any){
    return this.Http.get('http://localhost:8000/api/mainCenters/${id}');
  }
  postRate(data:any):Observable<any>{
return this.Http.post('http://localhost:8000/api/mainCentersRate',data);
  }
  postBooking(data:any):Observable<any>{
    return this.Http.post('http://localhost:8000/api/mainCenters',data);[{
    
    }]
  }
  getcatogry(catagory:any){
    return this.Http.get(`http://localhost:8000/api/mainCenters/${catagory}`);
  }
  
}
