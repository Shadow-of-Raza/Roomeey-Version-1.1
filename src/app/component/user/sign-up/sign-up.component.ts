import { Component, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private renderer: Renderer2,
    private dataService: DataService,
    private router: Router
  ) {}

  //==========================================================================//
  //                              User Sign Up                                //
  //==========================================================================//
  showPassword = false;


  user: any = {
    name: '',
    email:'',
    phone: '',
    password: ''
  };

  phoneOtp: string; 
  otp: string;

  otpbox: boolean = false;
  otpvarify: boolean = false;
  isDisable: boolean = false;
  isOTPDisable: boolean = false;
  // isModalOpen: boolean = false;
  // signupform:boolean = true;


  // Method to reset the form and variables
  // resetForm(): void {
  //   this.user = { name: '', phone: '', password: '' };
  //   this.otp = '';
  //   this.otpbox = false;
  //   this.otpvarify = false;
    
  // }

  // Handle sign-up form submission
  onSubmit(userForm: NgForm) {
    
    this.otpvarify = true;
    this.isDisable = true;
    this.dataService.signUpUser(this.user).subscribe(
      (response: any) => {
        alert('Successfully Registered, check your phone for OTP...');
        console.log('User Registered Successfully...', this.user);
        this.otpbox = true;
        
      },
      (error: any) => {
        console.error('Registration Error:', error);
        this.otpbox = false;
  
        if (error.status === 400) {
          alert('Registration Failed: Invalid data provided.');
          // userForm.resetForm(); // Reset the form on each invalid submission
        } else {
          alert('Registration Failed: An error occurred.');
          // userForm.resetForm(); // Reset the form on each An error occurred
        }
  
        // Allow the user to re-submit by re-enabling the form and disabling OTP view
        // this.isDisable = false;
        // this.otpvarify = false;
      }
    );
  }
  

  // Handle OTP verification
  onSubmitotp(userForm: NgForm): void {
    const phoneOtp = this.otp;
    this.isOTPDisable=true;
    this.dataService.verifyOtp(phoneOtp).subscribe(
      (responseotp: any) => {
        if (responseotp) {
          alert('OTP verified successfully.');
          // this.signup = false; 
          this.router.navigate(['/sign-in']);
        } else {
          alert('Invalid OTP');
          console.log("Varified failed...");
          this.router.navigate(['/sign-up']);
        }
      }
    );
  }
  showNumberErrorMessage = false; // Flag to control when to show the number error message

  validateNameInput() {
    const inputValue = this.user.name;
    
    // Use a regular expression to check if the input contains numbers
    const numberRegex = /\d+/;
    const hasNumbers = numberRegex.test(inputValue);
    
    // Update the flag based on whether numbers are found
    this.showNumberErrorMessage = hasNumbers;
  }



  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
}
