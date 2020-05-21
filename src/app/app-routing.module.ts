import { ProtegerGuard } from './guards/proteger.guard';
import { EditarusuarioComponent } from './componentes/modals/editarusuario/editarusuario.component';
import { CrearusuarioComponent} from './componentes/modals/crearusuario/crearusuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/inicio/login/login.component';
import { RegisterComponent } from './componentes/inicio/register/register.component';
import { HomeComponent } from './componentes/principal/home/home.component';
import { RrhhComponent } from './componentes/rrhh/rrhh.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { CrearcuentaComponent } from './componentes/modals/crearcuenta/crearcuenta.component';

const routes: Routes = [
  { path: 'accounts/login', component: LoginComponent },
  { path: 'accounts/register', component: RegisterComponent, canActivate: [ProtegerGuard] },
  { path: 'home', component: HomeComponent, canActivate: [ProtegerGuard] },
  { path: 'home/user/admin', component: RrhhComponent, canActivate: [ProtegerGuard] },
  { path: 'home/user/admin/create/user',component: CrearcuentaComponent, canActivate: [ProtegerGuard] },
  { path: 'home/user/admin/create/employee', component: CrearusuarioComponent, canActivate: [ProtegerGuard] },
  { path: 'home/user/admin/edit_or_delete/employee', component: EditarusuarioComponent, canActivate: [ProtegerGuard] },
  { path: 'home/user/admin/view/employee/profile', component: InventarioComponent, canActivate: [ProtegerGuard] },
  { path: 'home/user/view/profile', component: PerfilComponent, canActivate: [ProtegerGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'accounts/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
