import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Page } from 'src/app/shared/page';
import { PagamentoSearch } from './pagamento.dto';
import { Pagamento } from './pagamento.model';

@Injectable({ providedIn: 'root' })
export class PagamentoService extends ApiService<Pagamento, Page<Pagamento>, PagamentoSearch> {
  protected path(): string {
    return this.basePath() + 'pagamentos/';
  }

  excell(search: PagamentoSearch) {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    return this.httpClient.post(this.path() + 'pagamentos-to-excell/', search, {
      headers: headers,
      responseType: 'blob'
    });
  }

  sumPagamentoValor(search: PagamentoSearch): Observable<number> {
    return this.httpClient.post<number>(this.path() + 'sum-pagamento-valor/', search);
  }
}
