import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Page } from 'src/app/shared/page';
import { Fonte } from './fonte.model';

@Injectable({ providedIn: 'root' })
export class FonteService extends ApiService<Fonte, Page<Fonte>, null> {
  protected path(): string {
    return this.basePath() + 'fontes/';
  }
}
