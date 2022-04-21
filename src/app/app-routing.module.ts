import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },

  {
    path: 'post',
    loadChildren: () =>
      import('./modules/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  { path: 'usuario', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
