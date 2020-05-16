import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'analisis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo: string;
  contrasena: string;

  constructor(private router: Router,
              private autenticar: LoginService,
              private toat: ToastrService) { }

  ngOnInit(): void {
  }

  Inicio(){
    this.autenticar.InicioSesion(this.correo, this.contrasena)
    .then(( res ) => {
      this.toat.success('Bienvenido de nuevo');
      this.router.navigate(['/home']);
    }).catch(( error) => {
      this.toat.error('Sus credenciales son incorrectas');
      this.router.navigate(['/accounts/login']);
    });
  }

  Regresar(){
    this.router.navigate(['/principal']);
  }

}
