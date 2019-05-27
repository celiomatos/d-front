import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiInterceptor } from 'src/app/core/interceptors/api.interceptor';
import { MaterialModule } from 'src/app/shared/material.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptor,
        multi: true
      }
    ]
  ]
})
export class HomeModule {}
