import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/auth/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "ashutoshkrris"
  password = ""
  errorMessage = "Invalid credentials"
  invalidLogin = false

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService, private basicAuthenticationService: BasicAuthenticationService) { }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['courses'])
    }
    else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthService(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.invalidLogin = false;
        this.router.navigate(['courses'])
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthService(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.invalidLogin = false;
        this.router.navigate(['courses'])
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}
