import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  username = "ashutoshkrris"
  password = "password"

  authenticate(username: string, password: string): boolean {

    if (username === this.username && password === this.password) {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      return true;
    } else {
      return false;
    }
  }

  executeAuthService(username: string, password: string) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`, { headers }
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          return data;
        }
      )
    )
  }

  executeJWTAuthService(username: string, password: string) {

    return this.http.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
      map(
        response => {
          sessionStorage.setItem(AUTHENTICATED_USER, username)
          sessionStorage.setItem(TOKEN, `Bearer ${response.token}`)
          return response;
        }
      )
    )
  }

  getAutheticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAutheticatedToken() {
    if (this.getAutheticatedUser())
      return sessionStorage.getItem(TOKEN)
    return null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER)
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}


export class AuthenticationBean {
  constructor(public message: string) { }
}
