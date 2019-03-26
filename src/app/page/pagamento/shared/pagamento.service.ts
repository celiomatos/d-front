import { ApiService } from 'src/app/core/http/api.service';
import { Pagamento } from './pagamento.model';
import { Page } from 'src/app/core/shared/page';
import { Injectable } from '@angular/core';
import { PagamentoSearch } from './pagamento.dto';
import { Observable } from 'rxjs';
import { TopFiveOrgaos } from 'src/app/core/dto/top-five-orgaos.dto';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class PagamentoService extends ApiService<Pagamento, Page<Pagamento>, PagamentoSearch> {
  protected path(): string {
    return this.basePath + 'pagamentos/';
  }

  topFiveOrgaos(dateInicial: string, dateFinal: string): Observable<TopFiveOrgaos[]> {
    const params = new HttpParams();
    params.append('dateInicial', dateInicial);
    params.append('dateFinal', dateFinal);

    return this.httpClient.get<TopFiveOrgaos[]>(this.path() + 'top-five-orgaos/', { params: params });
  }
}
