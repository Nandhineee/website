import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  error: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(loginform: NgForm) {
    if (this.authService.isValidUser(loginform.value)) {


      this.router.navigate(['/home'], { replaceUrl: true });


      console.log("hello world");
    } else {
      this.error = 'Invalid Credentails!!!';
    }
    console.log(this.error);
  }

};


