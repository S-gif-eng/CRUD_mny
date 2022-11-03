import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email:string='';
  public password:string='';
  loginForm!:FormGroup
  submited!:false;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',Validators.required)
      }
 )
  }
  get Eml()
  {
   return this.loginForm.get('email')
  }
  get pswd()
  {
    return this.loginForm.get('password')
  }

  onSubmit()
  {

  }
}
