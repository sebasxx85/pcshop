import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarProductosComponent } from './components/mostrar-productos/mostrar-productos.component';
import { PromocionesComponent } from './components/promociones/promociones.component';

const routes: Routes = [

    {path: 'lista-productos', component: MostrarProductosComponent},
    {path: 'promociones', component: PromocionesComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }