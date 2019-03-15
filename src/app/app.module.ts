import { PagamentoModule } from './page/pagamento/pagamento.module';
import { HomeModule } from './page/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    PagamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
