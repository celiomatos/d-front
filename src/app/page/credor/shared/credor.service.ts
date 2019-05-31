import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Credor } from 'src/app/page/credor/shared/credor.model';
import { Page } from 'src/app/shared/page';
import { TopFiveCredores } from './top-five-credores.model';

@Injectable({ providedIn: 'root' })
export class CredorService extends ApiService<Credor, Page<Credor>, null> {
  protected path(): string {
    return this.basePath() + 'credores/';
  }

  topFive(dateInicial: string, dateFinal: string): Observable<TopFiveCredores[]> {
    let params = new HttpParams();
    params = params.append('dateInicial', dateInicial);
    params = params.append('dateFinal', dateFinal);

    return this.httpClient.get<TopFiveCredores[]>(this.path() + 'top-five/', { params: params });
  }
}
