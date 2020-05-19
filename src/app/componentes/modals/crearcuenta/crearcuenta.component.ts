import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'analisis-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.scss']
})
export class CrearcuentaComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
              private autenticar: LoginService,
              private mensaje: ToastrService) { }

  ngOnInit(): void {
  }

  Register(){
    this.autenticar.Registrarse(this.email, this.password)
    .then((res) =>  {
      this.mensaje.success('Usuario Registrado');
      this.router.navigate(['/home/user/admin']);
    });
  }

  Regresar(){
    this.mensaje.success('Regreso, con exito');
    this.router.navigate(['/home/user/admin']);
  }

}
