
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NbAuthOAuth2Token, NbAuthResult, NbAuthService, NbLoginComponent, NbTokenService} from '@nebular/auth';

import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent  implements OnInit {
  UserInformation : Array<string> =[];
  userInfoObject : any ={};
  show : boolean = false;
  constructor(private authService: NbAuthService,private getUser : UserService,private router : Router) {
   this.authService.isAuthenticated().subscribe((authenticated : boolean)=>{
if(!authenticated){
  this.auethenticate();
}
else {

 if( sessionStorage.getItem('token') != null){

this.setUserInformation(JSON.parse(sessionStorage.getItem('token')));

 }
 else{
  this.getUserInformation();
 }
}

   })
  
  }

   auethenticate(){
    
    this.authService.authenticate('google').subscribe((authResult : NbAuthResult)=>{
      if(authResult.isSuccess() && authResult.getRedirect()){
        this.getUserInformation();
      }


    })
     
  
   }
   getUserInformation(){
     
     this.authService.getToken().subscribe((authToken : NbAuthOAuth2Token)=>{
    this.getUser.getUserInformation(authToken.getPayload()['access_token']).subscribe((userInfo : Object) =>{
      sessionStorage.setItem('token',JSON.stringify(userInfo));
      this.setUserInformation(userInfo);
    });
   });
  }


  setUserInformation(token : any){
    this.UserInformation = [...Object.keys(token)];
    this.userInfoObject = token;
    this.show = true;
  }


   Logout(){
     this.authService.logout('google');
    sessionStorage.clear();
     this.router.navigate(['/']);
   }
   
  ngOnInit(): void {
    
  }
  

}
