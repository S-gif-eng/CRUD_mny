import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './core/forget/forget.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'signup', component:SignupComponent},
  {path:'forget', component:ForgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
