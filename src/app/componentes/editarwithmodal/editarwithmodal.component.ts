import { Firebase1 } from '../../models/firebase1';
import { FirebaseService } from './../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'analisis-editarwithmodal',
  templateUrl: './editarwithmodal.component.html',
  styleUrls: ['./editarwithmodal.component.scss']
})
export class EditarwithmodalComponent implements OnInit {

  constructor(private toastr: ToastrService,
              public baseService: FirebaseService) {
               }

    @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(): void{

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
