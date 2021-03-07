
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  NbAuthResult, NbAuthService} from '@nebular/auth';

import { takeWhile } from 'rxjs/operators';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  alive = true;
  UserInformation : Array<string> =[];
  userInfoObject : any;
  constructor(private authService: NbAuthService,private getUser : UserService,private router : Router) {
    this.userInfoFunction();
      
   }




   userInfoFunction(){
    this.authService.authenticate('google')
    .pipe(takeWhile(() => this.alive))
    .subscribe((authResult: NbAuthResult) => {
      if (authResult.isSuccess() && authResult.getRedirect()) {
        this.getUser.getUserInformation(authResult.getResponse()['access_token']).subscribe((userInfo:any)=>{
         this.UserInformation = [...Object.keys(userInfo)];
         this.userInfoObject = userInfo;
        })
      }
    });
   }

   Logout(){
     this.authService.logout('google');
     this.router.navigate(['/login']);
   }
   
  ngOnInit(): void {
    
  }
  

}
