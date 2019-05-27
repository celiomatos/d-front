import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Page } from 'src/app/shared/page';
import { Classificacao } from './classificacao.model';

@Injectable({ providedIn: 'root' })
export class ClassificacaoService extends ApiService<Classificacao, Page<Classificacao>, null> {
  protected path(): string {
    return this.basePath() + 'classificacoes/';
  }
}
