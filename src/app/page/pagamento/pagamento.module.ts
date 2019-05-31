import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';
import { PagamentoSearchComponent } from './pagamento-search/pagamento-search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagamentoListComponent
  }
];

@NgModule({
  declarations: [
    PagamentoListComponent,
    PagamentoSearchComponent

  ],
  entryComponents: [PagamentoSearchComponent],
  imports: [RouterModule.forChild(ROUTES), SharedModule]
})
export class PagamentoModule { }
