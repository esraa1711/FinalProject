import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isloading:Subject<boolean>;
  constructor(){
      this.isloading = new Subject<boolean>();
  }
  Show(){
      this.isloading.next(true)
  }
  Hide(){
      this.isloading.next(false)
  }
}
