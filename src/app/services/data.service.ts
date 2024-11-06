import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  private userApiUrl = `http://localhost:8080/api/user`;
  private roomApiUrl = `http://localhost:8080/api/room`;

  // User

  signUpUser(userData: User): Observable<any> {
    return this.http.post(this.userApiUrl +`/registerUser`, userData);
  }

  verifyOtp(phoneOtp: string): Observable<any> {
    return this.http.get(this.userApiUrl +`/verifyUser/${phoneOtp}`)
  }
  
  loginUser(loginRequest:User) : Observable<any>{
    return this.http.post(this.userApiUrl +`/loginUser`, loginRequest);
  }

}
