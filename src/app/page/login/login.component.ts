import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { M6S } from './../../shared/messages';

@Component({
  selector: 'der-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  m6s = M6S;
  formValidation: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    sessionStorage.clear();
    this.formValidation = new FormGroup({
      user: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
  }

  login() {
    const user = this.formValidation.get('user').value;
    const senha = this.formValidation.get('senha').value;
    this.authService.logar(user, senha).subscribe(
      (data: any) => {
        sessionStorage.setItem('access_token', data.access_token);
        this.router.navigate(['/']);
      },
      error => {
        this.snackBar.open(error.error.error, '', {
          duration: 3000,
        });
      }
    );
  }
}
