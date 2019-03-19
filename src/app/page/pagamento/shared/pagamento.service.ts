import { ApiService } from 'src/app/core/http/api.service';
import { Pagamento } from './pagamento.model';
import { Page } from 'src/app/core/shared/page';
import { Injectable } from '@angular/core';
import { PagamentoSearch } from './pagamento.dto';

@Injectable()
export class PagamentoService extends ApiService<
  Pagamento,
  Page<Pagamento>,
  PagamentoSearch
> {
  protected getPath(): string {
    return '/pagamentos/';
  }
}
