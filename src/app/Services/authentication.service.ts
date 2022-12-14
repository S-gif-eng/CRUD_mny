
import { Injectable } from '@angular/core';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
loginStatus:boolean=false;
  constructor(private auth:Auth) { }
  login(email:string,password:string)
  {
      return from(signInWithEmailAndPassword(this.auth,email,password));
  }
  logout()
  {
    this.loginStatus=false;
    return this.auth.signOut();
  }

}
