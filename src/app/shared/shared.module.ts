import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { TopFiveCredoresComponent } from '../page/credor/shared/top-five-credores/top-five-credores.component';
import { HomeModule } from '../page/home/home.module';
import { TopFiveOrgaosComponent } from '../page/orgao/shared/top-five-orgaos/top-five-orgaos.component';
import { FiveYearsPagamentosComponent } from '../page/pagamento/shared/five-years-pagamentos/five-years-pagamentos.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectOptionComponent,
    TopFiveOrgaosComponent,
    TopFiveCredoresComponent,
    FiveYearsPagamentosComponent
  ],
  providers: [AuthService],
  declarations: [
    SelectOptionComponent,
    TopFiveOrgaosComponent,
    TopFiveCredoresComponent,
    FiveYearsPagamentosComponent
  ]
})
export class SharedModule { }
