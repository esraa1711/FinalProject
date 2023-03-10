import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private auth:AuthService){
  this.islogged = this.auth.isLogged()
  this.auth.getLoggedUser().subscribe(
    (data)=>{
      this.islogged = data
      console.log("change" , data)
    }
  )
}
islogged:boolean 
ngOnInit(): void {
  
}
}
