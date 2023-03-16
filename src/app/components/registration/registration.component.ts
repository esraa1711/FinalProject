import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';



declare var window: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registration: any;
  customer: any;
  maintenance: any;
  merchant: any;
  login: any;




  customerForm: FormGroup;
  maintenanceForm: FormGroup;
  merchantForm: FormGroup;


  loginForm: FormGroup;
  formData: FormData = new FormData
  ManformData: FormData = new FormData
  // image: any;

  constructor(private services: RegistrationService, private auth: AuthService, private router: Router, private Cartserve: CartService) {

    this.customerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      role: new FormControl('user'),
    })

    this.maintenanceForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      idmc: new FormControl(''),
      idmcfront: new FormControl(''),
      idmcback: new FormControl(''),
      crmcfront: new FormControl(''),
      crmcback: new FormControl(''),
      role: new FormControl('maintenance')

    })
    this.merchantForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      idm: new FormControl(''),
      idmfront: new FormControl(''),
      idmback: new FormControl(''),
      crmfront: new FormControl(''),
      crmback: new FormControl(''),
      role: new FormControl('merchant')
    })

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  submitCustomerForm() {
    console.log(this.customerForm)
    this.services.getdata(this.customerForm.value).subscribe(res => {
      this.auth.setRole(this.merchantForm.value['role'])
    })
  }
  createMer() {
    this.formData.append("name", this.merchantForm.value['name'],)
    this.formData.append("email", this.merchantForm.value['email'],)
    this.formData.append("password", this.merchantForm.value['password'],)
    this.formData.append("phone", this.merchantForm.value['phone'],)
    this.formData.append("city", this.merchantForm.value['city'],)
    this.formData.append("address", this.merchantForm.value['address'],)
    this.formData.append("gender", this.merchantForm.value['gender'],)
    this.formData.append("idm", this.merchantForm.value['idm'],)
    // this.formData.append("idmfront" , this.merchantForm.value['idmfront'], )
    // this.formData.append("idmback" , this.merchantForm.value['idmback'], )
    // this.formData.append("crmfront" , this.merchantForm.value['crmfront'], )
    // this.formData.append("crmback" , this.merchantForm.value['crmback'], )
    this.formData.append("role", this.merchantForm.value['role'],)

    console.log(this.formData.get("idmfront"))
    this.services.StoreMer(this.formData).subscribe(res => {
      alert("success")
      this.auth.setRole(this.merchantForm.value['role'])


    })



  }

  selectImg(event: any) {
    // this.fileNmae = event.target.value
    this.formData.append("idmfront", event.target.files[0])

    // this.merchantForm.get('idmfront')?.setValue(event.target.files[0])
  }


  selectImg2(event: any) {
    // this.fileNmae = event.target.value
    this.formData.append("idmback", event.target.files[0])

  }

  selectImg3(event: any) {
    // this.fileNmae = event.target.value
    this.formData.append("crmfront", event.target.files[0])

  }


  selectImg4(event: any) {
    // this.fileNmae = event.target.value
    this.formData.append("crmback", event.target.files[0])

    // this.merchantForm.get('crmback')?.setValue(event.target.files[0])
  }







  MenCreate() {
    this.ManformData.append("name", this.maintenanceForm.value['name'],)
    this.ManformData.append("email", this.maintenanceForm.value['email'],)
    this.ManformData.append("password", this.maintenanceForm.value['password'],)
    this.ManformData.append("phone", this.maintenanceForm.value['phone'],)
    this.ManformData.append("city", this.maintenanceForm.value['city'],)
    this.ManformData.append("address", this.maintenanceForm.value['address'],)
    this.ManformData.append("gender", this.maintenanceForm.value['gender'],)
    this.ManformData.append("idmc", this.maintenanceForm.value['idmc'],)
    // this.formData.append("idmfront" , this.merchantForm.value['idmfront'], )
    // this.formData.append("idmback" , this.merchantForm.value['idmback'], )
    // this.formData.append("crmfront" , this.merchantForm.value['crmfront'], )
    // this.formData.append("crmback" , this.merchantForm.value['crmback'], )
    this.ManformData.append("role", this.maintenanceForm.value['role'],)

    this.services.StoreMen(this.ManformData).subscribe(res => {
      alert("success")
      this.auth.setRole(this.merchantForm.value['role'])


    })



  }


  selectImgMen(event: any) {
    // this.fileNmae = event.target.value
    this.ManformData.append("idmcfront", event.target.files[0])

    // this.merchantForm.get('idmfront')?.setValue(event.target.files[0])
  }


  selectImgMen2(event: any) {
    // this.fileNmae = event.target.value
    this.ManformData.append("idmcback", event.target.files[0])

  }

  selectImgMen3(event: any) {
    // this.fileNmae = event.target.value
    this.ManformData.append("crmcfront", event.target.files[0])

  }


  selectImgMen4(event: any) {
    // this.fileNmae = event.target.value
    this.ManformData.append("crmcback", event.target.files[0])

    // this.merchantForm.get('crmback')?.setValue(event.target.files[0])
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
        console.log(res.user.name)

        if (res.user.role == "user") {
          this.auth.setRole("user")
          this.router.navigate(["home"]);
        } else if (res.user.role == "maintenance") {
          this.auth.setRole("maintenance")
          this.router.navigate(["dbmaintance"]);
        } else {
          this.auth.setRole("marchant")
          this.router.navigate(["merchant"]);
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
    this.maintenance = new window.bootstrap.Modal(
      document.getElementById("maintenanceModal")
    )
    this.merchant = new window.bootstrap.Modal(
      document.getElementById("merchantModal")
    )

    this.login = new window.bootstrap.Modal(
      document.getElementById("loginModal")
    )
  }
  openModalRegistration() {
    this.registration.show();
  }
  OpenCustomerForm() {
    this.customer.show();
  }
  OpenMaintenanceForm() {
    this.maintenance.show();
  }

  OpenMerchantForm() {
    this.merchant.show();
  }

  openModalLogin() {
    this.login.show()
  }

}

