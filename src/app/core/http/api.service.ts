import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class ApiService<T, D> {
  constructor(protected httpClient: HttpClient) {}

  protected abstract getPath(): string;

  findById(id: number): Observable<T> {
    return this.httpClient.get<T>(
      environment.apiUrl + this.getPath() + '/' + id
    );
  }

  findAll(page: number = 0, maxLine: number = 100): Observable<D> {
    return this.httpClient.get<D>(
      environment.apiUrl +
        this.getPath() +
        '?page=' +
        page +
        '&count=' +
        maxLine
    );
  }

  save(model: T): Promise<T> {
    return this.httpClient
      .post<T>(environment.apiUrl + this.getPath(), JSON.stringify(model))
      .toPromise();
  }

  update(id: number, model: T): Promise<T> {
    return this.httpClient
      .put<T>(
        environment.apiUrl + this.getPath() + '/' + id,
        JSON.stringify(model)
      )
      .toPromise();
  }

  delete(id: number): Promise<T> {
    return this.httpClient
      .delete<T>(environment.apiUrl + this.getPath() + '/' + id)
      .toPromise();
  }
}
