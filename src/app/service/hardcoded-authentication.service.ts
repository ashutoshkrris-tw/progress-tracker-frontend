import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  username = "ashutoshkrris"
  password = "password"

  // constructor() { }

  authenticate(username: string, password: string): boolean {

    if (username === this.username && password === this.password) {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}
