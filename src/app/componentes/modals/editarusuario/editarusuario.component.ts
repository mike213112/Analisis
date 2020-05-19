import { FirebaseService } from './../../../services/firebase.service';
import { Firebase } from './../../../models/firebase';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'analisis-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss']
})
export class EditarusuarioComponent implements OnInit {

  listarEmpleados: Firebase[];

  constructor(private router: Router,
              private mensaje: ToastrService,
              private user: FirebaseService) { }

  ngOnInit() {
    this.user.ObtenerUsuarios()
    .snapshotChanges()
    .subscribe(item => {
      this.listarEmpleados = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarEmpleados.push(x as Firebase)
      });
    });

  }

  Regresar(){
    this.mensaje.success('Regreso, con exito');
    this.router.navigate(['/home/user/admin']);
  }

  Editar(usuario: Firebase){
    this.user.Usuarios = Object.assign({}, usuario);
  }

  Delect($idEmpleado: string){
    if(confirm('Estas seguro de querer eliminar este empleado del sistema?')){
      this.user.EliminarUsuario($idEmpleado);
      this.mensaje.success('El empleado ha sido eliminado correctamente');
    }
  }

}
