import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 ngOnInit(){

 }
 constructor(private _authService:AuthService){}
 
registerForm=new FormGroup({
  email:new FormControl('aa'),
  password:new FormControl('')
});

onSubmit(form:any)
{
  this._authService.registerUser(form.value);
console.log(form.value)

}


}
