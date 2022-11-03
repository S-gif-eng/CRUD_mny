import { Component } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminCrud';
  status:boolean=false;
  constructor(public authService:AuthenticationService)
  {
  }
  ngOnInit() {
    
    this.status=this.authService.loginStatus;
  }
}
