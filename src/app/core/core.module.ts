import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionComponent } from './components/sesion/sesion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    SesionComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ContactoComponent,

  ],
  imports: [
    CommonModule,
   
  ],
  exports: [ 
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SesionComponent,
    MenuComponent,
    ContactoComponent,
  ]
})
export class CoreModule { }
