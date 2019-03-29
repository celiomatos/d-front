import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { PagamentoSearch } from 'src/app/page/pagamento/shared/pagamento.dto';
import { TopFiveOrgaos } from '../dto/top-five-orgaos.dto';
import { Orgao } from '../model/orgao.model';
import { Page } from '../shared/page';

@Injectable()
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
