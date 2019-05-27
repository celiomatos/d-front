import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      setHeaders: this.getHeader()
    });

    return next.handle(req);
  }

  private getHeader() {
    const accessToken = sessionStorage.getItem('access_token');

    if (accessToken) {
      return {
        Authorization: 'bearer ' + accessToken,
        'Content-Type': 'application/json'
      };
    } else {
      return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('admin:admin1234')
      };
    }
  }
}
