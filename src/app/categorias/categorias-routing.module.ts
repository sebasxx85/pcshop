import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MemoriasComponent } from './components/memorias/memorias.component';
import { MousesComponent } from './components/mouses/mouses.component';
import { PantallasComponent } from './components/pantallas/pantallas.component';
import { TecladosComponent } from './components/teclados/teclados.component';
import { AccesoriosCelComponent } from './components/accesorios-cel/accesorios-cel.component';


const routes: Routes = [

    {
        path: 'categorias', component: CategoriasComponent,
        children: [
            { path: 'memorias', component: MemoriasComponent },
            { path: 'mouses', component: MousesComponent },
            { path: 'pantallas', component: PantallasComponent },
            { path: 'teclados', component: TecladosComponent },
            { path: 'accesorios_cel', component: AccesoriosCelComponent },
        ],
    },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriasRoutingModule { }