import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { User } from '../../interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  public usuarios: User[];
  public selectedUser: User;
  public cols: { field: string; header: string }[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.cols = [
      { header: 'ID', field: 'id' },
      { header: 'Nombre', field: 'name' },
      { header: 'Usuario', field: 'username' },
      { header: 'Email', field: 'email' },
    ];

    this.dataService
      .getUsers()
      .pipe(first())
      .subscribe({ next: (usuarios) => (this.usuarios = usuarios) });
  }

  onNuevo(): void {
    this.router.navigate(['usuario']);
  }

  onEditar(): void {
    if (!this.selectedUser) return;
    const { id } = this.selectedUser;
    this.router.navigate([`usuario/${id}`]);
  }
}
