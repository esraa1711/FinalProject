import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
constructor( private auth : AuthService){
  this.islogged = this.auth.isLogged()
  this.auth.getLoggedUser().subscribe(
    (data)=>{
      this.islogged = data
      console.log("change" , data)
    }
  )
}
islogged:boolean 
ngOnInit(): void{
  
}
Logout(){
  this.auth.logout()

}
  





}
