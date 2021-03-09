import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import {  NbAuthOAuth2Token, NbAuthResult, NbAuthService, NbLoginComponent, NbTokenService } from '@nebular/auth';
import { concatAll, takeUntil, takeWhile } from 'rxjs/operators';
import { UserService } from 'src/app/Service/user.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection : ChangeDetectionStrategy.Default,
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends NbLoginComponent  implements OnDestroy {
  private destroy$ = new Subject<void>();
  alive: boolean = true;
  token: NbAuthOAuth2Token;
  
  constructor(private authService : NbAuthService, router: Router, cd : ChangeDetectorRef) {
  super(authService,{},cd,router);
    

      
   }

  ngOnInit(): void {
  }
  
   login() {
     
    // this.authService.authenticate('google',{}).pipe(takeUntil(this.destroy$))
    //   .subscribe((authResult: NbAuthResult) => {
  
    //   });
      // this.authService.authenticate('google',{})
      // .pipe().subscribe((authResult: NbAuthResult) => { 
       
      //   if (authResult.isSuccess() && authResult.getRedirect()) {
        
      //     sessionStorage.setItem('token', this.token.getPayload()['access_token']);
          this.router.navigate(['/landing'])
      //   }
      // });
     
      
  }

  ngOnDestroy(): void {
console.log("Inside destroy");
this.authService.getToken().subscribe((a:any)=> console.log(a));
    this.destroy$.next();
    this.destroy$.complete();
  }
  

}
