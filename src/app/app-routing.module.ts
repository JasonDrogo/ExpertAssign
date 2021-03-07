import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './authGuard/authguard.service';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  {path :'',component : LoginComponent},
  {path : 'login',component : LoginComponent},
  {path: 'landing',component : LandingComponent ,canActivate: [AuthguardService]},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
