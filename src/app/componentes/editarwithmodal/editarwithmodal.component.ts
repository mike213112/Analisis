import { Firebase } from './../../models/firebase';
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

  listarUsuarios: Firebase[];

  constructor(private toastr: ToastrService,
              public baseService: FirebaseService) {
               }

  @ViewChild('btnClose') btnClose: ElementRef;
  ngOnInit(){
    this.baseService.ObtenerUsuarios()
    .snapshotChanges()
    .subscribe(item => {
      this.listarUsuarios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listarUsuarios.push(x as Firebase);
      });
    });
  }

  onSubmit(myform: NgForm): void {
    if(confirm('Estas seguro de que quieres modificar este empleado?')){
      this.baseService.ActualizarUsuario(myform.value);
      this.toastr.success('Producto Actualizado');
      this.resetForm(myform);
      this.btnClose.nativeElement.click();
    }
  }

  resetForm(myform?: NgForm){
    if(myform != null)
    myform.reset();
    this.baseService.Usuarios = new Firebase();
  }

}
