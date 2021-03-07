import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
a : any ;
  constructor(private authService : NbAuthService,private router : Router) { }
  canActivate(){
    this.a = this.isTokenPresent();
    return this.a;
    

  
}

isTokenPresent(){
  this.authService.getToken().subscribe((tokenPayload:NbAuthSimpleToken)=>{
    if(tokenPayload.getPayload() !== null){
return true;
    }
    else{
      this.router.navigate(['/login']);
    }
  });
}
}
