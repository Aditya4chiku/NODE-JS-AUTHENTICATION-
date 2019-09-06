import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://localhost:3000/user/register"
  private url1="http://localhost:3000/user/login"
  constructor(private _http:HttpClient) { }
 

  registerUser(user:any){
     return this._http.post(this.url ,user).subscribe(data=>{
console.log(data);
     },
     err=>{
       console.log(err);
     })
  }

  UserLogin(LoginUser:any){

let obj={email:LoginUser.email,password:LoginUser.password}

    console.log(LoginUser.value)
  return this._http.post(this.url1,obj).subscribe(data=>{
      console.log(data);

  }
  )
  }

}
