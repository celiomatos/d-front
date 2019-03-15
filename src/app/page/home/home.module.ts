import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MaterialModule]
})
export class HomeModule {}
