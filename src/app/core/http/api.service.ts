import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class ApiService<T, D, S> {
  constructor(protected httpClient: HttpClient) {}

  protected basePath(): string {
    return environment.apiUrl;
  }
  protected abstract path(): string;

  findById(id: number): Observable<T> {
    return this.httpClient.get<T>(this.basePath + this.path() + id);
  }

  findAll(search: S): Observable<D> {
    return this.httpClient.post<D>(this.basePath + this.path(), search);
  }

  save(model: T): Observable<T> {
    return this.httpClient.post<T>(this.basePath + this.path(), model);
  }

  update(id: number, model: T): Observable<T> {
    return this.httpClient.put<T>(this.basePath + this.path() + id, model);
  }

  delete(id: number): Promise<T> {
    return this.httpClient
      .delete<T>(this.basePath + this.path() + id)
      .toPromise();
  }
}
