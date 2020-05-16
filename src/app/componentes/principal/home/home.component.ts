import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'analisis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Consultar(){
    this.router.navigate(['/home/user/admin']);
  }

  Perfil(){
    this.router.navigate(['/home/user/profile']);
  }

}
