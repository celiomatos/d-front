import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  private isAuthenticated = false;

  canActivate() {
    if (sessionStorage.getItem('access_token')) {
      this.isAuthenticated = true;
    } else {
      this.router.navigate(['/login']);
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }
}
