import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.scss']
})
export class RrhhComponent implements OnInit {

  isLogged: false;

  constructor(private mensaje: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  CrearUser(){
    this.mensaje.success('Crear Cuenta para el Empleado');
    this.router.navigate(['home/user/admin/create/user']);
  }

  CrearEmpleado(){
    this.mensaje.success('Registrar nuevo Empleado');
    this.router.navigate(['home/user/admin/create/employee']);
  }

  Editar(){
    this.mensaje.success('Editar o Eliminar el Empleado');
    this.router.navigate(['home/user/admin/edit_or_delete/employee']);
  }

  VerEmpleado(){
    this.mensaje.success('Ver los empleados Empleado');
    this.router.navigate(['home/user/admin/view/employee/profile']);
  }

  Regresar(){
    this.mensaje.success('Regreso, con exito');
    this.router.navigate(['/home']);
  }

}
