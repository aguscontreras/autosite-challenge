import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
  ],
})
export class UsuarioModule {}
