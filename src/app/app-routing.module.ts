import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './core/components/sesion/sesion.component';
import { HomeComponent } from './core/components/home/home.component';
import { ContactoComponent } from './core/components/contacto/contacto.component';

const routes: Routes = [
  

  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'contacto', component: ContactoComponent },
  
  { path: 'admin', loadChildren: () => 
  import('./admin/admin.module').then(m => m.AdminModule) },

  { path: 'inicio-usuario', loadChildren: () => 
  import('./cuenta-usuario/cuenta-usuario.module').then(m => m.CuentaUsuarioModule ) },

  { path: 'categorias', loadChildren: () => 
  import('./categorias/categorias.module').then(m => m.CategoriasModule) },

  { path: 'articulos', loadChildren: () => 
  import('./articles/articles.module').then(m => m.ArticlesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
