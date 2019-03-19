import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';
import { PagamentoSearchComponent } from './pagamento-search/pagamento-search.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/shared/material.module';
import { PagamentoService } from './shared/pagamento.service';

const ROUTES: Routes = [
  {
    path: '',
    component: PagamentoListComponent
  }
];

@NgModule({
  declarations: [PagamentoListComponent, PagamentoSearchComponent],
  entryComponents: [PagamentoSearchComponent],
  providers: [PagamentoService],
  imports: [CommonModule, RouterModule.forChild(ROUTES), MaterialModule]
})
export class PagamentoModule {}
