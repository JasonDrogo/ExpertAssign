import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NbAuthOAuth2Token, NbAuthResult, NbAuthService, NbLoginComponent, NbTokenService } from '@nebular/auth';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnDestroy {
  private destroy$ = new Subject<void>();
  user ={};
  
  constructor(private authService : NbAuthService, private tokenService : NbTokenService) {
    
   }
public authREsult :any;
  ngOnInit(): void {
  }
  

  login() {
    this.authService.authenticate('google').pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
  
        if(authResult.isSuccess()){
          this.user = authResult.getToken();
        }
      });
     
      console.log(this.user);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    console.log(this.destroy$.subscribe((a:any)=> console.log(a)));
    this.destroy$.complete();
  }
  

}
