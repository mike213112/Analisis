import { LoginService } from './../../../services/login.service';
import { FirebaseService } from './../../../services/firebase.service';
import { Firebase1 } from '../../../models/firebase1';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'analisis-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss']
})
export class EditarusuarioComponent implements OnInit {

  email: string;
  listarEmpleados: Firebase1[];

  constructor(private router: Router,
              private mensaje: ToastrService,
              private user: FirebaseService,
              private authService: LoginService) { }

  ngOnInit() {
    this.user.ObtenerUsuarios()
    .snapshotChanges()
    .subscribe(item => {
      this.listarEmpleados = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarEmpleados.push(x as Firebase1);
      });
    });
    //
    this.authService.ObtenerUsuario().subscribe(auth => {
      if(auth){
        //this.isLogged = true;
        this.email = auth.email;
      // }else{
      //   this.isLogged = false;
       }
    });
  }

  Regresar(){
    this.mensaje.success('Regreso, con exito');
    this.router.navigate(['/home/user/admin']);
  }

  Editar(usuario: Firebase1){
    this.user.Usuarios = Object.assign({}, usuario);
  }

  Delect($id: string){
    if(confirm('Estas seguro de querer eliminar este empleado del sistema?')){
      this.user.EliminarUsuario($id);
      this.mensaje.success('El empleado ha sido eliminado correctamente');
    }
  }

}
