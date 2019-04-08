import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Credor } from '../model/credor.model';
import { Page } from '../shared/page';

@Injectable()
export class CredorService extends ApiService<Credor, Page<Credor>, null> {
  protected path(): string {
    return this.basePath() + 'credores/';
  }
}
