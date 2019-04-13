import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Orgao } from 'src/app/page/orgao/shared/orgao.model';
import { PagamentoSearch } from 'src/app/page/pagamento/shared/pagamento.dto';
import { Page } from 'src/app/shared/page';
import { TopFiveOrgaos } from './top-five-orgaos.model';

@Injectable({ providedIn: 'root' })
export class OrgaoService extends ApiService<Orgao, Page<Orgao>, PagamentoSearch> {
  protected path(): string {
    return this.basePath() + 'orgaos/';
  }

  topFiveOrgaos(dateInicial: string, dateFinal: string): Observable<TopFiveOrgaos[]> {
    let params = new HttpParams();
    params = params.append('dateInicial', dateInicial);
    params = params.append('dateFinal', dateFinal);

    return this.httpClient.get<TopFiveOrgaos[]>(this.path() + 'top-five/', { params: params });
  }
}
