import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Firebase } from '../models/firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  SelectUsuario: AngularFireList<any>;

  Usuarios: Firebase = new Firebase();

  constructor(private userdata: AngularFireDatabase) { }

  ObtenerUsuarios(){
    return this.SelectUsuario =  this.userdata.list('Usuarios');
  }

  CrearUsuario(usuario: Firebase){
    this.SelectUsuario.push({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      departamento: usuario.departamento,
      puesto: usuario.puesto,
      salarioBase: usuario.salarioBase,
      bonificacion: usuario.bonificacion,
      horasExtras: usuario.horasExtras,
      comisiones: usuario.comisiones,
      diasLaborales: usuario.diasLaborales,
      diasFestivos: usuario.diasFestivos,
      viaticos: usuario.viaticos,
      gastosDeRepresentacion: usuario.gastosDeRepresentacion,
      igss: usuario.igss,
      aporteAlIva: usuario.aporteAlIva,
      salarioBruto: usuario.salarioBruto
    });
  }

  ActualizarUsuario(usuario: Firebase){
    this.SelectUsuario.update(usuario.$idEmpleado, {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      departamento: usuario.departamento,
      puesto: usuario.puesto,
      salarioBase: usuario.salarioBase,
      bonificacion: usuario.bonificacion,
      horasExtras: usuario.horasExtras,
      comisiones: usuario.comisiones,
      diasLaborales: usuario.diasLaborales,
      diasFestivos: usuario.diasFestivos,
      viaticos: usuario.viaticos,
      gastosDeRepresentacion: usuario.gastosDeRepresentacion,
      igss: usuario.igss,
      aporteAlIva: usuario.aporteAlIva,
      salarioBruto: usuario.salarioBruto
    });
  }

  EliminarUsuario($idEmpleado: string){
    this.SelectUsuario.remove($idEmpleado);
  }

}
