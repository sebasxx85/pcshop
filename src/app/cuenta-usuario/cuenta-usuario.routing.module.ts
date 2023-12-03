import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { CerrarSesionUsuarioComponent } from './components/cerrar-sesion-usuario/cerrar-sesion-usuario.component';
import { DashUsuarioComponent } from './components/dash-usuario/dash-usuario.component';
import { UsuarioHomeComponent } from './components/usuario-home/usuario-home.component';
import { MicuentaComponent } from './components/micuenta/micuenta.component';

const routes: Routes = [
    
    {
        path: 'usuario', component: UsuarioHomeComponent,
        children: [
            { path: 'inicio-usuario', component: InicioUsuarioComponent },
            { path: 'cerrar-usuario', component: CerrarSesionUsuarioComponent },
            { path: 'dash-usuario', component: DashUsuarioComponent }, 
            { path: 'mi-cuenta', component: MicuentaComponent }, 
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CuentaUsuarioRoutingModule { }