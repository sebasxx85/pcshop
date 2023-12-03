import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { ArticlesModule } from './articles/articles.module';
import { CuentaUsuarioModule } from './cuenta-usuario/cuenta-usuario.module';
import { CategoriasModule } from './categorias/categorias.module';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesModule,
    AdminModule,
    CategoriasModule,
    CoreModule,
    CuentaUsuarioModule,
    AngularmaterialModule,
    SharedModule,
    ReactiveFormsModule, 
    FormsModule, NgbModule

  ],
  exports: [
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
