import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'analisis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo: string;
  contrasena: string;

  constructor(private router: Router,
              private autenticar: LoginService) { }

  ngOnInit(): void {
  }

  Inicio(){
    this.autenticar.InicioSesion(this.correo, this.contrasena)
    .then(( res ) => {
      this.router.navigate(['/home']);
    }).catch(( error) => {
      this.router.navigate(['/principal/user/login']);
    });
  }

  Regresar(){
    this.router.navigate(['/principal']);
  }

}
