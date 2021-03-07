import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getUserInformation(access_token : string):Observable<any>{
    return this.http.get<any>(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
  }
}
