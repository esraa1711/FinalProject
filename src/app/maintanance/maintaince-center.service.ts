import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MaintainceCenterService {
  constructor(private Http: HttpClient) {}
  getAllmainceCenters(page: number = 1) {
    return this.Http.get(`http://localhost:8000/api/mainCenters?page=${page}`);
  }
  getDetalis(id: any) {
    return this.Http.get<{maincenter:any}>(`http://localhost:8000/api/mainCenters/${id}`);
  }
  //   postRate(data:any):Observable<any>{
  // return this.Http.post('http://localhost:8000/api/mainCentersRate',data);
  //   }
  postBooking(data: any): Observable<any> {
    return this.Http.post('http://localhost:8000/api/Booking/store', data);
  }
  getcatogry(catagory: any) {
    return this.Http.get(`http://localhost:8000/api/cityfilter/${catagory}`);
  }
  getselect() {
    return this.Http.get('http://localhost:8000/api/citycat');
  }
  postrating(data: any) {
    return this.Http.post(
      'http://localhost:8000/api/mainCentersRate/store',
      data
    );
  }
  getrate(id: any) {
    return this.Http.get(`http://localhost:8000/api/web/${id}`);
  }
  getbooking() {
    return this.Http.get('http://localhost:8000/api/Booking');
  }
  getusers() {
    return this.Http.get('http://localhost:8000/api/Users');
  }
  postmaintain(data: any) {
    // return this.Http.post(http://localhost:8000/api/mainCenters/store/${id})
    // console.log('teeeeeeeeeeeeeeeest', data);
    return this.Http.post('http://localhost:8000/api/mainCentersUpdate', data);
  }
  deletedata(id: any) {
    return this.Http.delete(
       `http://localhost:8000/api/mainCenters/delete/${id}`);
  }
  restoredata() {
    return this.Http.get('http://localhost:8000/api/mainCenters/archive');
  }
  restore(id:any){
 return   this.Http.get(`http://localhost:8000/api/mainCenters/restore/${id}`);
  }
  getmaintainceforspecificuse(){
    return this.Http.get('http://localhost:8000/api/mainCenters/Usermain');
  }
}