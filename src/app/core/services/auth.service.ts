import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthService {

  token: string;

  constructor(protected httpClient: HttpClient) { }

  protected basePath(): string {
    return environment.authUrl;
  }

  public logar(
    username: string,
    password: string
  ) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    return this.httpClient.post(this.basePath(), params.toString());
  }
}
