import {  Component, OnDestroy } from '@angular/core';
import {  NbAuthResult,NbAuthService } from '@nebular/auth';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  alive: boolean = true;
  constructor(private authService : NbAuthService) {
    
   }

  ngOnInit(): void {
  }
  
   login() {
     
    this.authService.authenticate('google').pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
  
      });
      
     
      
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  

}

