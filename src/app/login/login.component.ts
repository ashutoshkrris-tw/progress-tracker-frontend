import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  handleLogin() {
    if (this.username === "ashutoshkrris" && this.password === "password") {
      this.invalidLogin = false;
      this.router.navigate(['courses'])
    }
    else {
      this.invalidLogin = true;
    }
  }
}
