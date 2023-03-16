import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toaster: ToastrService) {}
  sucess(message: any, header: any) {
    this.toaster.success(message, header);
  }
  error(error: any, header: any) {
    this.toaster.error(error, header);
  }
}