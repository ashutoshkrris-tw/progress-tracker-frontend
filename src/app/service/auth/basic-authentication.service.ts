import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  username = "ashutoshkrris"
  password = "password"

  authenticate(username: string, password: string): boolean {

    if (username === this.username && password === this.password) {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    } else {
      return false;
    }
  }

  createBasicAuthenticationHttpHeader(username: string, password: string): string {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  executeAuthService(username: string, password: string) {
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader(username, password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      'http://localhost:8080/basicauth', { headers }
    ).pipe(
      map(
        data => {
          sessionStorage.setItem("authenticatedUser", username)
          return data;
        }
      )
    )
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem("authenticatedUser")
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}


export class AuthenticationBean {
  constructor(public message: string) { }
}
