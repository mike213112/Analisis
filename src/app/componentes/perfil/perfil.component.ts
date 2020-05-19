import { ToastrService } from 'ngx-toastr';
import { Firebase } from './../../models/firebase';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  listarEmpleados: Firebase[];

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
        this.listarEmpleados.push(x as Firebase);
      });
    });
  }

  Regresar(){
    this.mensaje.success('Regreso, con exito');
    this.router.navigate(['/home']);
  }

}
