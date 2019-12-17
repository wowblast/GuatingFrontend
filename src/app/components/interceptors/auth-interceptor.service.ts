import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import config from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    let request = req;

    if (token) {
      this.snackBar.open('Agregando TOKEN a la petición', 'Listo', { duration: 5000 });

      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });

    } else {
      this.snackBar.open('No existe el TOKEN', 'Listo', { duration: 5000 });
      window.location.replace(config.url.loginUrl);
    }

    return next.handle(request);
  }

}
