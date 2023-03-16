import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintainceCenterService } from 'src/app/maintanance/maintaince-center.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  maincenter:any;
  maintenanceForm: FormGroup;
  fileNmae:any;
  data:any;
  constructor(private service: MaintainceCenterService,private router:Router) {
    this.maintenanceForm = new FormGroup({
      center_name: new FormControl(''),
      city: new FormControl(''),
      adress: new FormControl(''),
      img_logo: new FormControl(''),
      img_cover: new FormControl(''),
      start_day: new FormControl(''),
      end_day: new FormControl(''),
      start_time: new FormControl(''),
      end_time: new FormControl(''),
      desc: new FormControl(''),
    });
  }

  ngOnInit(): void {
// console.log(this.maincenter)
    this.service.getmaintainceforspecificuse().subscribe((res: any) => {
  let x=  res.reduce((item:any)=>{
      console.log(item)
    })
    console.log('hi')
      // this.maincenter=res;
    });

  }
  submitMaintenanceForm() {
    let formData = new FormData();
    formData.append('center_name', this.maintenanceForm.value['center_name']);
    formData.append('city', this.maintenanceForm.value['city']);
    formData.append('address', this.maintenanceForm.value['adress']);
    formData.append('img_logo', this.maintenanceForm.value['img_logo']);
    formData.append('img_cover', this.maintenanceForm.value['img_cover']);
    formData.append('start_day', this.maintenanceForm.value['start_day']);
    formData.append('end_day', this.maintenanceForm.value['end_day']);
    formData.append('start_time', this.maintenanceForm.value['start_time']);
    formData.append('end_time', this.maintenanceForm.value['end_time']);
    formData.append('desc',  this.maintenanceForm.value['desc']);
    // formData.append('mainta_id', '1');
    // console.log(this.maintenanceForm.value);

    this.service.postmaintain(formData).subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (err:any) => {
        console.log(err);
      },
    });

this.router.navigate(['dbmaintance']);
  }
  selectimg1(event: any) {
    this.fileNmae = event.target.value;
    console.log(this.fileNmae);
    this.maintenanceForm.get('img_logo')?.setValue(event.target.files[0]);
  }
  selectimg2(event: any) {
     this.fileNmae = event.target.value;
     console.log(this.fileNmae);
     this.maintenanceForm.get('img_cover')?.setValue(event.target.files[0]);

    }

}
