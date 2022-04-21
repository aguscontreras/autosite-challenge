import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, UsuariosRoutingModule, ButtonModule, TableModule],
})
export class UsuariosModule {}
