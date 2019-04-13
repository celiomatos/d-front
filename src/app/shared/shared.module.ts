import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from '../page/home/home.module';
import { TopFiveOrgaosComponent } from '../page/orgao/shared/top-five-orgaos/top-five-orgaos.component';
import { AuthService } from './../core/http/auth.service';
import { MaterialModule } from './material.module';
import { SelectOptionComponent } from './select-option/select-option.component';

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
    SelectOptionComponent
  ],
  providers: [AuthService],
  declarations: [
    SelectOptionComponent,
    TopFiveOrgaosComponent]

})
export class SharedModule { }
