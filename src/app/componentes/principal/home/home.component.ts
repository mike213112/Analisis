import { LoginService } from './../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: string;

  constructor(private router: Router,
              private mensaje: ToastrService,
              private auth: LoginService) { }

  ngOnInit() {
    this.auth.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.email = auth.email;
      }else{

      }
    })
  }

  Consultar(){
    this.mensaje.success('Bienvenido de nuevo Administrador');
    this.router.navigate(['/home/user/admin']);
  }

  Perfil(){
    this.mensaje.success('Bienvenido de nuevo Empleado');
    this.router.navigate(['/home/user/view/profile']);
  }

  Regresar() {
    this.auth.logout();
    this.router.navigate(['/accounts/login']);
    this.mensaje.success('Cierre de session con exito');
  }

}
