import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Firebase1 } from '../../../models/firebase1';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.scss']
})
export class CrearusuarioComponent implements OnInit {

  listarHorasExtras: Firebase1[];
  listarDepartamentos: Firebase1[];
  listarDiasLaborables: Firebase1[];
  listarDiasFestivos: Firebase1[];
  listarSalario: Firebase1[];
  listarUsuarios: Firebase1[];

  constructor(public baseService: FirebaseService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.baseService.ObtenerHorasExtras()
    .snapshotChanges()
    .subscribe(item => {
      this.listarHorasExtras = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarHorasExtras.push(x as Firebase1);
      });
    });
    //
    this.baseService.ObtenerDepartamento()
    .snapshotChanges()
    .subscribe(item => {
      this.listarDepartamentos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarDepartamentos.push(x as Firebase1);
      });
    });
    // //
    this.baseService.ObtenerDiasLaborales()
    .snapshotChanges()
    .subscribe(item => {
      this.listarDiasLaborables = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarDiasLaborables.push(x as Firebase1);
      });
    });
    // //
    this.baseService.ObtenerDiasFestivos()
    .snapshotChanges()
    .subscribe(item => {
      this.listarDiasFestivos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarDiasFestivos.push(x as Firebase1);
      });
    });
    //
    this.baseService.ObtenerUsuarios()
    .snapshotChanges()
    .subscribe(item => {
      this.listarUsuarios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarUsuarios.push(x as Firebase1);
      });
    });

    this.resetForm();
    // this.authService.GetUser().subscribe(auth => {
    //   if(auth){
    //     this.isLogged = true;
    //     this.email = auth.email;
    //   }else{
    //     this.isLogged = false;
    //   }
    // });
  }

  onSubmit(myform: NgForm){
    // this.baseService.Productos(myform.value);
    this.baseService.CrearUsuario(myform.value);
    this.toastr.success('Se agrego un nuevo producto');
    this.resetForm(myform);
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.baseService.Usuarios = new Firebase1();
  }

  Regresar(){
    this.toastr.success('Regreso, con exito ');
    this.router.navigate(['/home/user/admin']);
  }

  // Logout() {
  //   this.authService.Logout();
  //   this.router.navigate(['/principal']);
  //   this.toastr.success('Cierre de session con exito');
  // }

}
