import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdmComponent } from './components/login-adm/login-adm.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    
    { path: 'admin-login', component: LoginAdmComponent },
    { path: 'dashboard', component: DashboardComponent },

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }