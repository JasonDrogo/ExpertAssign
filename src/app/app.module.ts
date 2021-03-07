import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NbThemeModule } from '@nebular/theme';
import {NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType} from '@nebular/auth'
import { HttpClientModule } from '@angular/common/http';
import {keys} from '../assets/env_var';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbAuthModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: keys.credential_id,
          clientSecret: 'sMZARedCo_3gF7QnBIMcsH8f',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            redirectUri: 'http://localhost:4200/landing',
           
          },
          
        }),
      ],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
