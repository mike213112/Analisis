import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SeleccionarUsuario: AngularFireList<any>;

  constructor(private autfire: AngularFireAuth) { }

  InicioSesion(correo: string, contraseña: string){
    return new Promise(( retornar, reject ) => {
        this.autfire.auth.signInWithEmailAndPassword(correo, contraseña)
        .then( Datausuario => retornar(Datausuario),
        error => reject(error));
    });
  }


  Registrarse(correo: string, contraseña: string){
    return new Promise((retornar, reject) => {
      this.autfire.auth.createUserWithEmailAndPassword(correo, contraseña)
      // .then(userData => {retornar(userData),
        // this.CrearRoles(userData.user);
        // }).catch(err => reject(err));
        .then(userData => retornar(userData),
        err => reject(err));
      });
  }

  ObtenerUsuario(){
    return this.autfire.authState.pipe(map(usuario => usuario));
  }

}


