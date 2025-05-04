import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/entity/user';

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
export class SignInComponent implements OnInit {
  // Controls form state between Signup and Login
  formState: 'signup' | 'login' = 'signup';
  switchForm(state: 'signup' | 'login') {
    this.formState = state;
  }


  constructor(
    private renderer: Renderer2,
    private dataService: DataService,
    private router: Router
  ) {}

  // UI state variables
  signupbox: boolean = true;
  otpbox: boolean = false;
  showPassword: boolean;
  phoneOtp: string = ''; 
  otp: string = '';
  otpvarify: boolean = false;
  isDisable: boolean = false;
  isOTPDisable: boolean = false;
  showNumberErrorMessage = false;
  isChecked = false; 
  isOtpExpired = false;
  isResendDisabled = true;
  countdown: number = 120; // 120-second timer
  timer: any;

  // User Object
  user: any = {
    name: '',
    phone: '',
    password: '',
    isOwner: false
  };
  
    // Login user User Object
    loginUser: any = {
      phone: '',
      password: '',
    };

  onSignup(userForm: NgForm) {
    if (!userForm.valid) {
      alert("Please fill all fields correctly.");
      return;
    }
  
    this.isDisable = true; // Disable button to prevent multiple clicks
  
    this.dataService.signUpUser(this.user).subscribe(
      (response) => {
        console.log("User registered successfully!", response);
        
        if (response) { // Ensure response contains success flag
          this.signupbox = false;
          this.otpbox = true;
           // Store user data in sessionStorage
          sessionStorage.setItem('user', JSON.stringify(response)); 

          this.startOtpTimer(); // Start OTP timer on signup
        } else {
          console.error("Internal server error: Try again after sometime.", response);
          alert("Signup failed due to unexpected response!");
          this.isDisable = false;
        }
      },
      (error) => {
        console.error("Signup Error:", error);
        alert(`Signup failed! Error: ${error.message}`);
        this.isDisable = false;
      }
    );
  }
  

  ngOnInit() {
    this.startOtpTimer(); // Start timer when component loads
  }

  // ✅ Start 120s OTP countdown timer
  startOtpTimer() {
    this.isResendDisabled = true;
    this.isOtpExpired = false;
    this.countdown = 120; // Reset timer

    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.timer);
        this.isResendDisabled = false; // Enable resend button
        this.isOtpExpired = true; // OTP expired warning
      }
    }, 1000);
  }

  // ✅ OTP Verification logic
  otpVarify() {
    if (!this.otp || this.otp.length < 4 || this.otp.length > 6) {
      alert("Invalid OTP. Must be  6 digits.");
      return;
    }

    this.isOTPDisable = true;
    this.dataService.verifyOtp(this.otp).subscribe(
      (response) => {
        console.log("OTP Verified:", response);
        alert("OTP Verified Successfully!");

        this.router.navigate(['/home']); // Redirect to dashboard
      },
      (error) => {
        console.error("OTP Verification Error:", error);
        alert("Invalid OTP! Please try again.");
        this.isOTPDisable = false;
      }
    );
  }

  // ✅ Login logic
  onLogin(userForm: NgForm) { 
    if (!userForm.valid) {
      alert("Please enter valid login details.");
      return;
    }
  
    // Construct request body with phone and password
    let requestBody = {
      phone: this.loginUser.phone,
      password: this.loginUser.password
    };
  
    console.log("Final Request Body:", requestBody);  
  
    this.isDisable = true;
    this.dataService.loginUser(requestBody as User).subscribe(  
      (response) => {
        console.log("Login successful:", response);
        alert('Login successful.');
        
        // Store user data in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(response)); 
  
        // Redirect to the dashboard or homepage
        this.router.navigate(['/home']); 
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid Id or password. Please try again.');
        this.isDisable = false;
      }
    );
  }
  
  // ✅ Resend OTP Function
  resendOtp() {
    this.dataService.signUpUser(this.user).subscribe(
      (response) => {
        console.log('OTP Resent Successfully!', response);
        alert('OTP Resent Successfully!');
        this.startOtpTimer(); // Restart OTP Timer
      },
      (error) => {
        console.error('Error in Resending OTP:', error);
      }
    );
  }

  // ✅ Prevent non-numeric input in OTP field
  preventInvalidOtpInput(event: KeyboardEvent) {
    const allowedChars = /^[0-9]$/;
    const key = event.key;
    if (!allowedChars.test(key) && key !== "Backspace") {
      event.preventDefault();
    }
  }

  // ✅ Prevent pasting non-numeric data in OTP field
  preventPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  // ✅ Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // ✅ Go Back to Signup Form
  goBack() {
    this.signupbox = true;
    this.otpbox = false;
    clearInterval(this.timer); // Stop OTP timer when navigating back
  }

//Other methods
hasInvalidCharError = false;

preventInvalidInput(event: KeyboardEvent) {
    const allowedChars = /^[A-Za-z '-]$/;
    const key = event.key;

    // Allow only letters, space, hyphen, apostrophe, and backspace
    if (!allowedChars.test(key) && key !== "Backspace") {
        event.preventDefault();
        this.hasInvalidCharError = true;
    } else {
        this.hasInvalidCharError = false;
    }
}

validateNameInput() {
    if (this.user.name) {
        // Trim spaces and replace multiple spaces with a single space
        this.user.name = this.user.name.trim().replace(/\s+/g, ' ');

        // Check if special characters or numbers are present
        this.hasInvalidCharError = /[^A-Za-z '-]/.test(this.user.name);
    }
}


// phone number validation 

hasInvalidPhoneError = false;

preventInvalidPhoneInput(event: KeyboardEvent) {
    const allowedChars = /^[0-9]$/;
    const key = event.key;

    // Allow only numbers and backspace
    if (!allowedChars.test(key) && key !== "Backspace") {
        event.preventDefault();
        this.hasInvalidPhoneError = true;
    } else {
        this.hasInvalidPhoneError = false;
    }
}

// Prevent pasting invalid characters
preventInvalidPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text') || '';
    if (!/^[6-9]\d{9}$/.test(pastedData)) {
        event.preventDefault();
        this.hasInvalidPhoneError = true;
    } else {
        this.hasInvalidPhoneError = false;
    }
}

// Validate Phone Number Format
validatePhoneNumber() {
    if (this.user.phone) {
        // Remove any accidental spaces
        this.user.phone = this.user.phone.trim();

        // Ensure it's exactly 10 digits and starts with 6-9
        this.hasInvalidPhoneError = !/^[6-9]\d{9}$/.test(this.user.phone);
    }
}
  

}


