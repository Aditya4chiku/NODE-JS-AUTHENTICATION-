import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }
  
registerForm=new FormGroup({
  email:new FormControl(' '),
  password:new FormControl('')
});


Login(form:any){
this._authService.UserLogin(form.value);
console.log(form.value)
}

}
