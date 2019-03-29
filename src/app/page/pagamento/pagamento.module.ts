import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';
import { PagamentoSearchComponent } from './pagamento-search/pagamento-search.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/shared/material.module';
import { PagamentoService } from './shared/pagamento.service';
import { TopFiveOrgaosComponent } from 'src/app/core/shared/top-five-orgaos/top-five-orgaos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',
    component: PagamentoListComponent
  }
];

@NgModule({
  declarations: [PagamentoListComponent, PagamentoSearchComponent, TopFiveOrgaosComponent],
  exports: [TopFiveOrgaosComponent, FormsModule, ReactiveFormsModule],
  entryComponents: [PagamentoSearchComponent],
  providers: [PagamentoService],
  imports: [CommonModule, RouterModule.forChild(ROUTES), MaterialModule, FormsModule, ReactiveFormsModule]
})
export class PagamentoModule {}
