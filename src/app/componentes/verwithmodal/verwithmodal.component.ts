import { Firebase1 } from '../../models/firebase1';
import { FirebaseService } from './../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'analisis-verwithmodal',
  templateUrl: './verwithmodal.component.html',
  styleUrls: ['./verwithmodal.component.scss']
})
export class VerwithmodalComponent implements OnInit {

  constructor(private toastr: ToastrService,
              public baseService: FirebaseService) {
     }

     @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(): void {
  }

  onSubmit(myform: NgForm): void {
    if(confirm('Estas seguro de que quieres modificar este empleado?')){
      // this.baseService.ActualizarUsuario(myform.value);
      this.baseService.ActualizarUsuario(myform.value);
      this.toastr.success('Producto Actualizado');
      this.resetForm(myform);
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.baseService.Usuarios = new Firebase1();
  }

}
