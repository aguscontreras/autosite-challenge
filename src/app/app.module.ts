import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';

/**
 * Primeng
 */

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { UsuarioModule } from './modules/usuario/usuario.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    UsuarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
