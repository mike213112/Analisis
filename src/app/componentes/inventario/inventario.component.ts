import { ToastrService } from 'ngx-toastr';
import { Firebase1 } from '../../models/firebase1';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  listarEmpleados: Firebase1[];

  constructor(private user: FirebaseService,
              private mensaje: ToastrService,
              private router: Router) { }

  ngOnInit(){
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
    this.router.navigate(['/home/user/admin']);
  }

}
