import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import configuration from '../../assets/config.json'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`
        }
      });
    }
    else{
        window.location.href = configuration.loginPage;
    }

    return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
            switch(err.status){
                case 408:
                  return Promise.reject("Aplication TimeOut: " + err.error.Message);
                case 500:
                  return Promise.reject("Internal server error, contact with the administrator");
                case 401:
                  window.location.href = configuration.loginPage;
                  return Promise.reject("No sesion detected, redirect to login");
            }
        })
      );
  }

}