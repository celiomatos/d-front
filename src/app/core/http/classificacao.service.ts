import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Page } from '../shared/page';
import { Classificacao } from './../model/classificacao.model';

@Injectable()
export class ClassificacaoService extends ApiService<Classificacao, Page<Classificacao>, null> {
  protected path(): string {
    return this.basePath() + 'classificacoes/';
  }
}
