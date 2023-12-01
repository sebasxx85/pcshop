import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdmComponent } from './components/login-adm/login-adm.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReadProductComponent } from './components/read-product/read-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';


@NgModule({
  declarations: [
    LoginAdmComponent,
    DashboardComponent,
    CreateProductComponent,
    ReadProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [ 
    LoginAdmComponent,
    DashboardComponent,
    NavAdminComponent

  ],  
})
export class AdminModule { }
