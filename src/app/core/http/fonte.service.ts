import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Page } from '../shared/page';
import { Fonte } from './../model/fonte.model';

@Injectable()
export class FonteService extends ApiService<Fonte, Page<Fonte>, null> {
  protected path(): string {
    return this.basePath() + 'fontes/';
  }
}
