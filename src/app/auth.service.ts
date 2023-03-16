import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signUp(registerData:any):Observable<any>{
    return this.http.post('https://route-movies-api.vercel.app/signup',registerData)

  }
  signIn(loginData:any):Observable<any>{
    return this.http.post('https://route-movies-api.vercel.app/signin',loginData)

  }
}
