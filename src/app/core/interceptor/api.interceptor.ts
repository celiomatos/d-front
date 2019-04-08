import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      setHeaders: this.getHeader()
    });

    return next.handle(req);
  }

  private getHeader() {
    const token = '835b0bf0-8299-41f7-8f21-34ba99747065'; //'c3ada026-bd9f-4519-a66b-d4036b19736f';

    if (token) {
      return {
        Authorization: 'bearer ' + token,
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
