import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import config from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';

        if (error instanceof ErrorEvent) {
          errorMessage = `Client-side error: ${error.message}`;
        } else {
          switch (error.status) {
            case 401:
              window.location.replace(config.url.loginUrl);
              break;
            case 404:
              this.snackBar.open('404 Recurso no encontrado', 'Listo', { duration: 5000 });
              break;
            case 408:
              this.snackBar.open('408 Tiempo de espera agotado', 'Listo', { duration: 5000 });
              break;
            case 500:
              this.snackBar.open('500 Error interno del servidor', 'Listo', { duration: 5000 });
              break;
            default:
              this.snackBar.open('Código HTTP ' + error.status, 'Listo', { duration: 5000 });
              break;
          }
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        
        return throwError(errorMessage);
      })
    );
  }

}
