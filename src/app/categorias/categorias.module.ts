import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallasComponent } from './components/pantallas/pantallas.component';
import { MemoriasComponent } from './components/memorias/memorias.component';
import { TecladosComponent } from './components/teclados/teclados.component';
import { MousesComponent } from './components/mouses/mouses.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { AccesoriosCelComponent } from './components/accesorios-cel/accesorios-cel.component';
import { Nav2Component } from './components/nav2/nav2.component';



@NgModule({
  declarations: [
    CategoriasComponent,
    PantallasComponent,
    MemoriasComponent,
    TecladosComponent,
    MousesComponent,
    AccesoriosCelComponent,
    Nav2Component
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],
  exports: [
    CategoriasComponent,
    PantallasComponent,
    MemoriasComponent,
    TecladosComponent,
    MousesComponent,
    AccesoriosCelComponent,
    Nav2Component
  ],
})
export class CategoriasModule { }
