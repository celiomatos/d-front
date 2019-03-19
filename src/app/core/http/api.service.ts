import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class ApiService<T, D, S> {
  constructor(protected httpClient: HttpClient) {}

  protected abstract getPath(): string;

  findById(id: number): Observable<T> {
    return this.httpClient.get<T>(environment.apiUrl + this.getPath() + id);
  }

  findAll(search: S): Observable<D> {
    return this.httpClient.get<D>(environment.apiUrl + this.getPath(), search);
  }

  save(model: T): Observable<T> {
    return this.httpClient.post<T>(environment.apiUrl + this.getPath(), model);
  }

  update(id: number, model: T): Observable<T> {
    return this.httpClient.put<T>(
      environment.apiUrl + this.getPath() + id,
      model
    );
  }

  delete(id: number): Promise<T> {
    return this.httpClient
      .delete<T>(environment.apiUrl + this.getPath() + id)
      .toPromise();
  }
}
