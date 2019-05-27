import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Credor } from 'src/app/page/credor/shared/credor.model';
import { Page } from 'src/app/shared/page';

@Injectable({ providedIn: 'root' })
export class CredorService extends ApiService<Credor, Page<Credor>, null> {
  protected path(): string {
    return this.basePath() + 'credores/';
  }
}
