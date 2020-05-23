import { ToastrService } from 'ngx-toastr';
import { Firebase1 } from '../../models/firebase1';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  listarEmpleados: Firebase1[];

  constructor(private user: FirebaseService,
              private mensaje: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
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
  }

  Regresar(){
    this.mensaje.success('Regreso, con exito');
    this.router.navigate(['/home']);
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
