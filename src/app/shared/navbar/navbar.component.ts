import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

constructor( private auth : AuthService , private serviceCart: CartService){
  this.CartCount = Number(localStorage.getItem("cart"))
  this.islogged = this.auth.isLogged()
  this.auth.getLoggedUser().subscribe(
    (data)=>{
      this.islogged = data
      console.log("change" , data)
    }
  )
  this.serviceCart.cartCount.subscribe((data)=>{
    this.CartCount = data
  })
}
islogged:boolean ;
CartCount:number ; 
ngOnInit(): void{}
Logout(){
  this.auth.logout()

}
}
  

