import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { CerrarSesionUsuarioComponent } from './components/cerrar-sesion-usuario/cerrar-sesion-usuario.component';
import { DashUsuarioComponent } from './components/dash-usuario/dash-usuario.component';
import { CuentaUsuarioRoutingModule } from './cuenta-usuario.routing.module';
import { UsuarioHomeComponent } from './components/usuario-home/usuario-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MicuentaComponent } from './components/micuenta/micuenta.component';

@NgModule({
  declarations: [
    InicioUsuarioComponent,
    CerrarSesionUsuarioComponent,
    DashUsuarioComponent,
    UsuarioHomeComponent,
    MicuentaComponent
  ],
  imports: [
    CommonModule,
    CuentaUsuarioRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [
    InicioUsuarioComponent,
    CerrarSesionUsuarioComponent,
    DashUsuarioComponent,
    UsuarioHomeComponent,
    MicuentaComponent
  ]
})
export class CuentaUsuarioModule { }
