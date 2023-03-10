

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
// import $ from 'jquery';
import { FormBuilder,FormGroup,FormsModule } from '@angular/forms';
import { data } from 'jquery';
import { MaintainceCenterService } from 'src/app/services/maintaince-center.service';
@Component({
  selector:'app-details-maintaince',
  templateUrl: './details-maintaince.component.html',
  styleUrls: ['./details-maintaince.component.css'],
})
export class DetailsMaintainceComponent implements OnInit {
  maintaincecenter_data: any;
  id: string = '';
  form: FormGroup;
  currentrate: any;
  constructor(
    private Activerouter: ActivatedRoute,
    private service: MaintainceCenterService,
    private fb: FormBuilder
  ) {
    this.id = this.Activerouter.snapshot.params['id'];
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      text: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(20),
        Validators.required,
      ]),
    });
  }
  current(current: any) {
    console.log(this.current);
  }
  onsubmit(data: any) {
    console.log(data);
    this.service.postRate(data).subscribe((res) => {
      console.log(res);
    });

  }
  ratingcount=0;
  ratingtotal=0;
  finalrating:any;
  ratingcontrol: any;
  //get all data
  ngOnInit(): void {
    this.service
      .getDetalis(this.id)
      .subscribe((res) => (this.maintaincecenter_data = res));

    // this.maintaincecenter_data=res
    this.ratingcontrol = new FormControl(0);
  }
  rating() {
    this.ratingcount++;
    this.ratingtotal +=this.ratingcontrol?.value;
    // console.log(this.ratingcontrol.value);
  this.finalrating=(this.ratingtotal/this.ratingcount).toFixed(2)//
  }
  submit() {
    console.log(this.form.value);
    this.service.postBooking(this.form.value).subscribe(res=>{
      console.log(res)
    });
  }
}
function rating() {
  throw new Error('Function not implemented.');
}
