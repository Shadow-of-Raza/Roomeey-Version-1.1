import { Component, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

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
  formState: 'signup' | 'login' = 'signup'; // Change this to display form in front of screen while loding the page.
  switchForm(state: 'signup' | 'login') {
    this.formState = state;
  }
   passwordPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9!@#$%^&*()_+\\-=[\\]{};':\"\\\\|,.<>/?]).{8,64}$";


  constructor(private renderer: Renderer2,
    private dataService: DataService,
    private router: Router
  ) {}

  // NgIf variables
  signupbox: boolean = true;
  otpbox: boolean = false;
  showPassword: boolean;
  phoneOtp: string; 
  otp: string;
  otpvarify: boolean = false;
  isDisable: boolean = false;
  isOTPDisable: boolean = false;
  showNumberErrorMessage = false;

// User Class

user: any = {
  name: '',
  email:'',
  phone: '',
  password: '',
  isOwner: false
};




  
  // This method for signup logic
  onSignup(userForm: NgForm) {
    this.signupbox =  false;
    this.otpbox = true;
  }

  // This method for otp Varification logic
  otpVarify(){

  }

  // This method for signup logic
  onLogin() {
    
  }

//Other methods

  //showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  validateNameInput() {
    const inputValue = this.user.name;
    
    // Use a regular expression to check if the input contains numbers
    const numberRegex = /\d+/;
    const hasNumbers = numberRegex.test(inputValue);
    
    // Update the flag based on whether numbers are found
    this.showNumberErrorMessage = hasNumbers;
  }
}


