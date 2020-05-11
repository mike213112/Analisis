import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/inicio/login/login.component';
import { PrincipalComponent } from './componentes/inicio/principal/principal.component';
import { RegisterComponent } from './componentes/inicio/register/register.component';
import { HomeComponent } from './componentes/principal/home/home.component';
import { RrhhComponent } from './componentes/rrhh/rrhh.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';

const routes: Routes = [
  { path: 'accounts/login', component: LoginComponent},
  { path: 'accounts/register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/usuarios', component: RrhhComponent },
  { path: 'home/perfil', component: PerfilComponent },
  { path: 'home/inventario', component: InventarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'accounts/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
