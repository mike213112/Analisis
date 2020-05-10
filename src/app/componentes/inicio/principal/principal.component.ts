import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analisis-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  isLogged: false;

  constructor() { }

  ngOnInit(): void {
  }

  Logout(){

  }

}
