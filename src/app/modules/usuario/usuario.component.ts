import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs';
import { User } from '../../interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  providers: [MessageService],
})
export class UsuarioComponent implements OnInit {
  public usuario: User;
  public form: FormGroup;
  public submitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: DataService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.getIdUsuario();
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        city: [''],
        zipcode: [''],
      }),
    });
  }

  get f() {
    return this.form.controls;
  }

  setDataUsuario(): void {
    if (!this.usuario) return;

    this.form.patchValue({
      name: this.usuario.name,
      username: this.usuario.username,
      email: this.usuario.email,
      address: {
        street: this.usuario.address?.street,
        city: this.usuario.address?.city,
        zipcode: this.usuario.address?.zipcode,
      },
    });
  }

  getIdUsuario(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.dataService
        .getUserById(id)
        .pipe(first())
        .subscribe({
          next: (usuario) => {
            this.usuario = usuario;
            this.setDataUsuario();
          },
        });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    const user: User = { ...this.form.value };
    this.dataService
      .addUser(user)
      .pipe(first())
      .subscribe({
        next: (usuario) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Mensaje',
            detail: 'Usuario creado',
          });
        },
      });
  }

  onVolver(): void {
    this.router.navigate(['/usuarios']);
  }
}
