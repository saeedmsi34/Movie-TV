import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean=false
constructor(private _Router:Router){
let token=localStorage.getItem('token')
if(token){
  this.isLogin=true
}
else{
  this.isLogin=false
}
}
logout(){
  localStorage.removeItem('token')
  this._Router.navigateByUrl('/login')
}
}
