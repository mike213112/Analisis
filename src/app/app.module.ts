import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, FormGroup, FormControlName } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';
import { LoginService } from './services/login.service';
import { environment } from '../environments/environment';

import { LoginComponent } from './componentes/inicio/login/login.component';
import { RegisterComponent } from './componentes/inicio/register/register.component';
import { HomeComponent } from './componentes/principal/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RrhhComponent } from './componentes/rrhh/rrhh.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { PrincipalComponent } from './componentes/inicio/principal/principal.component';
import { CrearUsuarioComponent } from './componentes/perfil/crear-usuario/crear-usuario.component';
import { CrearusuarioComponent } from './componentes/modals/crearusuario/crearusuario.component';
import { CrearcuentaComponent } from './componentes/modals/crearcuenta/crearcuenta.component';
import { EditarusuarioComponent } from './componentes/modals/editarusuario/editarusuario.component';
import { EditarwithmodalComponent } from './componentes/editarwithmodal/editarwithmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PerfilComponent,
    RrhhComponent,
    InventarioComponent,
    PrincipalComponent,
    CrearUsuarioComponent,
    CrearusuarioComponent,
    CrearcuentaComponent,
    EditarusuarioComponent,
    EditarwithmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    FirebaseService,
    LoginService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
