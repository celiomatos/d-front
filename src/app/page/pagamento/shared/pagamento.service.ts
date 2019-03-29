import { ApiService } from 'src/app/core/http/api.service';
import { Pagamento } from './pagamento.model';
import { Page } from 'src/app/core/shared/page';
import { Injectable } from '@angular/core';
import { PagamentoSearch } from './pagamento.dto';
import { Observable } from 'rxjs';
import { TopFiveOrgaos } from 'src/app/core/dto/top-five-orgaos.dto';
import { HttpParams } from '@angular/common/http';
import { Orgao } from 'src/app/core/model/orgao.model';

@Injectable()
export class PagamentoService extends ApiService<Pagamento, Page<Pagamento>, PagamentoSearch> {
  protected path(): string {
    return this.basePath() + 'pagamentos/';
  }

  topFiveOrgaos(dateInicial: string, dateFinal: string): Observable<TopFiveOrgaos[]> {
    let params = new HttpParams();
    params = params.append('dateInicial', dateInicial);
    params = params.append('dateFinal', dateFinal);

    return this.httpClient.get<TopFiveOrgaos[]>(this.path() + 'top-five-orgaos/', { params: params });
  }

  findAllOrgaos(
    page: number = 0,
    count: number = 5,
    order: string = 'ASC',
    sortProperty: string = 'nome'
  ): Observable<Page<Orgao>> {
    return this.httpClient.get<Page<Orgao>>(
      this.path() +
        'find-all-orgaos' +
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
}
