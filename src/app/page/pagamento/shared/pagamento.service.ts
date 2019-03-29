import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Page } from 'src/app/core/shared/page';
import { PagamentoSearch } from './pagamento.dto';
import { Pagamento } from './pagamento.model';

@Injectable()
export class PagamentoService extends ApiService<Pagamento, Page<Pagamento>, PagamentoSearch> {
  protected path(): string {
    return this.basePath() + 'pagamentos/';
  }
}
