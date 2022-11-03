import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { async } from 'rxjs/internal/scheduler/async';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status:any=false
  public email:string='';
  public password:string='';
  loginForm!:FormGroup
  submited!:false;
  constructor(private authService:AuthenticationService,private router:Router,private toast:HotToastService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',Validators.required)
      }
 ) }
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
      if(!this.loginForm.valid)
      {
       
        return;
      }
      const {email,password}=this.loginForm.value;
      this.authService.login(email,password).pipe(
        this.toast.observe({
          success:'Logged In successfully',
          loading:'Loading in.....',
          error:'Something went wrong'
        })
      ).subscribe(()=>
      {
         this.router.navigate(['/home'])
         this.authService.loginStatus=true;
      })
  }

}
