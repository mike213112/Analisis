import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Firebase1 } from '../models/firebase1';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  SelectUsuario: AngularFireList<any>;

  Usuarios: Firebase1 = new Firebase1();

  constructor(private userdata: AngularFireDatabase) { }

  ObtenerUsuarios(){
    return this.SelectUsuario = this.userdata.list('Usuarios');
  }

  ObtenerDepartamento(){
    return this.SelectUsuario = this.userdata.list('Departamentos');
  }

  ObtenerSalario(){
    return this.SelectUsuario = this.userdata.list('SalarioBase');
  }

  ObtenerHorasExtras(){
    return this.SelectUsuario = this.userdata.list('HorasExtras');
  }

  ObtenerDiasLaborales(){
    return this.SelectUsuario = this.userdata.list('DiasLaborales');
  }

  ObtenerDiasFestivos(){
    return this.SelectUsuario = this.userdata.list('DiasFestivos');
  }

  CrearUsuario(usuario: Firebase1){
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

  ActualizarUsuario(usuario: Firebase1){
    this.SelectUsuario.update(usuario.$id, {
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

  Departamentos(usuario: Firebase1){
    this.SelectUsuario.push({
      departamento: usuario.departamento
    });
  }

  Salario(usuario: Firebase1){
    this.SelectUsuario.push({
      salarioBase: usuario.salarioBase
    });
  }

  DiasLaborales(usuario: Firebase1){
    this.SelectUsuario.push({
      diasLaborales: usuario.diasLaborales
    });
  }

  DiasFestivos(usuario: Firebase1){
    this.SelectUsuario.push({
      diasFestivos: usuario.diasFestivos
    });
  }

  HorasExtras(usuario: Firebase1){
    this.SelectUsuario.push({
      horasExtras: usuario.horasExtras
    });
  }

  EliminarUsuario($idEmpleado: string){
    this.SelectUsuario.remove($idEmpleado);
  }

}
