import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: 'usuarios' },
      { label: 'Posts', icon: 'pi pi-fw pi-book', routerLink: 'posts' },
    ];
  }
}
