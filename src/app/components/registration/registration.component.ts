import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';
import {ActivatedRoute, Router} from '@angular/router';



declare var window: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registration: any;
  customer : any ;
  maintenance:any;
  merchant:any;
  login: any;

 


  customerForm: FormGroup;
  maintenanceForm: FormGroup;
  merchantForm: FormGroup;


  loginForm: FormGroup;
  image: any;

  constructor(private services: RegistrationService, private auth: AuthService , private router: Router ) {

    this.customerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      role : new FormControl('user'),
    })

    this.maintenanceForm= new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      idmc :new FormControl(''),
      idmcfront : new FormControl(''),
      idmcback : new FormControl(''),
      crmcfront : new FormControl(''),
      crmcback : new FormControl(''),
      role : new FormControl('maintenance')

    })
    this.merchantForm= new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      idm :new FormControl(''),
      idmfront : new FormControl(''),
      idmback : new FormControl(''),
      crmfront : new FormControl(''),
      crmback : new FormControl(''),
      role : new FormControl('merchant')
    })


    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  submitCustomerForm(){
    console.log(this.customerForm)
    this.services.getdata(this.customerForm.value).subscribe(res=>{

    })
  }

  submitMaintenanceForm(){
    console.log(this.maintenanceForm)
    this.services.getdata(this.maintenanceForm.value).subscribe(res=>{})


  }

  submitMerchantForm(){
    this.services.getdata(this.merchantForm.value).subscribe(res=>{})

    console.log(this.merchantForm)

  }
  // submitCustomerForm(data: FormGroup, image: any) {
  //   let form = new FormData();
  //   for (const key in data.value) {
  //     if (key == "idmcback" || key =="crmcfront" || key =="crmcback" || key == "idmcback" )  {
  //       form.append(key, image.files[0])
  //     }
  //     else {
  //       form.append(key, data.get(key)?.value)
  //     }
  //   }

  
  //   this.services.getdata(form).subscribe({
      // next:(res) => console.log(res),
      // error:(eror) => console.log (eror)
  //   })
  //   console.log(this.customerForm)
  // }
  submitloginForm() {
    console.log(this.loginForm)
    this.services.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.auth.setLoggedUser(true)
    console.log("log in")

        this.auth.setToken(res.access_token)
        console.log(res.user)
        console.log(res.access_token)
        console.log(res.user.role)
        if (res.user.role == "user"){
          this.router.navigate(["home"]);

        } else if(res.user.role  == "maintenance"){
          window.location.href = 'http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=spare_parts&table=users';


        }else if (res.user.role  == "marchant"){
          window.location.href = 'https://github.com/abdoaswe/spare';


        }else{
          window.location.href = 'http://localhost:62741/';

        }

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {

    this.registration = new window.bootstrap.Modal(
      document.getElementById("registrationModal")
    )

    this.customer = new window.bootstrap.Modal(
      document.getElementById("customerModal")
    )
    this.maintenance=new window.bootstrap.Modal(
      document.getElementById("maintenanceModal")
    )
    this.merchant=new window.bootstrap.Modal(
      document.getElementById("merchantModal")
    )

    this.login = new window.bootstrap.Modal(
      document.getElementById("loginModal")
    )
  }
  openModalRegistration() {
    this.registration.show();
  }
  OpenCustomerForm(){
    this.customer.show();
  }
  OpenMaintenanceForm(){
    this.maintenance.show();
  }

  OpenMerchantForm(){
    this.merchant.show();
  }

  openModalLogin() {
    this.login.show()
  }

}

