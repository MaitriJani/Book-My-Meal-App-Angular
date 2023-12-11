import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup | undefined;

  errorMessage :string;

    constructor(
      private service: AuthService,
      private fb: FormBuilder,
      private router: Router,
      private snackbar:MatSnackBar
    ) { }

      ngOnInit(){
        this.loginForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
        })
      }

login(){
  console.log(this.loginForm.value);
  this.service.login(
    this.loginForm.get(['email'])!.value,
    this.loginForm.get(['password'])!.value
    ).subscribe(
      (Response) => {
    console.log(Response);
      if(StorageService.isEmployeeLoggedIn()){
        this.router.navigateByUrl("employee/booking");
      } else if (StorageService.isAdminLoggedIn){
        this.router.navigateByUrl("admin/dashboard");
      }
  },
  error => {
    if(error.status === 403){
      this.errorMessage = "Invalid email or password";
      // this.snackbar.open("Invalid email or password", "Close", {
      //   duration: 5000
      // });
    }
   else if(error.status === 406){
      this.snackbar.open("User is not active","Close", {
        duration: 5000
      });
      // this.errorMessage = "User is not active";

      } else {
        this.snackbar.open("Bad credentials", "Close", {
          duration: 5000
        });
      // this.errorMessage = "User is not active";

      }

      this.snackbar.open(this.errorMessage, "Close");
    }
    );
  }
}

