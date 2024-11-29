import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],

})
export class SignInComponent {


  formState: 'signup' | 'login' = 'login'; 



  switchForm(state: 'signup' | 'login') {
    this.formState = state;
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  
  // This method for signup logic
  onSignup() {
    
  }

  // This method for otp Varification logic
  otpVarify(){

  }

  // This method for signup logic
  onLogin() {
    
  }

}