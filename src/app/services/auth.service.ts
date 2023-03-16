import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import {ActivatedRoute, Router} from '@angular/router';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  // loggedUser:Subject<user> =new Subject<user>()
  isLoggedUser:Subject<boolean> =new Subject<boolean>()

  constructor(private router: Router ) { }
  setLoggedUser(User:boolean){
    this.isLoggedUser.next(User)
  }
  isLogged():boolean{
     if(localStorage.getItem("token")== null)
     return false
     else
     return true
  }
  getLoggedUser(){
    return this.isLoggedUser.asObservable();
  }
  getToken():string{
    return localStorage.getItem("token")??""
  }
  setToken(token:string){
    localStorage.setItem("token",token)
    console.log(token)
  }
  getRole():string{
    return localStorage.getItem("role")??""
  }
  setRole(role:string){
    localStorage.setItem("role",role)
  }
  logout(){
    console.log("log out")
    localStorage.removeItem("token")
    localStorage.removeItem("cart")
    localStorage.removeItem('user')
    this.router.navigate(['home'])
    this.setLoggedUser(false)

  }
}


export class user{
  id:number= 0;
  name:string = "";
  email:string = "";
  password:string= "";
  city:string= "";
  address:string= "";
  gender:string= "";
  phone:string= "";
  img:string= "";
  role:string= "";
}