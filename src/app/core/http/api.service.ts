import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';

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

  search(search: S): Observable<D> {
    return this.httpClient.post<D>(this.path() + '/search/', search);
  }

  findByNome(
    nome: string,
    page: number = 0,
    count: number = 5,
    order: string = 'ASC',
    sortProperty: string = 'nome'
  ): Observable<D> {
    return this.httpClient.get<D>(
      this.path() +
        'find-by-nome/' +
        nome +
        '?page=' +
        page +
        '&count=' +
        count +
        '&order=' +
        order +
        '&sortProperty=' +
        sortProperty
    );
  }

  findAll(
    page: number = 0,
    count: number = 5,
    order: string = 'ASC',
    sortProperty: string = 'nome'
  ): Observable<D> {
    return this.httpClient.get<D>(
      this.path() +
        'find-all/' +
        '?page=' +
        page +
        '&count=' +
        count +
        '&order=' +
        order +
        '&sortProperty=' +
        sortProperty
    );
  }

  save(model: T): Observable<T> {
    return this.httpClient.post<T>(this.basePath + this.path(), model);
  }

  update(id: number, model: T): Observable<T> {
    return this.httpClient.put<T>(this.basePath + this.path() + id, model);
  }

  delete(id: number): Promise<T> {
    return this.httpClient.delete<T>(this.basePath + this.path() + id).toPromise();
  }
}
