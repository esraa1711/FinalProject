import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MaintainceCenterService } from 'src/app/maintanance/maintaince-center.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2'
declare var window: any;

@Component({
  selector: 'app-details-maintaince',
  templateUrl: './details-maintaince.component.html',
  styleUrls: ['./details-maintaince.component.css'],
})


export class DetailsMaintainceComponent implements OnInit {
  customer:any
  starrating: any;
  maintaincecenter_data: any;
  formrate: FormGroup;
  id: string = '';
  user: any;
  email: any;
  res: any;
  form!: FormGroup;
  // currentrate: any;
  //   private toaster: ToastrService
  constructor(
    private Activerouter: ActivatedRoute,
    private service: MaintainceCenterService,
    private fb: FormBuilder, private toaasterservice: ToasterService
  ) {

    console.log(this.id)

    this.id = this.Activerouter.snapshot.params['id'];
    this.form = new FormGroup({
      desc: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
      ]),
      // user_id: new FormControl(userid),
      maintenance_id: new FormControl(this.id),
      date: new FormControl(''),
    });
    this.formrate = new FormGroup({
      maintenance_id: new FormControl(this.id),
      comments: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
      ]),
      star_rating: new FormControl(''),
    });
  }

  onsubmit() {
    console.log(this.formrate.value);
    if (
      this.formrate.value.comments == '' ||
      this.formrate.value.star_rating == ''
    ) {
      this.toaasterservice.error('didn,t send ', 'fill  comment');
    }
    else {
      this.service.postrating(this.formrate.value).subscribe((res) => {

        // console.log(this.res);
        this.toaasterservice.sucess('data sent', 'rating send');
        // console.log('sen sucess');
      });
      // }
    }

  }

  // maintaince_rate = 0;
  // currentRate:number=0;
  //get all data
  ngOnInit(): void {
    this.getdetalis()
    this.getrates();
    this.customer = new window.bootstrap.Modal(
      document.getElementById("ratemodal")
    )




  }
  getdetalis() {
    this.service.getDetalis(this.id).subscribe(res => {
      console.log(res)
this.maintaincecenter_data = res.maincenter
console.log(this.maintaincecenter_data)
    })

  }
  getrates() {
    this.service.getrate(this.id).subscribe((res: any) => {
      this.starrating = res;

    });
  }

  // }
  submitBooking() {
    console.log(this.form.value);

      this.service.postBooking(this.form.value).subscribe((res) => {
        // this.toaasterservice.sucess(res, 'booking send');
     
       
      });




 
  }


  
  OPenrate() {
    this.customer.show();
  }


  Close(){
    this.customer.hide();

  }




}
