import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrgaoService } from 'src/app/core/http/orgao.service';
import { MaterialModule } from 'src/app/core/shared/material.module';
import { SelectOptionComponent } from 'src/app/core/shared/select-option/select-option.component';
import { TopFiveOrgaosComponent } from 'src/app/core/shared/top-five-orgaos/top-five-orgaos.component';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';
import { PagamentoSearchComponent } from './pagamento-search/pagamento-search.component';
import { PagamentoService } from './shared/pagamento.service';

const ROUTES: Routes = [
  {
    path: '',
    component: PagamentoListComponent
  }
];

@NgModule({
  declarations: [PagamentoListComponent, PagamentoSearchComponent, TopFiveOrgaosComponent, SelectOptionComponent],
  exports: [TopFiveOrgaosComponent, FormsModule, ReactiveFormsModule],
  entryComponents: [PagamentoSearchComponent],
  providers: [PagamentoService, OrgaoService],
  imports: [CommonModule, RouterModule.forChild(ROUTES), MaterialModule, FormsModule, ReactiveFormsModule]
})
export class PagamentoModule {}
