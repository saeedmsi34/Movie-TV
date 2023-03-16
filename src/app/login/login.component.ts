import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loginForm: FormGroup = new FormGroup({
    "email": new FormControl(null, [Validators.required, Validators.email]),
    "password": new FormControl(null, [Validators.required, Validators.pattern(/^[a-z][0-9]{3}$/)]),
  })

  submitloginForm() {
    if (this.loginForm.invalid) {
      return

    }
    this._AuthService.signIn(this.loginForm.value).subscribe((response) => {
      if (response.message == 'success') {
        localStorage.setItem('token',response.token)
      this._Router.navigateByUrl('/home')
      }
      else {
        alert(response.message)
      }

    })
  }
  constructor(private _AuthService: AuthService,private _Router:Router) {

  }
 }
