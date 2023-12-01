import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { CerrarSesionUsuarioComponent } from './components/cerrar-sesion-usuario/cerrar-sesion-usuario.component';
import { DashUsuarioComponent } from './components/dash-usuario/dash-usuario.component';
import { CuentaUsuarioRoutingModule } from './cuenta-usuario.routing.module';
import { UsuarioHomeComponent } from './components/usuario-home/usuario-home.component';

@NgModule({
  declarations: [
    InicioUsuarioComponent,
    CerrarSesionUsuarioComponent,
    DashUsuarioComponent,
    UsuarioHomeComponent
  ],
  imports: [
    CommonModule,
    CuentaUsuarioRoutingModule
  ],
  exports: [
    InicioUsuarioComponent,
    CerrarSesionUsuarioComponent,
    DashUsuarioComponent,
    UsuarioHomeComponent
  ]
})
export class CuentaUsuarioModule { }
