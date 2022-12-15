import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = 'ashutoshkrris'
    const password = 'password'
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const request = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
