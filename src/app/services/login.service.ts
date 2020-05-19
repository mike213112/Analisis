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

  InicioSesion(correo: string, contrasena: string){
    return new Promise(( retornar, reject ) => {
        this.autfire.auth.signInWithEmailAndPassword(correo, contrasena)
        .then( Datausuario => retornar(Datausuario),
        error => reject(error));
    });
  }


  Registrarse(correo: string, contrasena: string){
    return new Promise((retornar, reject) => {
      this.autfire.auth.createUserWithEmailAndPassword(correo, contrasena)
        .then(userData => retornar(userData),
        err => reject(err));
      });
  }

  ObtenerUsuario(){
    return this.autfire.authState.pipe(map(usuario => usuario));
  }

  logout() {
    return this.autfire.auth.signOut();
  }

}


