import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { MostrarProductosComponent } from './components/mostrar-productos/mostrar-productos.component';
import { CardsComponent } from './components/cards/cards.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { ArticlesRoutingModule } from './articles.routing.module';
import { PromocionesComponent } from './components/promociones/promociones.component';


@NgModule({
  declarations: [
    ProductsComponent,
    MostrarProductosComponent,
    CardsComponent,
    PromocionesComponent,
  ],
  imports: [
    CommonModule,
    //Importantdo el modulo Ang Material
    AngularmaterialModule,
    ArticlesRoutingModule
  ],
  exports: [
    ProductsComponent,
    MostrarProductosComponent,
    CardsComponent,
    PromocionesComponent
  ]
})
export class ArticlesModule { }
