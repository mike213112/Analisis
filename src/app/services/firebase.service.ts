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

  CrearUsuario(usuario: Firebase){
    this.SelectUsuario.push({
      idemployee: usuario.idemployee,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      departamento: usuario.departamento,
      salarioBase: usuario.salarioBase,
      bonificacion: usuario.bonificacion,
      horasExtras: usuario.horasExtras,
      comisiones: usuario.comisiones,
      diasLaborales: usuario.diasLaborales,
      viaticos: usuario.viaticos,
      gastosDeRepresentacion: usuario.gastosDeRepresentacion,
      igss: usuario.igss,
      aporteAlIva: usuario.aporteAlIva,
      salarioBruto: usuario.salarioBruto
    });
  }

  ActualizarUsuario(usuario: Firebase){
    this.SelectUsuario.update(usuario.$idEmpleado, {
      idemployee: usuario.idemployee,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      departamento: usuario.departamento,
      salarioBase: usuario.salarioBase,
      bonificacion: usuario.bonificacion,
      horasExtras: usuario.horasExtras,
      comisiones: usuario.comisiones,
      diasLaborales: usuario.diasLaborales,
      viaticos: usuario.viaticos,
      gastosDeRepresentacion: usuario.gastosDeRepresentacion,
      igss: usuario.igss,
      aporteAlIva: usuario.aporteAlIva,
      salarioBruto: usuario.salarioBruto
    });
  }

  Departamentos(usuario: Firebase){
    this.SelectUsuario.push({
      departamento: usuario.departamento
    });
  }

  Salario(usuario: Firebase){
    this.SelectUsuario.push({
      salarioBase: usuario.salarioBase
    });
  }

  DiasLaborales(usuario: Firebase){
    this.SelectUsuario.push({
      diasLaborales: usuario.diasLaborales
    });
  }

  DiasFestivos(usuario: Firebase){
    this.SelectUsuario.push({
      diasFestivos: usuario.diasFestivos
    });
  }

  HorasExtras(usuario: Firebase){
    this.SelectUsuario.push({
      horasExtras: usuario.horasExtras
    });
  }

  EliminarUsuario($idEmpleado: string){
    this.SelectUsuario.remove($idEmpleado);
  }

}
